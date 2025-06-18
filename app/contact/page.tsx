"use client";
import React, { useState, FormEvent, FocusEvent } from "react";
import contactData, { ContactData } from "@/app/data/contact";
import ContactEntry from "@/app/components/ContactEntry";
import SendRMessage from "@/app/resend-client";
import PageContainer from "../components/PageContainer";


interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}


type FieldName = keyof FormData;

type Errors = Partial<Record<FieldName, string>>;

const ContactPage: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });


    const [errors, setErrors] = useState<Errors>({});


    const [submitted, setSubmitted] = useState<boolean>(false);


    const validateField = (name: FieldName, value: string): string => {
        let errorMsg = "";
        switch (name) {
            case "firstname":
                if (!value.trim()) {
                    errorMsg = "First name is required.";
                }
                break;
            case "lastname":
                if (!value.trim()) {
                    errorMsg = "Last name is required.";
                }
                break;
            case "email":
                if (!value.trim()) {
                    errorMsg = "Email is required.";
                } else if (
                    !/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                    errorMsg = "Invalid email format.";
                }
                break;
            case "phone":
                if (!value.trim()) {
                    errorMsg = "Phone number is required.";
                } else if (!/^\d{7,}$/.test(value.replace(/\D/g, ""))) {

                    errorMsg = "Invalid phone number.";
                }
                break;
            case "message":
                if (!value.trim()) {
                    errorMsg = "Message is required.";
                }
                break;
            default:
                break;
        }
        return errorMsg;
    };


    const handleBlur = (
        e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as FieldName;
        const errorMsg = validateField(fieldName, value);
        setErrors((prev) => ({ ...prev, [fieldName]: errorMsg }));
    };


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as FieldName;
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(false);

        const newErrors: Errors = {};
        (Object.keys(formData) as FieldName[]).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
            }
        });


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }


        console.log("Form Data:", formData);


        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
        });
        setErrors({});

        SendRMessage(JSON.stringify(formData)).then((response) => setSubmitted(response));
        setSubmitted(true);
    };

    return (
        <PageContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FORM SECTION */}
                <form onSubmit={handleSubmit}>
                    <p className="text-h1 font-semibold text-java-red">
                        Let&#39;s work together
                    </p>
                    <p className="text-body">
                        Let’s combine your vision with my expertise to create something
                        extraordinary. Together, we can innovate, grow, and make a lasting impact.
                    </p>

                    {/* First & Last Name */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* FIRSTNAME */}
                        <div>
                            <input
                                name="firstname"
                                placeholder="Firstname"
                                className={`py-3 w-full px-2 outline-none ${errors.firstname
                                        ? "border border-red-500"
                                        : "border border-gray-300"
                                    }`}
                                value={formData.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstname && (
                                <p className="text-red-600 text-sm">{errors.firstname}</p>
                            )}
                        </div>

                        {/* LASTNAME */}
                        <div>
                            <input
                                name="lastname"
                                placeholder="Lastname"
                                className={`py-3 w-full px-2 outline-none ${errors.lastname
                                        ? "border border-red-500"
                                        : "border border-gray-300"
                                    }`}
                                value={formData.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastname && (
                                <p className="text-red-600 text-sm">{errors.lastname}</p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <input
                                name="email"
                                placeholder="Email"
                                className={`py-3 w-full px-2 outline-none ${errors.email
                                        ? "border border-red-500"
                                        : "border border-gray-300"
                                    }`}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div>
                            <input
                                name="phone"
                                placeholder="Phone"
                                className={`py-3 w-full px-2 outline-none ${errors.phone
                                        ? "border border-red-500"
                                        : "border border-gray-300"
                                    }`}
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phone && (
                                <p className="text-red-600 text-sm">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="mt-6">
                        <textarea
                            name="message"
                            placeholder="Message"
                            className={`w-full outline-none p-2 ${errors.message
                                    ? "border border-red-500"
                                    : "border border-gray-300"
                                }`}
                            rows={7}
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.message && (
                            <p className="text-red-600 text-sm">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-8 bg-java-blue text-white font-medium rounded-full px-4 py-2"
                    >
                        Send Message
                    </button>

                    {/* SUCCESS MESSAGE */}
                    {submitted && (
                        <div className="mt-4 text-java-yellow">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                </form>

                {/* CONTACT DATA SECTION */}
                <div className="flex flex-col md:p-8 justify-center gap-8">
                    {contactData.map((contact: ContactData, key: number) => (
                        <ContactEntry key={key} title={contact.title} value={contact.value}>
                            {<contact.child />}
                        </ContactEntry>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
};

export default ContactPage;