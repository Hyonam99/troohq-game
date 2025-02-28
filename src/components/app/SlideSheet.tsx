import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import Logo from "./Logo";
import { menuItems } from "@/constants";
import GameTrivia from "@components/game/GameTrivia";
import { RiLogoutCircleRLine } from "react-icons/ri";

interface SideNavProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideSheet = (props: SideNavProps) => {
	const { isOpen, onClose } = props;

	return (
		<section
			className={`fixed top-0 left-0 h-[100vh] w-full transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 z-50 pb-4`}
		>
			<div
				className={
					"relative z-10 h-[100vh] w-11/12 sm:w-3/5 p-7 bg-dark-blue border-r-2 border-primary/50 flex flex-col items-start gap-5 overflow-y-scroll hide-scroll"
				}
				onClick={onClose}
			>
				<div className="w-full flex items-center justify-between">
					<Logo />
					<RxCross2 size={24} color="#FFFFFF" onClick={onClose} />
				</div>
				{menuItems.map((link, i) => (
					<NavLink
						key={link.label}
						to={link.linkUrl}
						className={({ isActive }) =>
							`default-nav w-full ${
								isActive ? "active-nav" : ""
							} ${i === 5 ? "mb-8" : ""}`
						}
					>
						<img src={link.icon} alt={link.label} />
						{link.label}
					</NavLink>
				))}

				<button className="default-nav w-full mt-4"><RiLogoutCircleRLine size={20} />Logout</button>

				<GameTrivia />
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 bg-stone-black/90 bg-opacity-50 w-[100dvw]"
					onClick={onClose}
				></div>
			)}
		</section>
	);
};

export default SideSheet;
