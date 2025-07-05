'use client';
import Hero from "@/app/components/Hero";
import SkillsSection from "@/app/components/SkillsSection";
import AchievementsSection from "@/app/components/AchievementsSection";
import PageContainer from "./components/PageContainer";

export default function Home() {
    return (
        <>
            <PageContainer>
                <div className="w-full text-text-primary">
                    <Hero />
                </div>
            </PageContainer>
            <SkillsSection />
            <AchievementsSection />
        </>
    );
}
