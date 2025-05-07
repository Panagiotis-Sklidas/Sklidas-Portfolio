import { JobExperience } from './experience.model';

export const expData: JobExperience[] = [
  {
    uid: 'exp0',
    title: 'Bachelor in Computer Science',
    company: 'International Hellenic University, Kavala',
    description:
      'During my studies, I explored software development, algorithms, and database systems through a comprehensive curriculum. My coursework and projects included:',
    responsibility: [
      'Developing an Advanced Attendance System in Python',
      'Creating a Pharmacy Information System in C#',
      'Gaining hands-on experience with programming languages, version control, and relational databases',
    ],
    startDate: 'Sep 2018',
    endDate: 'Jun 2023',
  },
  {
    uid: 'exp1',
    title: 'Frontend Web Developer (Intership)',
    company: 'SOFTWeb - Adaptive I.T. Solutions',
    description:
      'I worked as a front-end web developer in a team working on a real-world application for our clients. My duties included:',
    responsibility: [
      'Maintained the existing code and fixed bugs in the application using Angular, Scss, TypeScript and C#',
      'Add new feature using Angular, Scss, TypeScript and C#',
      'In addition to that, I participated in online meetings with the client and their IT team',
    ],
    startDate: 'May 2022',
    endDate: 'Oct 2022',
  },
  {
    uid: 'exp2',
    title: 'Computer Science Teacher (Internship)',
    company: '15th Primary School of Kavala',
    description: 'I worked as a teacher in a primary school.',
    responsibility: [
      'I introduced basic programming concepts, including if/else conditions and problem-solving, to 6th-grade students using Scratch',
      'For 3rd, 4th, and 5th graders, I taught Microsoft Office applications',
      'With 1st and 2nd graders, I covered fundamental computer concepts, such as identifying and using computer peripherals',
    ],
    startDate: 'Apr 2023',
    endDate: 'Jun 2023',
  },
  {
    uid: 'exp3',
    title: 'IT Support',
    company: '31st CIS Company NRDC-GR',
    description:
      "During my enlistment in the Greek army, I was selected to serve in the 31st CIS Company at NATO's Headquarters in Thessaloniki. My duties included:",
    responsibility: [
      'Providing rapid response to infrastructure and user support issues at the headquarters',
      'Performed hardware diagnostics, repairs, and routine maintenance on workstations and network equipment to ensure system reliability',
      'Utilizing and maintaining Windows Deployment Servers (WDS)',
      'Developing Python scripts to automate repetitive tasks, enhancing efficiency within the IT department',
    ],
    startDate: 'Jan 2024',
    endDate: 'Nov 2024',
  },
];
