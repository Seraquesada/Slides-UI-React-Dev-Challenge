import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-5 px-3 pt-6 lg:px-[50px]">
			<Image
				src={'/menu.svg'}
				alt="menu"
				width={28}
				height={22}
				className="mr-3 cursor-pointer self-end"
			/>
			<section className="grid w-full  gap-6 lg:px-3  ">
				<div className="md:col-start-1 md:col-end-2 md:place-self-center  lg:w-[593px]">
					<h2 className="pb-2.5 text-center  text-xs md:text-start md:text-sm">
						A B O U T — P E R S O N A L
					</h2>
					<h1 className="pb-6 text-center text-3xl md:text-start md:text-5xl">
						¡Hello!{' '}
						<span className="font-bold">I’m Angela Smith</span>
					</h1>
					<h3 className="text-center font-light md:pb-8 md:text-start">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</h3>
					<button className="row-start-3 hidden w-full items-center justify-center gap-2 rounded-[10px] bg-black py-3.5 text-white md:row-start-1 md:flex md:w-1/3">
						Get started
						<Image
							src={'/Vector.svg'}
							alt="arrow"
							height={10}
							width={11}
						/>
					</button>
				</div>
				<button className="row-start-3 flex w-full items-center justify-center gap-2 rounded-[10px] bg-black py-3.5 text-white md:row-start-1 md:hidden md:w-1/3">
					Get started
					<Image
						src={'/Vector.svg'}
						alt="arrow"
						height={10}
						width={11}
					/>
				</button>
				<Image
					src={'/images/image.jpg'}
					alt="angela"
					width={673}
					height={740}
					quality={100}
					priority
					className=" lg:h-540 lg:w-360 md:col-start-2 2xl:h-[740px] 2xl:w-[673px] "
				/>

				<Image
					src={'/logo.svg'}
					alt="logo"
					width={36}
					height={36}
					className="row-start-4 place-self-center md:place-self-start md:col-start-2 md:row-start-2"
				/>
			</section>
		</main>
	)
}
