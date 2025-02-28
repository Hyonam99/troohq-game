import { IGameModeProps } from "types/index";


const GameModeCard: React.FC<IGameModeProps> = ({ icon, title }) => (
	<div className="group w-full bg-primary-thin rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer animate-fade-in outline outline-primary">
		<div className="flex flex-col min-[300px]:flex-row gap-4 justify-center min-[300px]:justify-normal items-center">
			<img src={icon} alt={title} className="" />
			<span className="text-light-gray text-sm text-center min-[300px]:text-left">
				{title}
			</span>
		</div>
	</div>
);

export default GameModeCard;
