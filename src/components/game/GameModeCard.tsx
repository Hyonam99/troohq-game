import { IGameModeProps } from "../../types";

const GameModeCard: React.FC<IGameModeProps> = ({ icon, title }) => (
	<div className="group w-full bg-primary-thin rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer animate-fade-in outline outline-primary">
		<div className="flex items-center space-x-4">
			<img src={icon} alt={title} className="" />
			<span className="text-light-gray text-sm">{title}</span>
		</div>
	</div>
);

export default GameModeCard;
