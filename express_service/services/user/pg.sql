CREATE TABLE ncandidates (
    id SERIAL PRIMARY KEY,
    "fullName" VARCHAR(255),
    "jobPosition" VARCHAR(255),
    avatar VARCHAR(255),
    dob DATE,
    gender VARCHAR(50),
    "yearsOfExperience" INT DEFAULT 0 NOT NULL,
    email VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(50),
    "socialLink" VARCHAR(255),
    github VARCHAR(255),
    technicals TEXT[],
    summary TEXT,
    "softSkills" TEXT[],
    "workExperience" JSONB[],
    education JSONB[],
    projects JSONB[],
    languages JSONB[],
    hobbies TEXT[],
    activities JSONB[],
    "otherInformations" JSONB[],
    "myCVs" TEXT[],
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create cvs table
CREATE TABLE ncvs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
	"link" VARCHAR(255),
    "listJob" VARCHAR(50)[],
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock data into the table
INSERT INTO ncvs (user_id, "link", "listJob")
VALUES 
(1, 'http://example.com/resume1', ARRAY['Developer', 'Designer']),
(2, 'http://example.com/resume2', ARRAY['Manager', 'Consultant']),
(3, 'http://example.com/resume3', ARRAY['Tester', 'Analyst']),
(4, 'http://example.com/resume4', ARRAY['Support', 'Admin']),
(5, 'http://example.com/resume5', ARRAY['Engineer', 'Architect']);