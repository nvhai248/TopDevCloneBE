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
      imgs TEXT,
      products TEXT
  );  
    `;
    dbConnection.query(createQuery, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    const insertQuery = `
    INSERT INTO company (id, name, address, fields, size, nations, skills, about, introduction, benefit, imgs, products) VALUES (
      'company1',
      'CÔNG TY CỔ PHẦN SHOWNIQ',
      '299 Hoàng Diệu, Phường 06, Quận 4, Thành phố Hồ Chí Minh',
      '["Software", "Thương mại điện tử/ Bán lẻ"]',
      '25-99',
      '["South-Korea", "Vietnam"]',
      '["PHP", "SQL"]',
      '["IT company specializing in AI, mobile, KIOSK development"]',
      '["SHOWNIQ is a fashion tech startup established with the vision of innovating the fashion consumption culture of ASEAN through AI in 2022.", "Starting with the launch of SHOWNIQ, an AI-based fashion curation platform in 2023, we will develop vigorously with the goal of becoming the Top AI fashion platform in ASEAN by 2027"]',
      '["Salary is paid according to employee capacity.", "Salary adjustment 1-2 times a year (KPI)", "Work Monday to Friday", "Lunar New Year (minimum bonus 13 months salary and seniority and additional bonus depending on business situation)"]',
      '["https://assets.topdev.vn/images/2023/04/17/TopDev-68xx80rBWc3Xz0wK-1681701152.jpg", "https://assets.topdev.vn/images/2023/04/17/TopDev-1U5jhZLKrZ0PhWbu-1681701152.jpg"]',
      '[{"id": "product1", "name": "ProductName", "description": "Starting with the launch of SHOWNIQ, an AI-based fashion curation platform in 2023, we will develop vigorously with the goal of becoming the Top AI fashion platform in ASEAN by 2027", "image": "https://salt.topdev.vn/2gC4Bjo3Negx-kwiaODzE-qkNEeQ7HNT7qkato9VKiE/fit/128/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA2LzE5L1NjcmVlbnNob3QtMjAyMy0wNi0xOS0wODIyMzUtMTY4NzEzNzgwNC5wbmc"}]'
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
      company.about = JSON.parse(company.about);
      company.introduction = JSON.parse(company.introduction);
      company.benefit = JSON.parse(company.benefit);
      company.imgs = JSON.parse(company.imgs);
      company.products = JSON.parse(company.products);

      console.log("Company data:", company);
      res.status(200).json({ data: company });
    });
  },
};

router.get("/", handlers.test);
router.get("/createdb", handlers.createDB);
router.get("/company/:companyId", handlers.getCompany);

module.exports = router;
