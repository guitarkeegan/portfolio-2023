"use client";
import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";

export default function Email() {
    const MY_EMAIL = "keegananglim@gmail.com";
    const [notification, setNotification] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(MY_EMAIL);
        setNotification(true);
        setTimeout(()=>{
            setNotification(false);
        }, 3000)
    };

    const handleNotification = () => {
        return (
            <div className="fixed dark:text-dark-text bg-rose-100 translate-y-10 -translate-x-1/2">
                Email copied to clipboard!
            </div>
        )
    }
    
    return (
        <div>
            {notification && 
            handleNotification()
            }
            <button
                className="text-main-theme active:translate-y-2 transition-transform duration-100"
                onClick={handleCopy}
            >
                <FaMailBulk />
            </button>
        </div>
    );
}
