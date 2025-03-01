import FontWrapper from "@/app/components/FontWrapper";
import projectData from "@/app/data/projectData";
import ProjectCard from "@/app/components/ProjectCard";

export default function Page() {

    return (
        <div>
            <FontWrapper><p className="text-h1 font-medium text-java-red">Projects</p></FontWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 mt-8">
                {
                    projectData.map((item, key) => <ProjectCard projectName={item.name} desc={item.description}
                                                                stack={item.technologies} key={key}/>)
                }
            </div>
        </div>
    )
}