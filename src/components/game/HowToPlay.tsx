import { howToPlaySteps } from "data/static-data";
import { IPlayStepsProps } from "types/index";

const Step: React.FC<IPlayStepsProps> = ({ title, description }) => (
	<ul className="flex items-start space-x-4 animate-slide-in list-[square] marker:text-primary">
		<li className="flex-1 mb-5">
			<h3 className="text-light-gray mb-[15px]">{title}</h3>
			{description.map((description, i) => (
				<p key={i + 1} className="text-[#616161] text-sm font-light mb-[15px]">
					{description}
				</p>
			))}
		</li>
	</ul>
);

const HowToPlay = () => (
	<div className="bg-primary-thin bg-opacity-10 rounded-xl px-6 py-12 outline outline-primary">
		<h2 className="text-black text-center mb-5">HOW TO PLAY</h2>
		<img
			src="/static-images/soccer.svg"
			alt="soccer representation"
			className="mx-auto mb-9"
		/>
		<div className="px-6">
			{howToPlaySteps.map((eachStep) => (
				<Step
					key={eachStep.step}
					title={eachStep.step}
					description={eachStep.description}
				/>
			))}
		</div>
	</div>
);

export default HowToPlay;
