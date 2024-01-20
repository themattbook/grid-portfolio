import ResumeEntry from "../components/ResumeEntry";

export default function Resume() {
	return (
		<>
			<section className='grid-cols-2'>
				<div className='headline-container'>
					<h1 className='headline'>My Resume</h1>
				</div>
				<div className='img-container'>
					<img
						src='/resume.svg'
						alt='a man standing in front of a large web browser of code'
					/>
				</div>
			</section>
			<section className='content' role='experience'>
				<p>
					I won&apos;t be cruel and expect you to read this entire
					thing, but I&apos;m sure someone might eventually. I&apos;ll
					provide a written copy here in text, but also provide my
					resume in <a href='/matt_sweet_resume.pdf'>.pdf</a> and{" "}
					<a href='/matt_sweet_resume.docx'>.docx</a> format for your
					leisure. Yes, recruiters, that&apos;s for you.
				</p>
				<ResumeEntry
					title='DFN Freight Network'
					date='September 2022 - May 2023'
					description='As a Frontend Developer, I was brought into the company as a contractor to build a functional frontend SPA from scratch, working with the company CTO in determining the technology and methodology used to carry a product to MVP. 100% startup environment.'
					technologies='TypeScript, Vue 3, Pinia, Cognito, Express, Tailwindcss'
				/>
				<ResumeEntry
					title='OpenTeknik'
					date='August 2019 - Present'
					description='As a Fullstack Developer, I worked with the creators of Open Source Social Network to improve their company website as well as a social media framework client for customers. Maintainer of Opensource Social Network.'
					technologies='Javascript, React, Redux, PHP, OSSN'
				/>
				<ResumeEntry
					title='GetBusy'
					date='January 2016 - August 2019'
					description='Designed and co-developed a social media automation platform using Open Source Social Network, React, Node, Express, Bootstrap, HTML/CSS, and more using Agile methodology to take the product from conception to production.'
					technologies='MySQL, PHP, JavaScript, React, Front-End Development, HTML'
				/>
				<ResumeEntry
					title='Freelance'
					date='March 2008 - Present'
					description='As a Freelance Web Developer with over 15 years of experience based in Davenport, Iowa, I have been instrumental in leading the design and development of a wide array of web projects for diverse clients. My expertise spans HTML, CSS, Javascript, Vue, and ReactJS, allowing me to spearhead initiatives such as creating an interactive e-commerce site with React and Node.js that boosted online sales by 30%. I collaborated with a digital marketing firm to develop a real-time data visualization dashboard and engineered a responsive appointment management platform for a healthcare client using Vue & Firebase, reducing administrative tasks by 20%.'
					technologies='JavaScript, React, Nextjs, Front-End Development, HTML CSS, Sass, Node.js, Vue, Tailwindcss, Bootstrap'
				/>
			</section>
		</>
	);
}
