export default function HireMe() {
	return (
		<>
			<main className='about'>
				<h1 className='headline'>Hire Me</h1>
			</main>
			<section className='artwork'>
				<img src='/me_2.webp' alt='a beautifully styled computer' />
			</section>
			<section className='content' role='experience'>
				<p>
					I have been a developer for over 10 years now, focusing most
					of my experience on Upwork as a contractor. From there, I
					delivered a consistent 4.5 star and up rating from my
					clients. From writing unit and integration tests, to working
					with CTO&apos;s on the path to MVP, I bring with me solid
					feedback and experience.
				</p>
				<p>I can help you with:</p>
				<ul>
					<li>
						<strong>End-to-end development:</strong> As a fullstack
						engineer, I bring seemless integration between the
						frontend and the backend to bring your ideas to life.
						Startups welcome.
					</li>
					<li>
						<strong>UI/UX:</strong> I can craft pixel-perfect user
						interfaces with a keen eye for design, ensuring an
						exceptional and intuitive user experience. I have worked
						with Tailwindcss, Bootstrap, Bulma, Sass, and pure CSS.
					</li>
					<li>
						<strong>Consultation:</strong> Need an idea of where to
						go, what tools to use, how many developers you&apos;ll
						need, or how many hours a project will take? Look no
						further.
					</li>
					<li>
						<strong>Testing and QA:</strong> I can implement
						rigorous testing practices using tools like Jest and
						Cypress, ensuring robust and bug-free applications for a
						reliable user experience
					</li>
				</ul>
				<p>
					If this sounds like your kind of party,{" "}
					<a href='mailto:sweet@openteknik.com'>send me an email!</a>
				</p>
			</section>
		</>
	);
}
