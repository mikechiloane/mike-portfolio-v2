'use client';
import Hero from "@/app/components/Hero";
import PageContainer from "./components/PageContainer";

export default function Home() {

    return (
        <PageContainer>
            <div className="w-full h-full text-java-grey">
                <Hero />
            </div>
        </PageContainer>
    );
}
