let jobs = [
  {
    id: '1',
    companyId: 'company1',
    title: 'Backend Developer',
    salary: 100000,
    responsibilities: [
      'Design and develop scalable backend systems',
      'Collaborate with frontend developers and product managers'
    ],
    skills: [
      'Node.js - Proficient in building backend applications with Node.js',
      'SQL - Strong understanding of relational databases and SQL queries'
    ],
    extends: [
      'Docker - Experience with containerization and Docker',
      'AWS - Familiarity with Amazon Web Services'
    ],
    welfare: ['Health insurance', 'Flexible working hours', 'Remote work option'],
    experienceYearsMin: 2,
    experienceYearsMax: 5,
    level: 'junior',
    type: 'hybrid',
    typeContract: 'fulltime',
    techs: ['Backend Developer', 'Node.js', 'SQL'],
    interviewProcess: [
      'Technical interview',
      'Code review'
    ],
  },
  {
    id: '2',
    companyId: 'company2',
    title: 'Frontend Developer',
    salary: 90000,
    responsibilities: [
      'Build user-friendly web applications',
      'Optimize application performance'
    ],
    skills: [
      'React.js - Proficient in building frontend applications with React.js',
      'HTML/CSS - Strong understanding of HTML and CSS'
    ],
    extends: [
      'Redux - Experience with state management using Redux',
      'Responsive Design - Familiarity with building responsive web interfaces'
    ],
    welfare: ['Stock options', 'Gym membership', 'Company outings'],
    experienceYearsMin: 1,
    experienceYearsMax: 3,
    level: 'fresher',
    type: 'remote',
    typeContract: 'fulltime',
    techs: ['Frontend Developer', 'React.js', 'HTML/CSS'],
    interviewProcess: ['Technical interview', 'Portfolio review'],
  },
  {
    id: '3',
    companyId: 'company3',
    title: 'Software Engineer',
    salary: 110000,
    responsibilities: [
      'Design and develop software solutions',
      'Collaborate with cross-functional teams'
    ],
    skills: [
      'Java - Proficient in Java programming language',
      'Spring Boot - Experience with Spring Boot framework'
    ],
    extends: [
      'Microservices - Knowledge of microservices architecture',
      'Docker - Familiarity with containerization'],
    welfare: ['Health insurance', 'Salary adjustment phase every 6 months'],
    experienceYearsMin: 3,
    experienceYearsMax: 7,
    level: 'senior',
    type: 'onsite',
    typeContract: 'fulltime',
    techs: ['Software Engineer', 'Java', 'Spring Boot'],
    interviewProcess: ['Technical interview', 'System design round'],
  },
  {
    id: '4',
    companyId: 'company4',
    title: 'Data Scientist',
    salary: 120000,
    responsibilities: ['Analyze large datasets', 'Develop machine learning models'],
    skills: [
      'Python - Proficient in Python programming language',
      'Machine Learning - Strong understanding of machine learning algorithms'
    ],
    extends: [
      'TensorFlow - Experience with TensorFlow framework',
      'Big Data - Familiarity with big data technologies'
    ],
    welfare: ['Stock options', 'Health insurance', 'Flexible working hours'],
    experienceYearsMin: 2,
    experienceYearsMax: 5,
    level: 'junior',
    type: 'hybrid',
    typeContract: 'fulltime',
    techs: ['Data Scientist', 'Python', 'Machine Learning'],
    interviewProcess: ['Technical interview', 'Machine learning project review'],
  },
  {
    id: '5',
    companyId: 'company5',
    title: 'DevOps Engineer',
    salary: 115000,
    responsibilities: [
      'Implement and manage continuous integration and deployment pipelines',
      'Automate infrastructure provisioning and configuration'
    ],
    skills: [
      'Linux - Proficient in Linux operating system', 
      'Docker - Experience with containerization and Docker'
    ],
    extends: [
      'Kubernetes - Knowledge of Kubernetes orchestration',
      'AWS - Familiarity with Amazon Web Services'
    ],
    welfare: ['Health insurance', 'Remote work option'],
    experienceYearsMin: 3,
    experienceYearsMax: 6,
    level: 'senior',
    type: 'remote',
    typeContract: 'fulltime',
    techs: ['DevOps Engineer', 'Linux', 'Docker'],
    interviewProcess: ['Technical interview', 'Infrastructure as code review'],
  },
];


module.exports = { jobs };