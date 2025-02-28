import { LiaAwardSolid } from "react-icons/lia";
import { GoHome } from "react-icons/go";
import { FiBarChart } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";

const menuItems = [
	{ icon: GoHome, label: "Home", linkUrl: "/" },
	{ icon: FiBarChart, label: "Play Mode", linkUrl: "/play-mode" },
	{ icon: LiaAwardSolid, label: "Leaderboard", linkUrl: "leaderboard" },
	{ icon: HiOutlineUsers, label: "Categories", linkUrl: "/categories" },
	{ icon: HiOutlineUsers, label: "Multiplayer", linkUrl: "/multiplayer" },
	{ icon: FiBarChart, label: "Gaming stats", linkUrl: "/gaming-stats" },
	{ icon: IoIosHelpCircleOutline, label: "How to play", linkUrl: "/how-to-play" },
	{ icon: CiSettings, label: "Settings", linkUrl: "settings" },
	{ icon: IoIosHelpCircleOutline, label: "Help", linkUrl: "/help" },
];

export { menuItems };
