'use client';
import ExperienceData from "@/app/data/experience";
import ExperienceCard from "@/app/components/ExperienceCard";
import BricolageFontWrapper from "@/app/components/FontWrapper";
import PageContainer from "@/app/components/PageContainer";



const ExperiencePage = () => {


    return (
        <PageContainer>
            <div className="w-full ">
                <BricolageFontWrapper><p className="text-h1  text-java-red">My experience</p></BricolageFontWrapper>
                <p className="text-sm mt-4 text-java-grey">A seasoned software engineer with [number] years of experience, I
                    have a deep understanding of software development principles and a proven ability to lead and mentor
                    teams.</p>

                <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2">
                    {
                        ExperienceData.map((item, key) => <ExperienceCard key={key} title={item.position} date={item.year}
                            company={item.company}
                        />)
                    }
                </div>
            </div>
        </PageContainer>
    )
}

export default ExperiencePage;