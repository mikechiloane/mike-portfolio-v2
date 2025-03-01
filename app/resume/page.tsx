'use client';
import { useEffect } from "react";
import {useRouter} from "next/navigation";

const ResumePage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/resume/experience");
    }, [router]);

    return (
        <div className="w-full h-full flex flex-col items-center">
        </div>
    );
}

export default ResumePage;