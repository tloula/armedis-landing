import { IBenefit } from "@/types";
import { BsChatText, BsLightning, BsPeople } from "react-icons/bs";
import { CiBellOn, CiPause1, CiTimer } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { GrMultiple } from "react-icons/gr";
import { IoOptionsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { PiHandTap } from "react-icons/pi";
import { TfiInfinite } from "react-icons/tfi";

// All Icons: https://react-icons.github.io/react-icons/

export const benefits: IBenefit[] = [
    {
        title: "Check In Your Way",
        description: "Flexible Scheduling, Fully Automated",
        bullets: [
            {
                title: "Unlimited check-ins",
                description: "Choose how often and when you check in.",
                icon: <TfiInfinite size={26} />
            },
            {
                title: "Personalize it",
                description: "Customize check-in times for different days of the week.",
                icon: <FiClock size={26} />
            },
            {
                title: "Adjustable check-in windows",
                description: "Set flexible windows for more freedom or faster responses.",
                icon: <CiTimer size={26} />
            },
            {
                title: "Ready to go",
                description: "Use default settings or customize fully.",
                icon: <BsLightning size={26} />
            },
            {
                title: "Take a pause",
                description: "Easily disable check-ins for vacations or special circumstances.",
                icon: <CiPause1 size={26} />
            }
        ],
        close: "Your routine isn't one-size-fits-all. This system adapts to your life, not the other way around.",
        imageSrc: "/images/mockup-config.webp"
    },
    {
        title: "Check In—Fast, Easy, and Hassle-Free",
        description: "Simple Check-Ins, Your Way",
        bullets: [
            {
                title: "Pick your method",
                description: "One-tap, mood status, request assistance, or combo.",
                icon: <GrMultiple size={26} />
            },
            {
                title: "Done in seconds",
                description: "Tap, check in, and you're good to go.",
                icon: <PiHandTap size={26} />
            },
            {
                title: "Never miss a check-in",
                description: "Get reminders via notifications.",
                icon: <CiBellOn size={26} />
            },
            {
                title: "See past check-ins",
                description: "Track activity over time.",
                icon: <MdHistory size={26} />
            },
        ],
        close: "Checking in should be effortless. A few taps for peace of mind.",
        imageSrc: "/images/mockup-checkin.webp"
    },
    {
        title: "Keep Everyone in the Loop—Effortlessly",
        description: "Different People, Different Needs",
        bullets: [
            {
                title: "Keep everyone informed",
                description: "Add unlimited contacts with ease.",
                icon: <BsPeople size={26} />
            },
            {
                title: "Only the right alerts",
                description: "Customize what each loved one gets notified about.",
                icon: <IoOptionsOutline size={26} />
            },
            {
                title: "Stay updated via text",
                description: "Instant updates sent directly to you.",
                icon: <BsChatText size={26} />
            }
        ],
        close: 'Get the right information to the right people. With simple text alerts, staying connected is seamless.',
        imageSrc: "/images/mockup-contacts.webp"
    },
]