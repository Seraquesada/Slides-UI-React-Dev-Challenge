import Image from "next/image";


export default function Home() {
	return (
			<main className="px-3 gap-5 py-6 flex flex-col items-center ">
				<Image
					src={"/menu.svg"}
					alt="menu"
					width={28}
					height={22}
					className="self-end mr-3 cursor-pointer"
				/>
				<div className="flex flex-col">
					<div className="flex flex-col gap-2">
						<h2 className="font-normal text-xs text-center w-full"> A B O U T — P E R S O N A L</h2>
						<h1 className="font-normal text-3xl text-center w-full">¡Hello! <span className="font-bold">I’m Angela Smith</span></h1>
						<h3 className="font-light text-center w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h3>
					</div>

				</div>

			</main>
	);
}
