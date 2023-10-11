import { MouseEventHandler } from 'react';
type UserMenuProperties = {
	user?: UserData;
}

type UserData = {
	id:number;
	firstName:string;
	lastName:string;
	phoneNumber:string;
	email:string;
}

const UserMenu:React.FC<UserMenuProperties> = ({user}) => {
	const toggleMenu:MouseEventHandler<HTMLElement> = (event)=>{
		const target = event?.target as HTMLElement;
		const userMenu = target?.parentNode?.querySelector('.user-menu');
		if(userMenu && userMenu.classList.contains('collapsed')) {
			userMenu.classList.remove('collapsed');
			userMenu.classList.add('expanded');
		}
		else if(userMenu && userMenu.classList.contains('expanded')) {
			userMenu.classList.remove('expanded');
			userMenu.classList.add('collapsed');
		}
	};
	return (
		<div style={{position:'relative'}}>
			<button className="user-menu-toggle" onClick={toggleMenu}>
				Menu
			</button>
			<ul className="user-menu left collapsed flex-column flex--align-start flex--justify-start">
				{user && 
					<li>Profile</li>
				}
				{user && 
					<li>Log Out</li>
				}
				{!user && 
					<li>Log In</li>
				}
			</ul>
		</div>
	)
}

export default UserMenu