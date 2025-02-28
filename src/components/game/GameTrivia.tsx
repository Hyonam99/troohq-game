
const GameTrivia = () => {
  return (
		<div className="flex flex-col items-center gap-2 bg-white rounded-3xl p-4 mt-7">
			<h3 className="text-light-gray font-normal text-center">Trivia of the day</h3>
			<p className="text-[#6161618F] text-sm mb-4 text-center">
				Take part in challenges with friends or other players
			</p>
			<button className="btn-primary w-full">
				Play Trivia
			</button>
		</div>
  );
}

export default GameTrivia
