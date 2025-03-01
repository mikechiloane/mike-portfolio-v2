import BricolageFontWrapper from "@/app/components/FontWrapper";
import {stackImages} from "@/app/data/stack";
import TechnologyCard from "@/app/components/TechnologyCard";

export default function TechnologiesPage() {

    return (
        <div className="w-full">
            <BricolageFontWrapper><p className="text-h1  text-java-red">Technologies</p></BricolageFontWrapper>
            <p className="text-sm mt-4 text-java-grey">I have worked with a wide range of technologies, including
                front-end frameworks, back-end development, and database management systems.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    stackImages.map((item, key) => <TechnologyCard key={key} image={item}/>)
                }
            </div>
        </div>
    )
}