const router = require("express").Router();
const dbConnection = require("./database");
const { v4: uuidv4 } = require("uuid"); // Import the v4 function from the uuid library

const handlers = {
  test: (req, res, next) => {
    dbConnection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
      if (err) throw err;
      console.log("The solution is: ", rows[0].solution);
    });
    return res.status(200).json({ msg: "Hello from company service split!" });
  },
  createDB: (req, res, next) => {
    const resetQuery = `DROP TABLE IF EXISTS Company;`;
    dbConnection.query(resetQuery, (err, result) => {
      if (err) throw err;
      console.log("delete successfull");
    });

    const createQuery = `
    CREATE TABLE company (
      id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(255),
      address VARCHAR(255),
      fields VARCHAR(255),
      size VARCHAR(20),
      nations VARCHAR(255),
      skills VARCHAR(255),
      about TEXT,
      introduction TEXT,
      benefit TEXT,
      imgs TEXT
  );  
    `;
    dbConnection.query(createQuery, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    const insertQuery = `
    INSERT INTO company (id, name, address, fields, size, nations, skills, about, introduction, benefit, imgs) VALUES (
      'company1',
      'CÔNG TY CỔ PHẦN SHOWNIQ',
      '299 Hoàng Diệu, Phường 06, Quận 4, Thành phố Hồ Chí Minh',
      '["Software", "Thương mại điện tử/ Bán lẻ"]',
      '25-99',
      '["South-Korea", "Vietnam"]',
      '["PHP", "SQL"]',
      '<div>IT company specializing in AI, mobile, KIOSK development</div>',
      '<div><div><b>NEXACORN</b> is an IT company specializing in the development and provision of various AI software solutions, and platform services. With a team of highly specialized professionals in the field of 4.0 technology, we utilize advanced technologies such as machine learning training, in-depth development of artificial intelligence core technology (Artificial Intelligence - AI), and Big Data, Cloud, Blockchain</div><div><b>NEXACORN</b> conducts research to deliver software products of the highest quality to users. Our aim is to contribute to making human life more beautiful and happier through our software products.</div></div>',
      '<div><div>Salary is paid according to employee capacity.</div><div>Salary adjustment 1-2 times a year (KPI)</div><div>Work Monday to Friday</div><div>Lunar New Year (minimum bonus 13 months salary and seniority and additional bonus depending on business situation)</div></div>',
      '["https://assets.topdev.vn/images/2023/04/17/TopDev-68xx80rBWc3Xz0wK-1681701152.jpg", "https://assets.topdev.vn/images/2023/04/17/TopDev-1U5jhZLKrZ0PhWbu-1681701152.jpg"]'
  );  
    `;
    dbConnection.query(insertQuery, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    return res.status(200).json({ msg: "Create db successfulll!" });
  },
  getCompany: (req, res, next) => {
    const companyId = req.params.companyId;
    const selectQuery = "SELECT * FROM Company WHERE id = ? ";
    dbConnection.query(selectQuery, companyId, (err, results) => {
      if (err) {
        console.error("Error fetching company data:", err);
        res.status(500).json({ error: "Failed to fetch company data" });
        return;
      }

      if (results.length === 0) {
        console.log("Company not found.");
        res.status(404).json({ error: "Company not found" });
        return;
      }

      const company = results[0];
      company.fields = JSON.parse(company.fields);
      company.nations = JSON.parse(company.nations);
      company.skills = JSON.parse(company.skills);
      company.imgs = JSON.parse(company.imgs);

      console.log("Company data:", company);
      res.status(200).json({ data: company });
    });
  },
};

router.get("/", handlers.test);
router.get("/createdb", handlers.createDB);
router.get("/company/:companyId", handlers.getCompany);

module.exports = router;
