import {LuCloud, LuDatabase, LuLayoutDashboard, LuServer, LuShield, LuWrench, LuZap,} from "react-icons/lu";
import {TbApi} from "react-icons/tb";
import {VscCodeReview} from "react-icons/vsc";
import {IoMdCodeWorking} from "react-icons/io";


const ServicesData= [
    {
        id: 1,
        title: "Custom Software Development",
        description: "I design and develop scalable, high-performance software solutions tailored to your business needs using Java and modern frameworks.",
        icon: IoMdCodeWorking,
    },
    {
        id: 2,
        title: "Full-Stack Web Development",
        description: "From backend logic to frontend UI, I build complete web applications with Java (Spring Boot) and modern JavaScript frameworks (React, Next.js).",
        icon: LuLayoutDashboard,
    },
    {
        id: 3,
        title: "Cloud Solutions & DevOps",
        description: "I deploy and manage cloud-based applications using AWS and Azure, ensuring high availability and scalability.",
        icon: LuCloud,
    },
    {
        id: 4,
        title: "API Development & Integration",
        description: "I create RESTful and GraphQL APIs and integrate third-party services to enhance your application’s functionality.",
        icon: TbApi,
    },
    {
        id: 5,
        title: "Database Design & Optimization",
        description: "I design and optimize relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Elasticsearch) databases for efficient data handling.",
        icon: LuDatabase,
    },
    {
        id: 6,
        title: "Microservices Architecture",
        description: "I build and manage microservices-based architectures for scalable and modular applications.",
        icon: LuServer,
    },
    {
        id: 7,
        title: "Software Maintenance & Support",
        description: "I provide ongoing support, bug fixes, and enhancements to ensure your software runs smoothly and efficiently.",
        icon: LuWrench,
    },
    {
        id: 8,
        title: "System Automation & Scripting",
        description: "I develop automation scripts and tools to streamline business processes, improving efficiency and reducing manual effort.",
        icon: LuZap,
    },
    {
        id: 9,
        title: "Security & Performance Optimization",
        description: "I implement best practices for security, conduct vulnerability assessments, and optimize applications for speed and reliability.",
        icon: LuShield,
    },
    {
        id: 10,
        title: "Technical Consulting & Code Review",
        description: "I offer expert guidance on software development best practices and conduct code reviews to improve code quality.",
        icon: VscCodeReview,
    },
];

export default ServicesData;
