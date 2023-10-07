const Error404 = () => {
	return (
		<div className=" h-screen w-screen flex flex-col justify-center items-center text-center">
			<h1>This is an easter egg</h1>
			<p>🚧 The website is under development 🚧</p>
			<p>
				For site or project inquiries, contact the{" "}
				<a href="mailto:acm.feu.it@gmail.com" className="underline">
					FEU Tech ACM
				</a>{" "}
				or the{" "}
				<a href="mailto:202211383@fit.edu.ph" className="underline">
					Webmaster
				</a>
			</p>
		</div>
	);
};

export default Error404;
