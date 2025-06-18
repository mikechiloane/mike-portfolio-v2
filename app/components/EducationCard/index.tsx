"use client";

import BricolageFontWrapper from "@/app/components/FontWrapper";

interface EducationCardProps {
    school: string;
    qualification: string;
    year: string;
}

const EducationCard = ({school, qualification, year}: EducationCardProps) => {
    return (
        <div className="flex rounded h-[160px] flex-col justify-between py-6 px-4 bg-white text-white">
            <div>
                <BricolageFontWrapper><h3 className="text-xl font-medium text-java-red">{qualification}</h3>
                </BricolageFontWrapper>
                <p className="text-md text-java-grey">{school}</p>
            </div>

            <p className="text-sm text-java-grey">{year}</p>
        </div>
    );
}

export default EducationCard;