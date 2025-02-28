import MobileNav from "@components/app/MobileNav";
import Sidebar from "@components/app/SideBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<section className="flex flex-col lg:flex-row h-screen">
			<Sidebar />
			<MobileNav />
			<main
				className={`h-screen overflow-y-scroll w-full p-6`}
			>
				<Outlet />
			</main>
		</section>
	);
};

export default AppLayout;
