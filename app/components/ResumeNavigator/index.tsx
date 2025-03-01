import {Bricolage_Grotesque} from "next/font/google";
import {ResumeNavItems} from "@/app/data/nav";
import Link from "next/link";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const ResumeNavigator = () => {

    return (
        <div className={`w-full h-full flex flex-col md:max-w-sm`}>
            <p className={`text-h1 font-bold text-java-red  ${font.className}`}>Why hire me?</p>
            <p>I deliver clean, efficient code and adapt quickly to new technologies. I&#39;m a problem-solver who
                prioritizes collaboration and impactful results.</p>
            <div className="flex flex-col gap-4 mt-8">
                {
                    ResumeNavItems.map((item, key) => <NavigatorButton key={key} text={item}/>)
                }
            </div>
        </div>
    )
}


const NavigatorButton = ({text}: { text: string }) => {


    return (
        <Link href={`/resume/${text.toLowerCase()}`}>
            <div className="w-full py-2 rounded flex items-center justify-center bg-java-grey">
                <p className="text-white text-xl capitalize font-medium">{text}</p>
            </div>
        </Link>
    )
}


export default ResumeNavigator;