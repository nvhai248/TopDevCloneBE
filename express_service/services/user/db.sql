CREATE TABLE IF NOT EXISTS candidates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    avatar TEXT,
    email VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    gender VARCHAR(255),
    dob VARCHAR(255),
    position VARCHAR(255),
    yoe INT,
    location VARCHAR(255),
    status_profile VARCHAR(255),
    address VARCHAR(255),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    summary TEXT,
    skills TEXT,
    experiences TEXT,
    educations TEXT,
    projects TEXT,
    languages TEXT,
    interests TEXT,
    ref TEXT,
    activities TEXT,
    certificates TEXT,
    additional TEXT,
    cover_letter TEXT,
    willing_to_work BOOLEAN,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cvs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    changeable BOOLEAN,
    CVdata TEXT,
    url TEXT NOT NULL,
    is_main BOOLEAN,
    archive BOOLEAN,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS employers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    status INT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- MOCK DATA --
INSERT INTO candidates (
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
        'JavaScript, HTML/CSS, React, Node.js',
        'Senior Software Engineer at ABC Inc.',
        'BS in Computer Science, University XYZ',
        'Developed XYZ project which increased company revenue by 20%.',
        'English, Spanish',
        'Hiking, Photography',
        'Available upon request',
        'Active member of local tech meetup groups',
        'Certified AWS Solutions Architect',
        'Additional information can be provided.',
        'Seeking new opportunities in software development.',
        false
    ),
    -- Candidate 2
    (
        'https://example.com/avatar2.jpg',
        'candidate2@example.com',
        'Jane Smith',
        '987-654-3210',
        'Female',
        '1988-12-01',
        'UX Designer',
        7,
        'New York, NY',
        'Actively looking for UX design roles',
        '456 Elm St, New York, NY',
        'https://www.linkedin.com/in/janesmith',
        'https://github.com/janesmith',
        'Passionate about creating intuitive user experiences.',
        'UI/UX Design, Adobe XD, Sketch',
        'Lead UX Designer at XYZ Corp.',
        'BA in Graphic Design, Art Institute',
        'Redesigned mobile app interface resulting in 30% increase in user engagement.',
        'English',
        'Traveling, Yoga',
        'Available upon request',
        'Member of AIGA (American Institute of Graphic Arts)',
        'Certified UX Designer',
        'Additional details can be provided.',
        'Seeking new opportunities in UX design.',
        false
    ),
    (
        'https://example.com/avatar3.jpg',
        'candidate3@example.com',
        'Alice Johnson',
        '555-123-4567',
        'Female',
        '1995-08-22',
        'Data Analyst',
        3,
        'Chicago, IL',
        'Actively seeking data analysis roles',
        '789 Oak St, Chicago, IL',
        'https://www.linkedin.com/in/alicejohnson',
        'https://github.com/alicejohnson',
        'Experienced in data visualization and statistical analysis.',
        'SQL, Python, Tableau',
        'Data Analyst at XYZ Analytics',
        'MS in Statistics, University of Illinois',
        'Led data-driven projects resulting in improved business insights.',
        'English, French',
        'Reading, Cooking',
        'Available upon request',
        'Professional references available',
        'Certified Data Analyst',
        'Additional information can be provided upon request.',
        'Seeking new opportunities in data analytics.',
        false
    ),
    (
        'https://example.com/avatar4.jpg',
        'candidate4@example.com',
        'Michael Brown',
        '999-555-1234',
        'Male',
        '1987-04-10',
        'Project Manager',
        8,
        'Los Angeles, CA',
        'Open to project management positions',
        '456 Pine Ave, Los Angeles, CA',
        'https://www.linkedin.com/in/michaelbrown',
        'https://github.com/michaelbrown',
        'Certified Project Management Professional (PMP).',
        'Project Management, Agile, Scrum',
        'Senior Project Manager at ABC Solutions',
        'MBA, University of Southern California',
        'Successfully managed multimillion-dollar projects.',
        'English, Spanish',
        'Playing guitar, Traveling',
        'Available upon request',
        'Professional references available',
        'PMP Certified',
        'Additional details can be provided.',
        'Seeking new challenges in project management.',
        false
    ),
    (
        'https://example.com/avatar5.jpg',
        'candidate5@example.com',
        'David Lee',
        '777-888-9999',
        'Male',
        '1992-11-30',
        'Software Engineer',
        6,
        'Seattle, WA',
        'Actively looking for software engineering roles',
        '321 Elm St, Seattle, WA',
        'https://www.linkedin.com/in/davidlee',
        'https://github.com/davidlee',
        'Full-stack developer with expertise in Java and React.',
        'Java, JavaScript, React, Spring Boot',
        'Software Engineer at XYZ Tech',
        'BS in Computer Engineering, University of Washington',
        'Developed scalable microservices architecture.',
        'English, Mandarin',
        'Playing basketball, Reading',
        'Available upon request',
        'GitHub portfolio available',
        'AWS Certified Developer',
        'Additional information can be provided upon request.',
        'Passionate about building innovative software solutions.',
        false
    );

-- Insert mock data into the cvs table
INSERT INTO cvs (user_id, url, is_main, archive)
VALUES
    (
        1,
        'https://example.com/cv/user1_cv.pdf',
        true,
        false
    ),
    (
        2,
        'https://example.com/cv/user2_cv.pdf',
        true,
        false
    ),
    (
        1,
        'https://example.com/cv/user1_cv_updated.pdf',
        false,
        false
    ),
    (
        3,
        'https://example.com/cv/user3_cv.pdf',
        true,
        false
    ),
    (
        2,
        'https://example.com/cv/user2_cv_updated.pdf',
        false,
        false
    );



INSERT INTO employers (
    company_id,
    email,
    name,
    phone,
    status
)
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
        'Innovate Tech Co.',
        '999-888-7777',
        1
    ),
    (
        103,
        'employer3@example.com',
        'Data Analytics Group',
        '777-555-9999',
        0
    ),
    (
        104,
        'employer4@example.com',
        'Global Enterprises Ltd.',
        '123-456-7890',
        1
    ),
    (
        105,
        'employer5@example.com',
        'Software Innovations Co.',
        '321-654-9870',
        0
    );
