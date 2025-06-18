'use client';
import React from "react";
import FontWrapper from "@/app/components/FontWrapper";
import * as ActionTracker from "@/app/dist";


const DefaultBodyPadding = ({ children }: { children: React.ReactNode }) => {

    const initializeActionTracker = () => {
        const EVENT_TRACKER_URL = process.env.NEXT_PUBLIC_EVENT_TRACKER_URL;
        try {
            if (EVENT_TRACKER_URL) {
                ActionTracker.init({
                    endpoint: EVENT_TRACKER_URL,
                    flushInterval: 10000,
                    maxBatchSize: 20,
                    sessionTimeout: 30 * 60 * 1000,
                    debug: true,
                });
            } else {
                console.warn('NEXT_PUBLIC_EVENT_TRACKER_URL is not set. ActionTracker will not be initialized.');
            }
        }
        catch (error) {
            console.error('Error initializing ActionTracker:', error);
        }
    };


    React.useEffect(() => {
        initializeActionTracker();
    }, []);


    return (
        <div className="flex  w-full h-full flex-col px-8  items-center mb-24">
            <div className="w-full max-w-[1290px]">
                <FontWrapper>{children}</FontWrapper>
            </div>
        </div>
    );
}

export default DefaultBodyPadding;