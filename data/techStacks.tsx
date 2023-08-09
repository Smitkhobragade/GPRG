import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDart,
  SiDjango,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiRubyonrails,
  SiRust,
  SiSolid,
  SiSurrealdb,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techStackOptions = [
  { label: "React", value: "react", icon: <FaReact /> },
  { label: "Angular", value: "angular", icon: <FaAngular /> },
  { label: "Vue.js", value: "vuejs", icon: <FaVuejs /> },
  { label: "Svelte", value: "svelte", icon: <SiSvelte /> },
  { label: "Solid", value: "solid", icon: <SiSolid /> },
  { label: "Tailwind", value: "tailwind", icon: <SiTailwindcss /> },
  { label: "Flutter", value: "flutter", icon: <SiFlutter /> },

  { label: "Node.js", value: "nodejs", icon: <FaNodeJs /> },
  { label: "Express", value: "expressjs", icon: <SiExpress /> },
  { label: "Django", value: "django", icon: <SiDjango /> },
  { label: "Ruby On Rails", value: "rubyonrails", icon: <SiRubyonrails /> },
  { label: "Flask", value: "flask", icon: <SiFlask /> },
  { label: ".NET", value: "dotnet", icon: <SiDotnet /> },

  { label: "Python", value: "python", icon: <FaPython /> },
  { label: "Java", value: "java", icon: <FaJava /> },
  { label: "JavaScript", value: "javascript", icon: <SiJavascript /> },
  { label: "TypeScript", value: "typescript", icon: <SiTypescript /> },
  { label: "PHP", value: "php", icon: <SiPhp /> },
  { label: "HTML", value: "html", icon: <SiHtml5 /> },
  { label: "CSS", value: "css", icon: <SiCss3 /> },
  { label: "C++", value: "cplusplus", icon: <SiCplusplus /> },
  { label: "C", value: "c", icon: <SiC /> },
  { label: "C#", value: "csharp", icon: <SiCsharp /> },
  { label: "Rust", value: "rust", icon: <SiRust /> },
  { label: "Go", value: "golang", icon: <SiGo /> },
  { label: "Dart", value: "dart", icon: <SiDart /> },
  { label: "Kotlin", value: "kotlin", icon: <SiKotlin /> },
  { label: "Swift", value: "swift", icon: <SiSwift /> },

  { label: "MySQL", value: "mysql", icon: <SiMysql /> },
  { label: "PostgreSQL", value: "postgresql", icon: <SiPostgresql /> },
  { label: "MongoDB", value: "mongodb", icon: <SiMongodb /> },
  { label: "SurrealDB", value: "surrealdb", icon: <SiSurrealdb /> },
];

export default techStackOptions;