import { IPlayStepsProps } from "types/index";

const Step: React.FC<IPlayStepsProps> = ({ title, description }) => (
	<ul className="flex items-start space-x-4 animate-slide-in list-[square] marker:text-primary">
		<li className="flex-1 mb-5">
			<h3 className="text-light-gray mb-[15px]">{title}</h3>
			<p className="text-[#616161] text-sm font-light">{description}</p>
		</li>
	</ul>
);

const HowToPlay = () => (
	<div className="bg-primary-thin bg-opacity-10 rounded-xl px-6 py-12 outline outline-primary">
		<h2 className="text-black text-center mb-5">HOW TO PLAY</h2>
        <img src="/static-images/soccer.svg" alt="soccer representation" className="mx-auto mb-9"/>
		<div className="px-6">
			<Step
				title="Start a New Game"
				description="Tap the 'Start Game' button to begin a new game. You can also choose the difficulty level: Easy, Medium, or Hard"
			/>
			<Step
				title="Answer Questions"
				description="A series of football-related questions will appear on the screen. Read each question carefully and select the correct answer from the options provided"
			/>
			<Step
				title="Earn Points"
				description="Correct answers will earn you points based on the question's difficulty. The faster you answer, the more points you'll receive"
			/>
			<Step
				title="Achievements and Leaderboard"
				description="Complete achievements to earn special badges. Compete with other players and climb the leaderboard to show off your knowledge"
			/>
		</div>
	</div>
);

export default HowToPlay;
