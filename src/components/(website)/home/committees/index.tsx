import Image from "next/image";
const officers = ["1. JAE.png"];
const Committees: React.FC = () => {
	return (
		<section id="committees" className="h-screen">
			<h2 className="">Committees</h2>
			<h3>Executives</h3>
			{officers.map((officer, index) => {
				return (
					<div key={index} className="relative h-16 w-32">
						<Image
							src={`/media/img/officers/execs/${officer}`}
							alt="FEU Tech ACM Logo"
							layout={"fill"}
							objectFit={"contain"}
						></Image>
					</div>
				);
			})}
			<h3>Marketing</h3>
			<h3>Publicity</h3>
		</section>
	);
};

export default Committees;

// https://stackoverflow.com/questions/64922587/import-multiple-images-on-react/64922680#64922680
// const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg"];
