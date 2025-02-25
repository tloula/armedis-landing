import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Check-ins completed, ensuring peace of mind."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating, consistently maintained across app stores."
    }
];