"use client";

import {FC, ReactNode} from "react";

interface ContactEntryProps {
    children: ReactNode;
    title: string;
    value: string;
}

const ContactEntry: FC<ContactEntryProps> = ({children, title, value}) => {

    return (
        <div className="flex items-center gap-4  md:p-4">
            <div className="text-2xl h-[4rem] w-[4rem] bg-java-blue text-white flex items-center justify-center p-4">
                {children}
            </div>
            <div>
                <p className="capitalize text-small text-java-grey font-bold">{title}</p>
                <p className="text-lg">{value}</p>
            </div>
        </div>
    )
}


export default ContactEntry;