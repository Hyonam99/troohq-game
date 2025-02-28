import { menuItems } from "@/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import GameTrivia from "@components/game/GameTrivia";
import Logo from "./Logo";

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<div
			className={`bg-dark-blue h-screen overflow-y-scroll hide-scroll transition-all duration-300 hidden lg:block pr-[10px] ${
				isCollapsed ? "w-20" : "w-[320px]"
			}`}
		>
			<div className={`relative p-4 border-r border-white/45`}>
				<div className="relative flex items-center justify-between mb-8">
					<div className={isCollapsed ? "hidden" : "block"}>
						<Logo />
					</div>
					<button
						onClick={() => {
							setIsCollapsed(!isCollapsed);
						}}
						className="absolute top-0 -right-[34px] !z-50 text-white hover:bg-sidebar-hover p-2 rounded-lg transition-all"
					>
						{isCollapsed ? (
							<img
								src="/icons/arrow.svg"
								className="rotate-180"
							/>
						) : (
							<img src="/icons/arrow.svg" />
						)}
					</button>
				</div>
				<nav className="flex flex-col gap-4">
					{menuItems.map((link) => (
						<NavLink
							key={link.label}
							to={link.linkUrl}
							className={({ isActive }) =>
								`default-nav ${isActive ? "active-nav" : ""} ${
									isCollapsed
										? "!h-[48px] w-[40px] justify-center !py-1 !px-2"
										: ""
								}`
							}
						>
							<link.icon size={20} />
							{!isCollapsed && <span>{link.label}</span>}
						</NavLink>
					))}
				</nav>

				<button className="default-nav w-full mt-4">
					<RiLogoutCircleRLine size={20} />
					{!isCollapsed && <span>Logout</span>}
				</button>

				{!isCollapsed && <GameTrivia />}
			</div>
		</div>
	);
};

export default Sidebar;
