import TopBar from './TopBar';

type HeaderProperties = {
	title?: string;
}

const Header:React.FC<HeaderProperties> = ({title}) => {
	return (
		<header>
			<TopBar navHint='Welcome!'/>
			<h1>
				{title}
			</h1>
			
		</header>
	)
}

export default Header