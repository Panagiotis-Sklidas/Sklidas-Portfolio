import { Project } from './project.model';

export const proData: Project[] = [
  {
    uid: 'pro',
    title: 'Pharmacy Information System',
    technology: ['C#', 'SQL'],
    platform: ['github'],
    imagePath: '../../assets/images/projects/pis.png',
    description:
      'I contributed to the development of a Pharmacy Information System that streamlined inventory management, order tracking, and profit analysis. The system, built with C# and SQL, helped optimize pharmacy operations by providing real-time stock updates and detailed financial reports for better decision-making.',
    url: 'https://github.com/Konstantinos-Papanagnou/Project-Management',
    startDate: 'Mar 2021',
    endDate: 'Jun 2021',
  },
  {
    uid: 'pro1',
    title: 'Advanced Attendance System',
    technology: ['Python', 'SQLite'],
    platform: ['github'],
    imagePath: '../../assets/images/projects/aas.png',
    description:
      'For my thesis, I developed an Advanced Attendance System using RFID smartcards and facial recognition to enhance workplace access control. The system integrated real-time tracking and automated reporting, improving security and efficiency in managing employee attendance.',
    url: 'https://github.com/Panagiotis-Sklidas/Advanced-Attendance-System',
    startDate: 'Mar 2022',
    endDate: 'Sep 2022',
  },
  {
    uid: 'pro2',
    title: 'KML Data Extractor',
    technology: ['Python'],
    platform: ['github'],
    imagePath: '../../assets/images/projects/kmldata.jpg',
    description:
      "A kml data extraction script. Creates two csv: 1) with the placemaker's name and the latitude, longitude coordinates and 2) with the placemaker's name and the x,y,z coordinates.",
    url: 'https://github.com/Panagiotis-Sklidas/KMLDataExtractor',
    startDate: 'Jun 2023',
    endDate: 'Jun 2023',
  },
  {
    uid: 'pro3',
    title: 'Portfolio website',
    technology: ['Angular', 'Scss'],
    platform: ['github'],
    imagePath: '../../assets/images/projects/portfolio.png',
    description:
      'My personal website portfolio built with Angular, Scss and TypeScript.',
    url: 'https://github.com/Panagiotis-Sklidas/Sklidas-Portfolio',
    startDate: 'Nov 2024',
    endDate: 'Nov 2024',
  },
];
