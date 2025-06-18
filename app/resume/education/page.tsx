'use client';
import BricolageFontWrapper from "@/app/components/FontWrapper";
import { EducationData } from "@/app/data/education";
import EducationCard from "@/app/components/EducationCard";
import PageContainer from "@/app/components/PageContainer";


const EducationPage = () => {


    return (
        <PageContainer>
            <div className="w-full ">
                <BricolageFontWrapper>
                    <p className="text-h1  text-java-red">My education</p>
                </BricolageFontWrapper>
                <p className="text-sm mt-4 text-java-grey">
                    A dedicated software engineer with a strong educational foundation in computer science, continuously
                    expanding my knowledge through hands-on experience and lifelong learning.
                </p>

                <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2">
                    {
                        EducationData.map((item, key) => <EducationCard key={key} school={item.school}
                            qualification={item.qualification}
                            year={item.year} />)
                    }
                </div>
            </div>
        </PageContainer>
    )
}

export default EducationPage;