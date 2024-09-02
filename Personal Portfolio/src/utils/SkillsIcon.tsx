import CSharpIcon from "../assets/icons/skills/csharp.svg";
import CSSIcon from "../assets/icons/skills/css.svg";
import GitIcon from "../assets/icons/skills/github.svg";
import HTMLIcon from "../assets/icons/skills/html.svg";
import JSIcon from "../assets/icons/skills/javascript.svg";
import PostManIcon from "../assets/icons/skills/postman.svg";
import ReactIcon from "../assets/icons/skills/react.svg";
import SassIcon from "../assets/icons/skills/sass.svg";
import TSIcon from "../assets/icons/skills/typescript.svg";
import ViteIcon from "../assets/icons/skills/vite.svg";

interface Skill {
  id: number;
  name: string;
  icon: string;
  type: string;
  level: string;
}

const SkillsData: Skill[] = [
  {
    id: 1,
    name: "HTML",
    icon: HTMLIcon,
    type: "skill",
    level: "Advanced",
  },
  {
    id: 2,
    name: "CSS",
    icon: CSSIcon,
    type: "skill",
    level: "Advanced",
  },
  {
    id: 3,
    name: "JS",
    icon: JSIcon,
    type: "skill",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "SASS",
    icon: SassIcon,
    type: "skill",
    level: "Advanced",
  },
  {
    id: 5,
    name: "C#",
    icon: CSharpIcon,
    type: "skill",
    level: "Beginner",
  },
  {
    id: 6,
    name: "React",
    icon: ReactIcon,
    type: "skill",
    level: "Intermediate",
  },
  {
    id: 7,
    name: "TypeScript",
    icon: TSIcon,
    type: "skill",
    level: "Beginner",
  },
];

const ToolsData: Skill[] = [
  {
    id: 1,
    name: "Vite",
    icon: ViteIcon,
    type: "tool",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "GitHub",
    icon: GitIcon,
    type: "tool",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "PostMan",
    icon: PostManIcon,
    type: "tool",
    level: "Intermediate",
  },
];
export { SkillsData, ToolsData };
