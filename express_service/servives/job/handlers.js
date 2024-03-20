const router = require("express").Router();
const dbConnection = require("./database");
const { v4: uuidv4 } = require("uuid"); // Import the v4 function from the uuid library

const jobHandlers = {
  test: (req, res, next) => {
    dbConnection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
      if (err) throw err;
      console.log("The solution is: ", rows[0].solution);
    });
    return res.status(200).json({ msg: "Hello from job service split!" });
  },
  createJobDB: (req, res, next) => {
    const resetQuery = `DROP TABLE IF EXISTS Jobs;`;
    dbConnection.query(resetQuery, (err, result) => {
      if (err) throw err;
      console.log("delete successfull");
    });

    const createQuery = `
      CREATE TABLE IF NOT EXISTS Jobs (
        id VARCHAR(50) PRIMARY KEY,
        companyId VARCHAR(50),
        title VARCHAR(255),
        salary VARCHAR(50),
        responsibilities TEXT,
        skills TEXT,
        extends TEXT,
        welfare TEXT,
        experienceYearsMin VARCHAR(50),
        experienceYearsMax VARCHAR(50),
        level VARCHAR(50),
        type VARCHAR(50),
        typeContract VARCHAR(50),
        techs TEXT,
        interviewProcess TEXT,
        status VARCHAR(50) DEFAULT 'pending'
      );    
    `;
    dbConnection.query(createQuery, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    const insertQuery = `
    INSERT INTO Jobs (id, companyId, title, salary, responsibilities, skills, extends, welfare, experienceYearsMin, experienceYearsMax, level, type, typeContract, techs, interviewProcess, status) 
VALUES ('job1', 'company1', 'Software Developer (C++/Qt Framework)', '0', 
  '["As part of the team, you will develop and maintain cross-platform applications (Windows and Android) using Qt framework for Restaurant Solution (POS systems, tablet order, etc).", "Collaborate with the team to understand project requirements and translate them into technical solutions.", "Conduct testing and debugging of Qt applications to ensure optimal performance and reliability."]', 
  '["Experience in C++ software development, with a strong emphasis on Qt and QML.", "Experience in OOP (Object Oriented Programming)."]', 
  '["Experience working with RESTful APIs for data exchange between client and server applications.", "Familiarity with SQLite database management system, including database design, querying, and integration within Qt/QML applications."]', 
  '["Salary is paid according to employee capacity", "Salary adjustment 1-2 times a year (KPI)"]', 
  '0', '0', 'all', 'office', 'fulltime', '["C++", "Software Engineer"]', 
  '["Vòng 1: PV qua điện thoại", "Vòng 2: PV trực tiếp với Tech Lead (Bài test tùy vị trí)", "Vòng 3: Deal lương"]',
  'pending'
  );
    `;
    dbConnection.query(insertQuery, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    return res.status(200).json({ msg: "Hello from job service create db!" });
  },
  getJobs: (req, res, next) => {
    const { allType, companyId } = req.query;
    let selectQuery;
    let isAddedWhere = false;
    if (allType === "false" || !allType) {
      selectQuery = "SELECT * FROM Jobs WHERE status = 'approved'";
      isAddedWhere = true;
    } else if (allType && allType === "true") {
      selectQuery = "SELECT * FROM Jobs";
    }

    if (companyId) {
      if (isAddedWhere) {
        selectQuery += ` AND companyId = '${companyId}'`;
      } else {
        selectQuery += ` WHERE companyId = '${companyId}'`;
      }
    }

    dbConnection.query(selectQuery, (err, results) => {
      if (err) {
        console.error("Error fetching data from Jobs table:", err);
        return res.status(500).json("Error");
      }

      if (results.length === 0) {
        console.log("No jobs found.");
        return res.status(404).json("No jobs found.");
      }

      // Parse array-like fields into arrays for each job
      const jobs = results.map((job) => {
        job.responsibilities = JSON.parse(job.responsibilities);
        job.skills = JSON.parse(job.skills);
        job.extends = JSON.parse(job.extends);
        job.welfare = JSON.parse(job.welfare);
        job.techs = JSON.parse(job.techs);
        job.interviewProcess = JSON.parse(job.interviewProcess);
        return job;
      });

      // Now you can use the jobs array, where each job object has arrays for array-like fields
      // console.log("Jobs data:", jobs);
      return res.status(200).json({ data: jobs });
    });
  },
  createJob: (req, res, next) => {
    const job = req.body;
    const jobId = uuidv4(); // Generate a new UUID for job ID

    // Assign the generated UUID to the job object
    job.id = jobId;
    job.responsibilities = JSON.stringify(job.responsibilities);
    job.skills = JSON.stringify(job.skills);
    job.extends = JSON.stringify(job.extends);
    job.welfare = JSON.stringify(job.welfare);
    job.techs = JSON.stringify(job.techs);
    job.interviewProcess = JSON.stringify(job.interviewProcess);

    const insertQuery = "INSERT INTO Jobs SET ?";
    dbConnection.query(insertQuery, job, (err, result) => {
      if (err) {
        console.error("Error inserting job:", err);
        res.status(500).json({ error: "Failed to create job" });
        return;
      }

      console.log("Job created successfully:", result);
      return res.status(201).json({ message: "Job created successfully" });
    });
  },
  updateJobStatus: (req, res, next) => {
    const jobId = req.params.jobId;
    const newStatus = req.body.status;

    if (
      newStatus !== "pending" &&
      newStatus !== "approved" &&
      newStatus !== "rejected"
    ) {
      console.log("Invalid status:", newStatus);
      res.status(400).json({ error: "Invalid status" });
      return;
    }

    // Update the status of the job in the Jobs table
    const updateQuery = "UPDATE Jobs SET status = ? WHERE id = ?";
    dbConnection.query(updateQuery, [newStatus, jobId], (err, result) => {
      if (err) {
        console.error("Error updating job status:", err);
        res.status(500).json({ error: "Failed to update job status" });
        return;
      }

      if (result.affectedRows === 0) {
        console.log("Job not found.");
        res.status(404).json({ error: "Job not found" });
        return;
      }

      console.log("Job status updated successfully:", result);
      res.json({ message: "Job status updated successfully" });
    });
  },
  getJob: (req, res, next) => {
    const jobId = req.params.jobId;
    const selectQuery =
      "SELECT * FROM Jobs WHERE id = ? and status = 'approved'";
    dbConnection.query(selectQuery, jobId, (err, results) => {
      if (err) {
        console.error("Error fetching job data:", err);
        res.status(500).json({ error: "Failed to fetch job data" });
        return;
      }

      if (results.length === 0) {
        console.log("Job not found.");
        res.status(404).json({ error: "Job not found" });
        return;
      }

      const job = results[0];
      job.responsibilities = JSON.parse(job.responsibilities);
      job.skills = JSON.parse(job.skills);
      job.extends = JSON.parse(job.extends);
      job.welfare = JSON.parse(job.welfare);
      job.techs = JSON.parse(job.techs);
      job.interviewProcess = JSON.parse(job.interviewProcess);

      console.log("Job data:", job);
      res.status(200).json({ data: job });
    });
  },
};

router.get("/", jobHandlers.test);
router.get("/createdb", jobHandlers.createJobDB);
router.get("/jobs", jobHandlers.getJobs);
router.get("/job/:jobId", jobHandlers.getJob);
router.post("/create", jobHandlers.createJob);
router.put("/:jobId/status", jobHandlers.updateJobStatus);

module.exports = router;
