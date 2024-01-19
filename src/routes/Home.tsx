export default function Home() {
	return (
		<>
			<section className='grid-cols-2'>
				<div>
					<h1 className='headline'>
						Matthew
						<br />
						Sweet
					</h1>
					<p>
						I&apos;m a <strong>fullstack engineer</strong> with a
						passion for building dynamic web applications. I can
						work with your company as a <strong>full time</strong>{" "}
						developer or contract consultant. I bring to the table{" "}
						<strong>expertise</strong> on React, Vue, Sass,
						Tailwindcss, and API design.
					</p>
				</div>
				<div className='img-container'>
					<img src='/me_2.webp' alt='a beautifully styled computer' />
				</div>
			</section>
			<section className='home-content'>
				<p>
					I&apos;m one of the maintainers of{" "}
					<a
						href='https://opensource-socialnetwork.org'
						target='_blank'
					>
						Opensource Social Network
					</a>
					, a social media framework built on PHP and a co-owner of{" "}
					<a href='https://openteknik.com' target='_blank'>
						OpenTeknik
					</a>
					, the company who owns OSSN. I also completed an 8 month
					stint with{" "}
					<a href='https://www.dfnfreight.com/' target='_blank'>
						DFN Freight Network
					</a>
					, where I joined as the sole developer working directly with
					the CTO on building a Vue 3 application handling logistics
					for carriers and shippers. We eventually hired more
					developers, but for a while there it was 🎵 just the two of
					us 🎵.
				</p>
				<p>
					I&apos;m extremely flexible. If you need a full-time
					developer, I can do that. If you need a consultant to take a
					look at the project and determine what you need, I can do
					that too. Just need a quick contractor, say less. If
					it&apos;s Javascript or TypeScript, let&apos;s chat.
				</p>
			</section>
		</>
	);
}
