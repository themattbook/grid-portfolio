export default function About() {
	return (
		<>
			<section className='grid-cols-2'>
				<div className='headline-container'>
					<h1 className='headline'>About Me</h1>
				</div>
				<div className='img-container'>
					<img
						src='/layout.svg'
						alt='a man contemplating the layout of a website'
					/>
				</div>
			</section>
			<section className='content' role='experience'>
				<h3>DFN Freight Network</h3>
				<p>
					My most recent work was with{" "}
					<a href='https://www.dfnfreight.com/' target='_blank'>
						DFN Freight Network
					</a>
					, a Canadian digital freight broker. There&apos;s a lot to
					moving freight from one place to another and this was quite
					a learning experience.
				</p>
				<p>
					So you need a truck? What kind of truck? Does it need to be
					a large truck, a small truck, refrigerated (called a
					"reefer" truck), not reefer? So many questions, so little
					time. Once you&apos;ve figured out the kind of truck you
					need, it&apos;s time to find a freight broker. They&apos;re
					the folks who handle the topics such as "how much?" and "who
					gets to bid?" - after which, a carrier company bids on the
					load.
				</p>
				<p>
					DFNX takes the middle-man out of the equation and gives both
					carriers and shippers complete oversight regarding the
					shipment.
				</p>
				<p>
					We elected to use Vue 3, Pinia, TypeScript, and a custom
					backend in Next.js/Prisma. I worked with a Figma render and
					did my best to develop as much as I could. I had a lot to
					learn on this project and my CTO was incredibly patient with
					me. Vue 3 is an incredible framework.
				</p>
				<h3>Tornado Trax</h3>
				<p>
					Suffice it to say, I&apos;m a big meteorology nerd. I
					frappin' love tornadoes. No, not their destruction and no,
					not the trauma they have been known to cause, but the event
					itself. I love learning about how tornadoes work; their
					mystery, the different shapes and sizes, all of it.
				</p>
				<p>
					I created an application that allows you, the user, to
					select a year and a state. From there,{" "}
					<a href='https://tornadotrax.vercel.app/' target='_blank'>
						Tornado Trax
					</a>{" "}
					will show you the complete path of the tornado superimposed
					on a map. The tracks are color-coded by severity and
					clicking on one reveals a popup with information about the
					tornado. Written in Vue 3 and riddled with Tailwindcss bugs,
					I&apos; planning to move it to React and use Sass for
					styling.
				</p>
				<h3>Codename: Uproar</h3>
				<p>
					As a co-owner of OpenTeknik, the company behind Open Source
					Social Network, I set out on ways to add more products to
					our portfolio. One of the ideas I had was a Javascript take
					on social media. Since we are a social media company, I
					wanted to diversify the experience by lending something that
					was built on Javascript instead of PHP and took on a more
					Twitter-esque vibe over Facebook. It&apos;s called{" "}
					<a
						href='https://social-network-beta-snowy.vercel.app/'
						target='_blank'
					>
						Uproar
					</a>{" "}
					for now, but that name will likely change in the future.
				</p>
			</section>
		</>
	);
}
