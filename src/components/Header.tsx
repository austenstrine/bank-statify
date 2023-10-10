type HeaderProperties = {
	title?: string;
}

const Header:React.FC<HeaderProperties> = ({title = 'Bankstatify - Power your Statements'}) => {
	return (
		<header>
			<h1>
				{title}
			</h1>
		</header>
	)
}

export default Header