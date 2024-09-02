import RDLogo from "../assets/images/rd.jpg";
import AGLogo from "../assets/images/ag.jpg";

interface Company {
  id: number;
  logo: string;
  role: string;
  name: string;
  description: string[];
}

export const ExperienceData: Company[] = [
  {
    id: 1,
    logo: RDLogo,
    role: "Software Engineer",
    name: "RapidData Technologies",
    description: [
      "Proficient in developing responsive and dynamic web applications with expertise in HTML, CSS, JavaScript, and Mendix Low-Code.",
      "Experienced in designing user-friendly interfaces, strictly adhering to the best UI/UX practices.",
      "Skilled in troubleshooting and resolving technical issues to ensure smooth application functionality.",
    ],
  },
  {
    id: 2,
    logo: AGLogo,
    role: "Software Engineer",
    name: "Aura Global",
    description: [
      "Collaborated with a team to troubleshoot and debug code for gaming applications.",
      "Gained practical experience in applying Interactive physics by using C# scripting.",
      "Gained practical experience in optimizing game performance through code enhancements.",
      "Developed interactive gameplay design features.",
    ],
  },
];
