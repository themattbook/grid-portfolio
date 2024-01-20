interface ResumeData {
	title: string;
	date: string;
	description: string;
	technologies: string;
}

export default function ResumeEntry({
	title,
	date,
	description,
	technologies,
}: ResumeData) {
	return (
		<div>
			<h1 className='resume-title'>{title}</h1>
			<div>{date}</div>
			<div className='resume-description'>
				<p>{description}</p>
			</div>
			<div className='resume-technology'>
				<p>Technology used: {technologies}</p>
			</div>
		</div>
	);
}
