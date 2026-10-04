import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CloudIcon,
  MapIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  Stat,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sidhil Sivadas Manoli | Senior Technical Lead (Full Stack)',
  description:
    'Portfolio of Sidhil Sivadas Manoli, a Bangalore based Senior Technical Lead with 12+ years of experience in Node.js, React, PHP/Laravel, Python and AWS.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sidhil Sivadas.`,
  roles: ['Senior Technical Lead', 'Full Stack Engineer', 'Node.js & React Developer', 'AWS Cloud Builder'],
  description: (
    <>
      <p className="text-sm leading-relaxed text-stone-200 sm:text-base lg:text-lg">
        I'm a Bangalore based <strong className="text-stone-100">Senior Technical Lead (Full Stack)</strong> with{' '}
        <strong className="text-stone-100">12+ years</strong> of experience, currently working at{' '}
        <strong className="text-stone-100">Trianz Digital Consulting</strong>, building scalable web applications for
        clients like <strong className="text-stone-100">Liberty Mutual</strong> and{' '}
        <strong className="text-stone-100">NetApp</strong>.
      </p>
      <p className="text-sm leading-relaxed text-stone-200 sm:text-base lg:text-lg">
        I work across <strong className="text-stone-100">Node.js</strong>,{' '}
        <strong className="text-stone-100">React</strong>, <strong className="text-stone-100">PHP / Laravel</strong>,{' '}
        <strong className="text-stone-100">Python</strong> and <strong className="text-stone-100">AWS</strong>, and I'm
        currently exploring <strong className="text-stone-100">Generative AI, LangChain and RAG</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Senior Technical Lead – Full Stack with over 12 years of experience building and delivering scalable,
  high-quality web applications across the MERN and LAMP stacks. I lead cross-functional teams, architect robust
  systems and drive the full software development lifecycle, from requirements and design through CI/CD with Jenkins,
  automated testing and TDD. I'm hands-on with AWS (EC2, Lambda, ECS, EKS, S3, RDS, CloudFront, IAM, VPC, API Gateway,
  SQS, CloudWatch, Secrets Manager, EventBridge) and GCP, and I focus on user-centric solutions that align with
  business goals.`,
  aboutItems: [
    {label: 'Location', text: 'Hoodi, Bangalore', Icon: MapIcon},
    {label: 'Experience', text: '12+ years', Icon: BriefcaseIcon},
    {label: 'Languages', text: 'English, Hindi, Malayalam', Icon: ChatBubbleLeftRightIcon},
    {label: 'Study', text: 'B.Sc Computer Science, Kannur University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Trianz Digital Consulting Pvt Ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Stats strip
 */
export const stats: Stat[] = [
  {title: 'Years of experience', value: 12, suffix: '+', Icon: BriefcaseIcon},
  {title: 'Projects delivered', value: 10, suffix: '+', Icon: RocketLaunchIcon},
  {title: 'Companies', value: 4, Icon: BuildingOffice2Icon},
  {title: 'AWS services used', value: 14, Icon: CloudIcon},
];

/**
 * Tech stack ribbon
 */
export const techStack: string[] = [
  'Node.js',
  'React',
  'Next.js',
  'TypeScript',
  'NestJS',
  'PHP',
  'Laravel',
  'Python',
  'MySQL',
  'MongoDB',
  'AWS',
  'GCP',
  'Jenkins',
  'Docker',
  'Linux',
  'Socket.IO',
  'LangChain',
  'Generative AI',
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {name: 'Node.js / NestJS', level: 9},
      {name: 'PHP / Laravel', level: 9},
      {name: 'Python', level: 7},
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {name: 'React.js', level: 9},
      {name: 'Next.js / TypeScript', level: 8},
      {name: 'JavaScript / HTML / CSS', level: 9},
    ],
  },
  {
    name: 'Databases',
    skills: [
      {name: 'MySQL', level: 9},
      {name: 'MongoDB', level: 8},
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {name: 'AWS', level: 8},
      {name: 'Jenkins (CI/CD)', level: 8},
      {name: 'Linux', level: 8},
      {name: 'GCP / Docker', level: 6},
    ],
  },
  {
    name: 'AI / ML (learning)',
    skills: [
      {name: 'Generative AI / LLMs', level: 5},
      {name: 'LangChain', level: 5},
      {name: 'RAG / Multi-RAG', level: 5},
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {name: 'English', level: 9},
      {name: 'Hindi', level: 9},
      {name: 'Malayalam', level: 10},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'WorkBench Bond | Liberty Mutual',
    description:
      'Jun 2026 – Present. Internal surety underwriting platform used by staff and agents to process, manage and evaluate surety bonds, with modules like Bond Request & Execution and Billing & Financial Integration. Stack: Node.js, NestJS, React, Jenkins, AWS.',
    url: 'https://www.libertymutual.com/',
    image: porfolioImage1,
  },
  {
    title: 'SmartSolve | NetApp',
    description:
      "Jun 2024 – Jun 2026. NetApp Partner Tool in NetApp's Toolbox that parses, aggregates and visualizes AutoSupport (ASUP) logs and diagnostics from ONTAP storage systems. Stack: Node.js, React, PHP, Laravel, Python, Jenkins, AWS.",
    url: 'https://smartsolve.netapp.com',
    image: porfolioImage2,
  },
  {
    title: 'ControlDock | Trianz',
    description:
      'Jan 2023 – Jun 2024. Internal web application for incident, asset and ACL management. Stack: React, PHP, Laravel, AWS.',
    image: porfolioImage3,
  },
  {
    title: 'IQPC | US Client',
    description:
      'Jan 2021 – Jan 2023. Platform for a global B2B events company running conferences, exhibitions, exchanges and digital events for executives. Stack: Node.js, React, PHP, Laravel, AWS.',
    url: 'https://www.iqpc.com',
    image: porfolioImage4,
  },
  {
    title: 'Ridlr | Ola Cabs',
    description:
      'Metro ticket booking app and real-time monitoring platform tracking entry/exit machines at Delhi and Qatar metro stations. Stack: Node.js, React, Socket.IO, STOMP.js, Java Spring Boot, MongoDB, MySQL.',
    image: porfolioImage5,
  },
  {
    title: 'Xena | Living Consumer',
    description:
      'Jan 2020 – Jan 2021. AI-powered marketing technology platform that optimizes digital advertising and campaign performance across channels. Stack: Node.js, React, PHP, MySQL, MongoDB, AWS, GCP.',
    url: 'https://xena.livingconsumer.com',
    image: porfolioImage6,
  },
  {
    title: 'WIFT | Living Consumer',
    description:
      'Jan 2018 – Jan 2020. AI-driven tech job search and candidate matching platform focused on IT roles in India. Stack: Node.js, React, PHP, MySQL, MongoDB, AWS, GCP.',
    url: 'https://www.thewift.com',
    image: porfolioImage7,
  },
  {
    title: 'iCrushiFlush | Living Consumer',
    description:
      'Sep 2015 – Jan 2018. Mobile-first, location-based casual dating app helping young adults connect securely. Stack: Node.js, React, Socket.IO, PHP, MySQL, MongoDB, AWS, GCP.',
    image: porfolioImage8,
  },
  {
    title: 'Temple Management | MineBitz',
    description:
      '2012 – 2015. Digitizes daily operations of religious institutions: devotee engagement, event scheduling, donation tracking and puja bookings. Stack: PHP, MySQL, HTML, CSS.',
    image: porfolioImage9,
  },
  {
    title: 'School Management | MineBitz',
    description:
      '2012 – 2015. Automates academic and admin work: student info, staff, timetables, attendance, fees, exams & report cards, parent portal, plus library, transport and hostel modules. Stack: PHP, MySQL, HTML, CSS.',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2008 - 2012',
    location: 'Kannur University',
    title: 'B.Sc Computer Science',
    content: <p>Graduated with 75%.</p>,
  },
  {
    date: '2005 - 2008',
    location: 'Kannur University',
    title: 'SSLC + Higher Secondary',
    content: <p>Completed with 80%.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2021 - Present',
    location: 'Trianz Digital Consulting Pvt Ltd, Bangalore',
    title: 'Senior Technical Lead',
    content: (
      <ul className="list-outside list-disc space-y-1 pl-5 text-left">
        <li>Developed and maintained full-stack web applications using Node.js, React.js, PHP (Laravel) and Python.</li>
        <li>Worked with project managers to gather requirements, define scope and plan technical solutions.</li>
        <li>Led end-to-end implementation of features and modules aligned with business needs.</li>
        <li>Conducted code reviews to enforce best practices and mentored junior developers.</li>
        <li>Coordinated with QA teams on test planning, execution and issue resolution.</li>
        <li>Implemented CI/CD pipelines with Jenkins for automated builds, testing and deployments.</li>
        <li>Deployed and managed applications on AWS infrastructure.</li>
        <li>Promoted code quality, test-driven development (TDD) and team collaboration.</li>
        <li>Used Black Duck, Coverity and Netsparker for security analysis, open-source risk and static scanning.</li>
      </ul>
    ),
  },
  {
    date: 'Mar 2020 - Jan 2021',
    location: 'Ola Cabs, Mumbai',
    title: 'SDE - 2',
    content: (
      <ul className="list-outside list-disc space-y-1 pl-5 text-left">
        <li>
          Designed, built and tested a real-time monitoring web app tracking entry/exit machines across Delhi and Qatar
          metro stations.
        </li>
        <li>Built with Laravel, Node.js, React.js, Socket.IO, STOMP.js, Java Spring Boot, MongoDB and MySQL.</li>
        <li>Implemented a queuing system for BLOB byte data using IBM MQ, Oracle DB2 and Java Spring Boot.</li>
        <li>Set up Red Hat Enterprise Linux 7 & 8 instances, including offline package installs via repo sync.</li>
      </ul>
    ),
  },
  {
    date: 'Sep 2015 - Mar 2020',
    location: 'Living Consumer Products Pvt Ltd, Mumbai',
    title: 'Senior Software Engineer',
    content: (
      <ul className="list-outside list-disc space-y-1 pl-5 text-left">
        <li>Designed, developed and tested web apps and RESTful APIs using Laravel, PHP, Node.js, React and MySQL.</li>
        <li>Implemented a real-time chat application using Node.js, Socket.IO, jQuery and MongoDB.</li>
        <li>Installed and configured Ubuntu and CentOS instances on AWS and GCP.</li>
        <li>Contributed to in-house products including WIFT, iCrushiFlush and Xena.</li>
      </ul>
    ),
  },
  {
    date: 'Aug 2012 - Sep 2015',
    location: 'MineBitz Softwares, Kerala',
    title: 'Junior Software Engineer',
    content: (
      <ul className="list-outside list-disc space-y-1 pl-5 text-left">
        <li>Developed ERP modules using PHP, MySQL, jQuery, HTML and CSS.</li>
        <li>Built websites, admin panels and web apps using AngularJS, PHP, jQuery and MySQL.</li>
        <li>Developed custom WordPress plugins to extend site functionality and content management.</li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    "I'm open to new opportunities, collaborations and technical conversations. Feel free to reach out through any of the channels below.",
  items: [
    {
      type: ContactType.Email,
      text: 'sidhilsivadasm2022@gmail.com',
      href: 'mailto:sidhilsivadasm2022@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+91 9946112919',
      href: 'tel:+919946112919',
    },
    {
      type: ContactType.Location,
      text: 'Hoodi, Bangalore, India',
      href: 'https://www.google.com/maps/place/Hoodi,+Bengaluru,+Karnataka',
    },
    {
      type: ContactType.LinkedIn,
      text: 'sidhil-sivadas-m-4269515b',
      href: 'https://www.linkedin.com/in/sidhil-sivadas-m-4269515b/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sidhil-sivadas-m-4269515b/'},
];
