-- Create candidates table
CREATE TABLE IF NOT EXISTS candidates (
    id SERIAL PRIMARY KEY,
    avatar TEXT,
    email VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    gender VARCHAR(255),
    dob DATE,
    position VARCHAR(255),
    yoe INT,
    location VARCHAR(255),
    status_profile VARCHAR(255),
    address VARCHAR(255),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    summary TEXT,
    skills JSONB,
    experiences JSONB [],
    educations JSONB [],
    projects JSONB [],
    languages JSONB [],
    interests TEXT,
    ref JSONB [],
    activities JSONB [],
    certificates JSONB [],
    additional JSONB [],
    cover_letter TEXT,
    willing_to_work BOOLEAN,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create cvs table
CREATE TABLE IF NOT EXISTS cvs (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    changeable BOOLEAN,
    cv_data JSONB,
    url TEXT,
    is_main BOOLEAN,
    archive BOOLEAN,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create employers table
CREATE TABLE IF NOT EXISTS employers (
    id SERIAL PRIMARY KEY,
    company_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    status INT DEFAULT 0,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Function to update updatedAt field for candidates
CREATE
OR REPLACE FUNCTION update_candidates_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW."updatedAt" := CURRENT_TIMESTAMP;

RETURN NEW;

END;

$$ LANGUAGE plpgsql;

-- Trigger to update candidates.updatedAt
CREATE TRIGGER candidates_updated_at_trigger BEFORE
UPDATE
    ON candidates FOR EACH ROW EXECUTE FUNCTION update_candidates_updated_at();

-- Function to update updatedAt field for cvs
CREATE
OR REPLACE FUNCTION update_cvs_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW."updatedAt" := CURRENT_TIMESTAMP;

RETURN NEW;

END;

$$ LANGUAGE plpgsql;

-- Trigger to update cvs.updatedAt
CREATE TRIGGER cvs_updated_at_trigger BEFORE
UPDATE
    ON cvs FOR EACH ROW EXECUTE FUNCTION update_cvs_updated_at();

-- Function to update updatedAt field for employers
CREATE
OR REPLACE FUNCTION update_employers_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW."updatedAt" := CURRENT_TIMESTAMP;

RETURN NEW;

END;

$$ LANGUAGE plpgsql;

-- Trigger to update employers.updatedAt
CREATE TRIGGER employers_updated_at_trigger BEFORE
UPDATE
    ON employers FOR EACH ROW EXECUTE FUNCTION update_employers_updated_at();

-- Insert mock data into candidates table
INSERT INTO
    candidates (
        avatar,
        email,
        display_name,
        phone,
        gender,
        dob,
        position,
        yoe,
        location,
        status_profile,
        address,
        linkedin,
        github,
        summary,
        skills,
        experiences,
        educations,
        projects,
        languages,
        interests,
        ref,
        activities,
        certificates,
        additional,
        cover_letter,
        willing_to_work
    )
VALUES
    (
        'https://example.com/avatar1.jpg',
        'candidate1@example.com',
        'John Doe',
        '123-456-7890',
        'Male',
        '1990-05-15',
        'Software Developer',
        5,
        'San Francisco, CA',
        'Open to new opportunities',
        '123 Main St, San Francisco, CA',
        'https://www.linkedin.com/in/johndoe',
        'https://github.com/johndoe',
        'Experienced software developer specializing in web technologies.',
        '{"tech_skills": ["JavaScript", "HTML/CSS", "React", "Node.js"]}',
        ARRAY ['{"title": "Senior Software Engineer", "company": "ABC Inc."}'::JSONB],
        ARRAY ['{"degree": "BS in Computer Science", "university": "University XYZ"}'::JSONB],
        ARRAY ['{"name": "XYZ project", "description": "Increased company revenue by 20%."}'::JSONB],
        ARRAY ['{"English": "beginner"}'::JSONB],
        'Hiking, Photography',
        ARRAY ['{"Reference name": "ABC ref"}'::JSONB],
        ARRAY ['{"Active name": "ABC Contest"}'::JSONB],
        ARRAY ['{"Active name": "AWS Beginner"}'::JSONB],
        ARRAY ['{"name": "Something special"}'::JSONB],
        'Seeking new opportunities in software development.',
        false
    ),
    (
        'https://example.com/avatar2.jpg',
        'candidate2@example.com',
        'Jane Smith',
        '987-654-3210',
        'Female',
        '1988-09-25',
        'Frontend Developer',
        7,
        'New York, NY',
        'Actively seeking new challenges',
        '456 Elm St, New York, NY',
        'https://www.linkedin.com/in/janesmith',
        'https://github.com/janesmith',
        'Experienced frontend developer with expertise in React and Vue.js.',
        '{"tech_skills": ["JavaScript", "React", "Vue.js", "HTML/CSS"]}',
        ARRAY ['{"title": "Lead Frontend Developer", "company": "XYZ Corp."}'::JSONB],
        ARRAY ['{"degree": "BSc in Computer Engineering", "university": "Tech University"}'::JSONB],
        ARRAY ['{"name": "ABC project", "description": "Implemented scalable frontend architecture."}'::JSONB],
        ARRAY ['{"Spanish": "proficient"}'::JSONB],
        'Reading, Painting',
        ARRAY ['{"Reference name": "XYZ ref"}'::JSONB],
        ARRAY ['{"Active name": "Hackathon XYZ"}'::JSONB],
        ARRAY ['{"Active name": "AWS Certified Developer"}'::JSONB],
        ARRAY ['{"name": "Special project"}'::JSONB],
        'Passionate about frontend development and design.',
        true -- Change to true if willing to work
    ),
    (
        'https://example.com/avatar3.jpg',
        'candidate3@example.com',
        'Mike Johnson',
        '555-123-4567',
        'Male',
        '1992-03-10',
        'Backend Developer',
        6,
        'Chicago, IL',
        'Open to backend development roles',
        '789 Oak St, Chicago, IL',
        'https://www.linkedin.com/in/mikejohnson',
        'https://github.com/mikejohnson',
        'Skilled backend developer proficient in Python and Django.',
        '{"tech_skills": ["Python", "Django", "Flask", "SQL"]}',
        ARRAY ['{"title": "Senior Backend Developer", "company": "Tech Solutions"}'::JSONB],
        ARRAY ['{"degree": "MS in Computer Science", "university": "University of Illinois"}'::JSONB],
        ARRAY ['{"name": "XYZ backend project", "description": "Optimized database performance."}'::JSONB],
        ARRAY ['{"French": "intermediate"}'::JSONB],
        'Playing guitar, Traveling',
        ARRAY ['{"Reference name": "Tech Solutions ref"}'::JSONB],
        ARRAY ['{"Active name": "Coding Competition"}'::JSONB],
        ARRAY ['{"Active name": "AWS Certified Solutions Architect"}'::JSONB],
        ARRAY ['{"name": "Open source contributor"}'::JSONB],
        'Passionate about backend development and data optimization.',
        true -- Change to true if willing to work
    ),
    (
        'https://example.com/avatar4.jpg',
        'candidate4@example.com',
        'Anna Lee',
        '333-999-8888',
        'Female',
        '1995-12-03',
        'Data Scientist',
        4,
        'Seattle, WA',
        'Seeking data science opportunities',
        '321 Pine St, Seattle, WA',
        'https://www.linkedin.com/in/annalee',
        'https://github.com/annalee',
        'Experienced data scientist with skills in machine learning and analytics.',
        '{"tech_skills": ["Python", "R", "Machine Learning", "Data Analysis"]}',
        ARRAY ['{"title": "Data Scientist", "company": "Data Analytics Inc."}'::JSONB],
        ARRAY ['{"degree": "PhD in Statistics", "university": "University of Washington"}'::JSONB],
        ARRAY ['{"name": "Data Analytics project", "description": "Implemented predictive models."}'::JSONB],
        ARRAY ['{"Spanish": "beginner"}'::JSONB],
        'Yoga, Cooking',
        ARRAY ['{"Reference name": "Data Analytics Inc. ref"}'::JSONB],
        ARRAY ['{"Active name": "Data Science Bootcamp"}'::JSONB],
        ARRAY ['{"Active name": "AWS Certified Big Data Specialist"}'::JSONB],
        ARRAY ['{"name": "Research publication"}'::JSONB],
        'Passionate about data science and analytics.',
        true -- Change to true if willing to work
    ),
    (
        'https://example.com/avatar5.jpg',
        'candidate5@example.com',
        'Alex Johnson',
        '777-444-5555',
        'Male',
        '1985-07-20',
        'Project Manager',
        10,
        'San Diego, CA',
        'Project management professional seeking leadership roles',
        '567 Harbor Dr, San Diego, CA',
        'https://www.linkedin.com/in/alexjohnson',
        'https://github.com/alexjohnson',
        'Experienced project manager with successful track record in delivering complex projects.',
        '{"management_skills": ["Project Planning", "Team Leadership", "Budget Management"]}',
        ARRAY ['{"title": "Senior Project Manager", "company": "Global Projects LLC"}'::JSONB],
        ARRAY ['{"degree": "MBA", "university": "University of California, San Diego"}'::JSONB],
        ARRAY ['{"name": "Global Projects", "description": "Managed international projects."}'::JSONB],
        ARRAY ['{"German": "basic"}'::JSONB],
        'Playing basketball, Gardening',
        ARRAY ['{"Reference name": "Global Projects LLC ref"}'::JSONB],
        ARRAY ['{"Active name": "Project Management Certification"}'::JSONB],
        ARRAY ['{"Active name": "Scrum Master Certification"}'::JSONB],
        ARRAY ['{"name": "Leadership Award"}'::JSONB],
        'Passionate about project management and leadership.',
        true -- Change to true if willing to work
    );

-- Insert mock data into cvs table
INSERT INTO
    cvs (user_id, cv_data, url, is_main, archive)
VALUES
    (
        1,
        '{"profile": "Senior Software Developer"}' :: JSONB,
        'https://example.com/cv/user1_cv.pdf',
        true,
        false
    ),
    (
        3,
        '{"profile": "Database Administrator"}' :: JSONB,
        'https://example.com/cv/user3_cv.pdf',
        true,
        false
    ),
    (
        4,
        '{"profile": "Software Engineer"}' :: JSONB,
        'https://example.com/cv/user4_cv.pdf',
        true,
        false
    ),
    (
        5,
        '{"profile": "UX/UI Designer"}' :: JSONB,
        'https://example.com/cv/user5_cv.pdf',
        true,
        false
    ),
    (
        6,
        '{"profile": "Network Engineer"}' :: JSONB,
        'https://example.com/cv/user6_cv.pdf',
        true,
        false
    );

-- Insert mock data into employers table
INSERT INTO
    employers (company_id, email, name, phone, status)
VALUES
    (
        101,
        'employer1@example.com',
        'Tech Solutions Inc.',
        '555-123-4567',
        1
    ),
    (
        102,
        'employer2@example.com',
        'Tech Innovations LLC',
        '555-987-6543',
        1
    ),
    (
        103,
        'employer3@example.com',
        'Innovate Solutions Ltd.',
        '777-111-2222',
        1
    ),
    (
        104,
        'employer4@example.com',
        'Data Tech Enterprises',
        '999-333-4444',
        1
    );