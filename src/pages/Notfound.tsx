const PageNotFound = () => {
	return (
		<section className="min-h-[calc(100dvh-202px)] max-w-[90dvw] mx-auto flex flex-col items-center justify-center">
			<h2 className="text-center text-2xl font-semibold mb-3">
				Page Not Found
			</h2>
			<p>The Page you are trying to access does not exist.</p>
		</section>
	);
};

export default PageNotFound;
