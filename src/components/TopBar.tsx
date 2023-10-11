import UserMenu from './UserMenu';
type TopBarProperties = {
	contact?: boolean;
	navHint?: string;
	menu?: boolean;
}

const TopBar:React.FC<TopBarProperties> = ({contact=true, navHint='', menu=true}) => {
	return (
		<div className="top-bar flex-row flex--align-center">
			{contact && 
				<div>Contact the webadmin at <a href="mailto:austenstrine@gmail.com">austenstrine@gmail.com</a></div>
			}
			{navHint && 
				<div>{navHint}</div>
			}
			{menu && 
				<UserMenu/>
			}
		</div>
	)
}

export default TopBar