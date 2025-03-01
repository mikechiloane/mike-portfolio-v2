'use server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function SendRMessage(message:string) {
    const {error} = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['mike@mikechiloane.co.za'],
        subject: 'Message from portfolio',
        react:`<p>${message}</p>`,
    });

    return !error;
};