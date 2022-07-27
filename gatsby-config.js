module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://blaketantingyu.netlify.app/`,
    // Your Name
    name: 'Blake Tan',
    // Main Site Title
    title: `Blake Tan | Computer Science Student & Aspiring Software Engineer`,
    // Description that goes under your name in main bio
    description: `Penultimate Computer Science Student at the National University of Singapore (NUS).`,
    github: `https://github.com/blaketingyu`,
    linkedin: `https://www.linkedin.com/in/blaketantingyu/`,
    // Content of the About Me section
    about: `Hello I'm Blake and I'm a penultimate Computer Science undergraduate studying at the National University of Singapore, expected to graduate by December 2023. 
    Most of my internships are related to Cyber Security & automation but I'm more interested in learning backend or fullstack development. 
    `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Visa Inc',
        title: 'Software Engineer Intern, May 2022 - Aug 2022',
        description: ['Developed job flows that are scheduled periodically to remediate and report job failures in Visa Resolve Online (VROL)’s QA environments using CloverDX, Bash Scripting and SQL', 
        'Decreased server downtime, manual troubleshooting and facilitated developers & testers working in these servers', 'Supported VROL’s testing and engineering process by executing test cases (Regression & Smoke) according to functional specification and automated test scripts using Selenium, SoapUI & Postman'],
        technologies: 'CloverDX, Selenium, SoapUI, Postman, Bash Scripting, SQL',
      },
      {
        name: 'National University Of Singapore (NUS)',
        title: 'Undergraduate Teaching Assistant, May 2022 - Aug 2022',
        description: ['Managed a group of 53 students doing their Student Internship Program (SIP), assisted the professors by reviewing the students’ monthly reports and attending their final presentations'],
      },
      {
        name: 'United Overseas Banking (UOB)',
        title: 'Business Technology Intern, May 2021 - Aug 2021',
        description: ['Developed multiple bash scripts, cron jobs to automate various processes for numerous application', 'Managed communication between the different applications using IBM MQ and formulated splunk queries to automate reporting of failure in the logs'],
        technologies: 'Bash Scripting, SQL, IBM MQ, Splunk, Docker',
      },
      {
        name: 'Centre for Strategic Infocomm Technologies (CSIT)',
        title: 'Research & Development Engineer Intern, Nov 2017 - Feb 2018',
        description: ['Developed a malware detecting tool for Android smartphones by identifying commonly targeted files'],
        technologies: 'C, Bash Scripting', 
      },
      {
        name: 'Certis',
        title: 'Penetration Tester Intern, Sep 2017 - Nov 2017',
        description: ['Developed a Red Teaming toolkit what simulates cyber attacks, providing assessment on how trained the enterprise users are on cyber security awareness and how hardened, protected the systems are'],
        technologies: 'Koadic C3',
      },
      {
        name: 'TP-IBM Security Operation Centre',
        title: 'Security Operations Center Analyst Intern, May 2017 - Jun 2017',
        description: ['Monitored the school’s network for irregular traffic and flagged out incidents, resolved more than 100 incidents within service level agreement timings'],
      },
    ],
    projects: [
      {
        name: 'McKitchen',
        description:
          'CLI-centric recipe book application. A brownfield school project that our team morph into a recipe book application. Our team primarily utilized breadth-first iteration planning.',
        link: 'https://github.com/AY2122S2-CS2103T-T17-2/tp',
      },
      {
        name: 'Portfolio Website',
        description: 'The site we are on right now!',
        link: 'https://github.com/blaketingyu/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Java, C++, C, HTML, JavaScript, CSS,  SQL, Bash Scripting',
      },
      {
        name: 'Frameworks & Libraries',
        description:
        'ReactJS, GatsbyJS, JUnit',
      },
      {
        name: 'Databases',
        description: 'PostgreSQL, MySQL',
      },
      {
        name: 'DevOps Tools',
        description: 'Maven, Docker, Splunk, Postman, SoapUI, Selenium',
      },
      {
        name: 'ETL Tools',
        description: 'CloverDX',
      },
    
    ],
    awards: [
      {
        name: 'Meta Above & Beyond Computer Science (ABCS) Program',
        title: 'Above & Beyond Computer Science (ABCS) Program organised by Meta Singapore',
        description: "Participated in Meta's Above & Beyond Computer Science (ABCS) Program",
      },
      {
        name: 'STANDCON 2022',
        title: 'STANDCON 2022 organised by N0H4TS',
        description: "Participated in STANDCON 2022's Capture-the-Flag competition",
        link: 'https://drive.google.com/file/d/13PSyMU0nCF5_ec85v-zD7ZzxScObCCx1/view?usp=sharing',
      },
      {
        name: 'BrainHack 2021',
        title: 'BrainHack 2021 organised by Defence Science and Technology Agency',
        description: "Participated in BrainHack 2021's Hackathon",
        link: 'https://certificates.nextid.com/certificate?id=021c785f-2ec8-43ea-be44-a15126ea5f1e',
      },
      {
        name: 'Japanese Elementary Level Proficiency',
        title: 'Completion of Japanese 2 Module In National University of Singapore (NUS)',
        description: "Awarded  certificate of proficiency in the Japanese language at the Elementary level",
        link:'https://credentials.nus.edu.sg/f7628575-5fd4-48f8-a6ba-8b0ae169b366',
      },
      {
        name: 'Diploma With Merit',
        title: 'Temasek Polytechnic',
        description: "Awarded Diploma with Merit for making it to the top 5% of the graduating cohort",
        
      },
      {
        name: '8th Singapore Cyber Conquest',
        title: '8th Singapore Cyber Conquest organised by Cyber Security Agency of Singapore (CSA)',
        description: "Participated in the 8th Singapore Cyber Conquest Capture-the-Flag challenge",
      },
      {
        name: 'Linux Redhat Certified System Administrator (RHCSA)',
        title: 'RHCSA - EX200',
        description: "An IT professional who has earned the Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments. The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200).",
        link: 'https://drive.google.com/file/d/19Xw7BsTwP24-_zWKlTWW29A3fUI1LNF5/view?usp=sharing',
      },
      {
        name: 'Centre for Strategic Infocomm Technologies (CSIT) Scholarship',
        title: 'Centre for Strategic Infocomm Technologies (CSIT) Scholarship for AY2015/2016 & AY2017/2018',
        description: "Awarded the CSIT scholarship for 2 years",
      },
      {
        name: "Director's List AY2015/2016 & AY2016/2017",
        title: "Director's List AY2015/2016 & AY2016/2017 - Temasek Polytechnic",
        description: "Placed in the Director's List for 2 consecutive years",
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
