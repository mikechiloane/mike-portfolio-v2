import {Bricolage_Grotesque} from "next/font/google";
import Image from "next/image";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const Hero = () => {


    return (
            <div className="flex w-full flex-col md:flex-row gap-8  items-between mt-16 text-center md:text-start">
                <div className="w-full">
                    <p className="text-lg font-semibold">Java Software Developer</p>
                    <div className={`${font.className} -mx-1 text-7xl font-semibold`}>
                        <p>Hello I&#39;m</p>
                        <p className="text-java-red mt-1">Mike Chiloane</p>
                    </div>
                    <div className="text-small mt-4 text-gray-500 max-w-[500px] ">
                        <p className="text-lg font-medium">I am a Java Software Developer with experience in building
                            web applications and RESTful APIs using Java, Spring Boot, and MySQL. I am also experienced
                            in building front-end applications using React, Next.js, and Tailwind CSS.</p>
                    </div>

                    <div className="mt-6">
                        <div>
                            <button className="text-xs font-bold border-2 text-java-red py-2 px-4 border-java-red border rounded-full">DOWNLOAD CV</button>
                        </div>
                    </div>

                </div>


                <div className=" justify-center md:justify-end flex">
                    <div className="relative h-[300px] w-[300px]  md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 ">
                        <Image
                            src="/me.jpg" // Random Image
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