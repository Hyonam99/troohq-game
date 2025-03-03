import GameModeCard from "@components/game/GameModeCard";
import HowToPlay from "@components/game/HowToPlay";

const PlayMode = () => {
	return (
		<div className="min-h-screen w-full bg-dark-blue">
			<div className="mb-11">
				<p className="text-white mb-5">Hey Stella</p>
				<h2 className="text-lg">CHOOSE PLAY MODE</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="space-y-[26px]">
					<GameModeCard
						icon="/static-images/single-player.svg"
						title="SINGLE PLAYER MODE"
					/>
					<GameModeCard
						icon="/static-images/multi-player.svg"
						title="MULTI PLAYER MODE"
					/>
					<GameModeCard
						icon="/static-images/challenge-mode.svg"
						title="CHALLENGE MODE"
					/>

					<div className="relative bg-[#252b3c] rounded-xl p-7 text-center space-y-5 mt-[40px]">
						<img
							src="/static-images/female-avatar.svg"
							className="absolute top-8 left-7"
						/>
						<img
							src="/static-images/male-avatar.svg"
							className="absolute bottom-3 right-7"
						/>
						<div className="max-w-[240px] mx-auto flex flex-col gap-5 items-center py-18 xs:py-12">
							<h3 className="text-white font-normal">FEATURED</h3>
							<p className="text-white text-sm">
								Take part in challenges with friends or other
								players
							</p>
							<button className="btn-primary">
								Find Friends
							</button>
						</div>
					</div>
				</div>

				<HowToPlay />
			</div>
		</div>
	);
};

export default PlayMode;
