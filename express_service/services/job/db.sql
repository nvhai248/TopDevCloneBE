CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyId INT NOT NULL,
    createdBy INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    salary VARCHAR(255),
    responsibilities TEXT NOT NULL,
    skills TEXT NOT NULL,
    extends TEXT,
    welfare TEXT,
    experienceYearsMin INT,
    experienceYearsMax INT,
    level VARCHAR(255),
    type VARCHAR(255),
    typeContract VARCHAR(255),
    techs TEXT,
    interviewProcess TEXT,
    followedCount INT DEFAULT 0,
    appliedCount INT DEFAULT 0,
    status INT NOT NULL DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS companies (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    url VARCHAR(255),
    nationality VARCHAR(255),
    companySize VARCHAR(255),
    skills TEXT,
    status INT NOT NULL DEFAULT -1,
    image VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    followedCount SMALLINT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);