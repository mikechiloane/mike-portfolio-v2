'use client';
import ServicesData from "@/app/data/servicesData";
import ServiceCard from "@/app/components/ServiceCard";
import BricolageFontWrapper from "@/app/components/FontWrapper";
import PageContainer from "../components/PageContainer";

const ServicePage = () => {


    return(
        <PageContainer>
        <div className="w-full">
            <BricolageFontWrapper><p className="text-h1  font-bold text-java-red">My Services</p></BricolageFontWrapper>
            <p className="text-sm mt-2 text-java-grey">I offer a variety of services, including web development, mobile app development, and software consulting.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {ServicesData.map((service,key)=> <ServiceCard key={key} title={service.title} description={service.description}>{<service.icon/>}</ServiceCard>)}
            </div>
        </div>
        </PageContainer>
    )
}

export default ServicePage;