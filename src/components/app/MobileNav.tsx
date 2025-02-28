import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideSheet from "./SlideSheet";
import Logo from "./Logo";

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="lg:hidden flex items-center justify-between p-4 bg-sidebar">
			<Logo />
			<button className="text-white" onClick={() => setIsOpen(true)}>
				<CiMenuBurger size={24} />
			</button>

			<SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
};

export default MobileNav;
