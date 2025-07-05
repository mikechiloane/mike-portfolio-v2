interface EducationItem {
    school: string;
    qualification: string;
    year: string;
    description?: string;
    achievements?: string[];
    location?: string;
}

const EducationData: EducationItem[] = [
    {
        qualification: "BSc Computer Science",
        school: "University of Limpopo",
        year: "2018 - 2022",
        location: "Polokwane, South Africa",
        description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and database systems.",
        achievements: [
            "Strong foundation in programming and software development",
            "Specialized in web development and database design",
            "Participated in coding competitions and hackathons",
            "Completed capstone project in full-stack web development"
        ]
    },
    {
        qualification: "National Senior Certificate",
        school: "Sekwai Secondary School",
        year: "2013 - 2017",
        location: "Limpopo, South Africa",
        description: "Completed high school education with focus on Mathematics, Physical Sciences, and Information Technology.",
        achievements: [
            "Mathematics and Science excellence",
            "Early exposure to programming concepts",
            "Leadership roles in technology clubs"
        ]
    },
    {
        qualification: "Primary Education",
        school: "LL Mogane Primary School",
        year: "2006 - 2012",
        location: "Limpopo, South Africa",
        description: "Foundation education with early interest in technology and problem-solving.",
        achievements: [
            "Academic excellence",
            "Early technology enthusiasm"
        ]
    }
]

export {EducationData};