import {MdOutlineEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa6";
import {IoLocationSharp} from "react-icons/io5";
import {IconType} from "react-icons";

export type ContactData = {
    title: string;
    value: string;
    child: IconType;
}
const contactData = [
    {
        title:'phone',
        value:'0727388632',
        child: FaPhone
    },
    {
        title:'Email',
        value:'mike@mikechiloane.co.za',
        child:MdOutlineEmail
    },
    {
        title:'Address',
        value:'Pretoria, South Africa',
        child:IoLocationSharp
    }
]

export default contactData;