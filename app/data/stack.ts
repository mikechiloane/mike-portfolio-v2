interface TechnologyStack {
    name: string;
    image: string;
}

function generateStack(){
    const stack = [];

    for (let i = 0; i <= 27; i++){
        stack.push(`/Stack/${i}.png`);
    }

    return stack;

}

const generateStackWithNames = (): TechnologyStack[] => {
   // Organized by importance for a Java developer
   return [
        // Core Java & JVM Technologies
        {
            name: "Java",
            image: "/stack/0.png"
        },
        {
            name: "Spring",
            image: "/stack/12.png"
        },
        {
            name: "Quarkus",
            image: "/stack/6.png"
        },
        {
            name: "Maven",
            image: "/stack/maven.png"
        },
        {
            name: "Gradle",
            image: "/stack/gradle.png"
        },
        {
            name: "JUnit",
            image: "/stack/junit.png"
        },
        
        // Databases (Critical for Java developers)
        {
            name: "PostgreSQL",
            image: "/stack/3.png"
        },
        {
            name: "MongoDB",
            image: "/stack/10.png"
        },
        {
            name: "Redis",
            image: "/stack/24.png"
        },
        {
            name: "ElasticSearch",
            image: "/stack/16.png"
        },
        
        // Cloud & DevOps (Essential for modern Java development)
        {
            name: "AWS",
            image: "/stack/25.png"
        },
        {
            name: "Azure",
            image: "/stack/26.png"
        },
        {
            name: "Docker",
            image: "/stack/19.png"
        },
        {
            name: "Kubernetes",
            image: "/stack/8.png"
        },
        {
            name: "Jenkins",
            image: "/stack/jenkins.jpeg"
        },
        {
            name: "DataDog",
            image: "/stack/24.png"
        },
        
        // Frontend Technologies (Important for full-stack Java developers)
        {
            name: "React",
            image: "/stack/13.png"
        },
        {
            name: "Next.js",
            image: "/stack/11.png"
        },
        {
            name: "Angular",
            image: "/stack/17.png"
        },
        {
            name: "TypeScript",
            image: "/stack/15.png"
        },
        {
            name: "JavaScript",
            image: "/stack/7.png"
        },
        {
            name: "Tailwind CSS",
            image: "/stack/14.png"
        },
        
        // Additional Backend Technologies
        {
            name: "Node.js",
            image: "/stack/21.png"
        },
        {
            name: "Express.js",
            image: "/stack/21.png"
        },
        {
            name: "Python",
            image: "/stack/4.png"
        },
        {
            name: "PHP",
            image: "/stack/2.png"
        },
        
        // Version Control (Essential)
        {
            name: "Git",
            image: "/stack/27.png"
        }
    ]
}



// Core exports for the new structure
export const stackWithNames = generateStackWithNames();
export const stackImages = generateStack();

// Convenience exports
export const namedStackImages = stackWithNames.map(tech => tech.image);
export const technologyNames = stackWithNames.map(tech => tech.name);

// Category-based exports for easy access
export const coreJavaStack = stackWithNames.slice(0, 6);
export const databaseStack = stackWithNames.slice(6, 10);
export const cloudDevopsStack = stackWithNames.slice(10, 16);
export const frontendStack = stackWithNames.slice(16, 22);
export const additionalStack = stackWithNames.slice(22);

// Type export for other components
export type { TechnologyStack };