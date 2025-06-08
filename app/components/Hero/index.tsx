import {Bricolage_Grotesque} from "next/font/google";
import Image from "next/image";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const Hero = () => {


    return (
            <div className="flex w-full flex-col md:flex-row gap-24  items-between mt-16 text-center md:text-start ">
                <div className="w-full">
                    <p className="text-lg font-semibold">Java Software Developer</p>
                    <div className={`${font.className} -mx-1 text-7xl font-semibold`}>
                        <p>Hello I&#39;m</p>
                        <p className="text-java-red mt-1">Mike Chiloane</p>
                    </div>
                    <div className="text-small mt-4 text-gray-500 max-w-[500px] ">
                        <p className="text-lg font-medium">Software Engineer with 6+ years of experience in building scalable, secure, and data-driven applications. Experienced in collaborating with cross-functional teams including devOps/SRE experts, data scientists and product managers. </p>
                    </div>

                    <div className="mt-6 flex h-20 overflow-hidden  gap-2 items-center justify-center md:justify-start">
                        <a download href="/cv/Mike_Chiloane_ID.pdf" className="relateive flex items-center bg-java-blue w-fit px-3 rounded cursor-pointer hover:scale-110 transition-all duration-300">
                            <Image width={20} height={200} src="/icons/download.svg" alt="download"/>
                            <button className="text-md font-bold  text-white py-2  ">Download CV</button>
                        </a>
                        <a  href="https://www.linkedin.com/in/mikechiloane/" target="_blank"><Image src="/icons/linkedin.svg" width={40} height={30} alt="LinkedIn" className="cursor-pointer hover:scale-110 transition-all duration-300"/></a>
                        <a href="https://github.com/mikechiloane" target="_blank"><Image src="/icons/github.svg" width={40} height={30} alt="LinkedIn" className="cursor-pointer hover:scale-110 transition-all duration-300"/></a>

                    </div>

                </div>


                <div className=" justify-center md:justify-end flex">
                    <div className="relative h-[300px] w-[300px]  md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 ">
                        <Image
                            src="/me.JPG"
                            alt="Random Profile"
                            layout="fill"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

    )
}


export default Hero;