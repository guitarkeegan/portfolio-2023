"use client";
import { FaMailBulk } from "react-icons/fa";

export default function Email(){

    const MY_EMAIL = "keegananglim@gmail.com"

    const handleCopy = async () => {
        await navigator.clipboard.writeText(MY_EMAIL);
    }

    return (
        <button className="active:translate-y-2 transition-transform duration-100" onClick={handleCopy}>
            <FaMailBulk />
        </button>
    )
}