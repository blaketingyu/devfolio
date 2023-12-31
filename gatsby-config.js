module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://blaketantingyu.netlify.app/`,
    // Your Name
    name: 'Blake Tan',
    // Main Site Title
    title: `Blake | Portfolio`,
    // Description that goes under your name in main bio
    description: `Fresh Graduate from the National University of Singapore (NUS) with a Bachelor's Degree in Computer Science.`,
    github: `https://github.com/blaketingyu`,
    linkedin: `https://www.linkedin.com/in/blaketantingyu/`,
    // Content of the About Me section
    about: `Hello I'm Blake and I'm a fresh graduate from the National University of Singapore with a bachelor's degree in computer science. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Synapxe',
        title: 'Software Engineer Intern, Sep 2023 - Dec 2023',
        description: [
          'Collaborated on integrating fresh functionalities utilizing ReactJS, Dotnet, and AWS within an internal tool dedicated to aiding the operations team in overseeing the Healthier SG project—an initiative led by MOH at the national level',
          'Implemented human-readable test cases for HSeaktAR APIs through SpecFlow, enhancing test readability, extensibility and maintainability',
          'Orchestrated automated load tests on APIs, meticulously simulating real-world scenarios to ensure unparalleled system resilience and optimize peak performance',
          'Engineered and optimized ETL workflows through AWS Glue and Step Functions, seamlessly automating the extraction and transformation of invaluable data from S3 buckets',
        ],
        technologies:
          'SpecFlow, K6 Load Testing, Amazon Web Services (AWS), .NET Framework, C#, Next.js, React.js',
      },
      {
        name: 'Visa Inc',
        title: 'Software Engineer Intern, May 2023 - Sep 2023',
        description: [
          'Spearheaded the end-to-end development of backend for the Card-On-File Data application using Spring Boot and successfully integrated the application with APIs from multiple teams',
          'Played a pivotal role in development of the CI/CD pipeline and deployment using Jenkins and Docker',
          'Exhibited a critical role in leading comprehensive project documentation, and demonstrated adeptness in proficiently crafting database schemas and API specifications',
          'Demonstrated steadfast commitment to enhancing application security through seamless integration of 3DS card authentication and proactive implementation of shift-left testing',
          'Played a key role in the frontend development of the project by leveraging NextJS and CSS styling to establish a cohesive visual identity across Visa-owned applications',
        ],
        technologies:
          'Next.js, Jenkins, Express.js, JavaScript, React.js, Docker, Kubernetes, SQL, Java, Spring Boot',
      },
      {
        name: 'Visa Inc',
        title: 'Software Engineer Intern, May 2022 - Aug 2022',
        description: [
          'Developed 4 job flows that are scheduled periodically to remediate and report job failures in Visa Resolve Online (VROL)’s QA environments using CloverDX, Bash Scripting and SQL',
          'Decreased server downtime by 30%, manual troubleshooting, facilitating the VROL Team amounting to 100 over developers & testers working in these environments',
          'Supported VROL’s testing and engineering process by executing test cases (Regression & Smoke) according to functional specification and automated test scripts using Selenium, SoapUI & Postman',
          `Maintained the VROL application's code using Java Spring, refactored 500+LoC and added JavaDocs documentation`,
        ],
        technologies:
          'CloverDX, Selenium, SoapUI, Postman, Bash Scripting, SQL, Java, Spring Boot',
      },
      {
        name: 'National University Of Singapore (NUS)',
        title: 'Undergraduate Teaching Assistant, May 2022 - Aug 2022',
        description: [
          'Managed a group of 53 students doing their Student Internship Program (SIP), assisted the professors by reviewing the students’ monthly reports and attending their final presentations',
          'Handled communications between the Students and their company supervisors, ensuring that the student interns behave professionally during work to uphold the university’s name while also overseeing the students’ welfare',
        ],
      },
      {
        name: 'United Overseas Banking (UOB)',
        title: 'Business Technology Intern, May 2021 - Aug 2021',
        description: [
          'Developed and scheduled 10 jobs to automate processes for 3 different applications in 3 different servers, cutting down time spent on repetitive manual work by 40%',
          'Maintained communication between the applications in the Stand-in Authorization Switch (STA) which routes payment between UOB Singapore and Thailand, using IBM MQ',
          'Automated reporting of payment failures or frauds in the logs by formulating Splunk queries',
          'Assisted the migration of applications, containerising applications that are still deployed using a monolithic structure, using Docker and Kubernetes',
        ],
        technologies: 'Bash Scripting, SQL, IBM MQ, Splunk, Docker',
      },
      {
        name: 'Centre for Strategic Infocomm Technologies (CSIT)',
        title: 'Research & Development Engineer Intern, Nov 2017 - Feb 2018',
        description: [
          'Developed a malware detecting tool for Android smartphones, alerting users whenever there are changes made to files containing sensitive information, with a detection accuracy rate of 70% ',
        ],
        technologies: 'C, Bash Scripting, x64dbg ',
      },
      {
        name: 'Certis',
        title: 'Penetration Tester Intern, Sep 2017 - Nov 2017',
        description: [
          'Developed a Red Teaming toolkit what simulates cyber attacks, providing assessment on how trained the enterprise users are on cyber security awareness and how hardened, protected the systems are',
        ],
        technologies: 'Koadic C3 (Metasploit), Python',
      },
      {
        name: 'TP-IBM Security Operation Centre',
        title: 'Security Operations Center Analyst Intern, May 2017 - Jun 2017',
        description: [
          'Monitored the school’s network for irregular traffic and flagged out incidents, resolved more than 100 incidents within service level agreement timings',
        ],
      },
    ],
    projects: [
      {
        name: 'Card-on-File Data Application',
        description: [
          'The Card-on-File Data (COFD) application is a POC application that employs the Card-On-File Data Inquiry API',
          'The application is designed to provide information about the merchants with whom cardholders may have stored their cards on file, and when the merchants have received updated card details, in the event of card reissuance',
          `Leverages 3DS card authentication to safeguard clients' card details, enhancing security through an extra layer of verification during payment transactions`,
        ],
        link: '',
      },
      {
        name: 'Static Code Analyzer',
        description:
          'Static Program Analyzer (SPA) is an interactive tool that automatically answers queries about programs. ',
        link: 'https://github.com/nus-cs3203/22s2-cp-spa-team-32',
      },
      {
        name: 'PeerPrep',
        description:
          'PeerPrep is a platform that allows its users to match with each other and give them the opportunity to work together on an algorithmic problem. In doing so, users can also simulate interviews by assuming the role of interviewer-interviewee, or work as a pair to solve a problem together.',
        link: 'https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g42',
      },
      {
        name: 'McKitchen',
        description:
          'CLI-centric recipe book application. A brownfield school project that our team morph into a recipe book application. Our team primarily utilized breadth-first iteration planning.',
        link: 'https://github.com/AY2122S2-CS2103T-T17-2/tp',
      },
      {
        name: 'Portfolio Website',
        description:
          'The current site we are on, made using a template using Gatsby.js and TailwindCSS',
        link: 'https://github.com/blaketingyu/devfolio',
      },
      {
        name: 'Chudoku',
        description:
          'ECommerce web interface that allows users to purchase Japanese related items such as Figurines, Cards & Apparels built using vanilla PHP, HTML, CSS, JavaScript and mySQL. ' +
          'Site is built with little regards for design and is focused more on security aspects.',
        link: 'https://github.com/blaketingyu/chudoku-webapp-php',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, Python, C, C++, JavaScript/TypeScript, PHP, HTML, CSS, Bash',
      },
      {
        name: 'Frameworks & Libraries',
        description:
          'Nest.js, Express.js, Node.js, Gatsby.js, React.js, Spring Boot',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgreSQL, MySQL, Redis',
        description: 'MongoDB, PostgreSQL, MySQL, Redis',
      },
      {
        name: 'DevOps Tools',
        description: 'Docker, Kubernetes, Splunk, Jenkins',
      },
      {
        name: 'ETL Tools',
        description: `CloverDX, Hadoop, Spark, Google's Cloud Run, AWS (Glue, Lambda, Step)`,
      },
    ],
    awards: [
      {
        name: 'TISC 2022 CTF Badge of Participation',
        title: 'TISC 2022 CTF organised by CSIT',
        description: 'Participated in the TISC CTF organised by CSIT',
      },
      {
        name: 'STANDCON 2022',
        title: 'STANDCON 2022 organised by N0H4TS',
        description:
          "Participated in STANDCON 2022's Capture-the-Flag competition",
      },
      {
        name: 'BrainHack 2021',
        title:
          'BrainHack 2021 organised by Defence Science and Technology Agency',
        description: "Participated in BrainHack 2021's Hackathon",
        link:
          'https://certificates.nextid.com/certificate?id=021c785f-2ec8-43ea-be44-a15126ea5f1e',
      },
      {
        name: 'Diploma With Merit',
        title: 'Temasek Polytechnic',
        description:
          'Awarded Diploma with Merit for making it to the top 5% of the graduating cohort',
      },
      {
        name: '8th Singapore Cyber Conquest',
        title:
          '8th Singapore Cyber Conquest organised by Cyber Security Agency of Singapore (CSA)',
        description:
          'Participated in the 8th Singapore Cyber Conquest Capture-the-Flag challenge',
      },
      {
        name: 'Centre for Strategic Infocomm Technologies (CSIT) Scholarship',
        title:
          'Centre for Strategic Infocomm Technologies (CSIT) Scholarship for AY2015/2016 & AY2017/2018',
        description: 'Awarded the CSIT scholarship for 2 years',
      },
      {
        name: "Director's List AY2015/2016 & AY2016/2017",
        title:
          "Director's List AY2015/2016 & AY2016/2017 - Temasek Polytechnic",
        description: "Placed in the Director's List for 2 consecutive years",
      },
    ],
    certs: [
      {
        name: 'Dockers for the Absolute Beginners - Hands on - DevOps',
        title: 'Udemy course with Mumshad Mannambeth',
        description:
          'Took a Udemy course designed for beginners in DevOps to learn more about Docker.',
        link:
          'https://udemy-certificate.s3.amazonaws.com/pdf/UC-93ef3dbf-40a0-4ba3-b28f-00604b6b801e.pdf',
      },
      {
        name: 'JavaScript - The Complete Guide 2022 (Beginner + Advanced)',
        title: 'Udemy Course with instructor, Maximilian Schwarzmüller',
        description:
          'Comprehensive course on JavaScript which goes through the syntax, core concepts, DOM manipulations, events, OOP, Asyn, HTTP Requests,' +
          '\nLibraries and frameworks, Node.js, Security and Automated Testing.',
        link:
          'https://udemy-certificate.s3.amazonaws.com/pdf/UC-229dca21-cca1-46aa-bb7c-2f02300e4e41.pdf',
      },
      {
        name: '2022 Visa Intern',
        title: '2022 Visa Intern issued by Visa Early Career Programs',
        description:
          'Earners of this badge completed an internship program where they worked on challenging and rewarding projects that helped connect more people to the global economy. Knowledge and skills developed over the course of the program include payments, tech, business, leadership, and more. #LifeatVisa',
        link:
          'https://www.credly.com/badges/46853f2b-d47d-4019-842d-1a0dbcb295ee/linked_in?t=rfnu74',
      },
      {
        name: 'Meta Above & Beyond Computer Science (ABCS) Program',
        title:
          'Above & Beyond Computer Science (ABCS) Program organised by Meta Singapore',
        description:
          "Participated in Meta's Above & Beyond Computer Science (ABCS) Program",
      },
      {
        name: 'Japanese Elementary Level Proficiency',
        title:
          'Completion of Japanese 2 Module In National University of Singapore (NUS)',
        description:
          'Awarded  certificate of proficiency in the Japanese language at the Elementary level',
        link:
          'https://credentials.nus.edu.sg/f7628575-5fd4-48f8-a6ba-8b0ae169b366',
      },
      {
        name: 'Linux Redhat Certified System Administrator (RHCSA)',
        title: 'RHCSA - EX200',
        description:
          'An IT professional who has earned the Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments. The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200).',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
