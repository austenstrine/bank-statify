import { useEffect } from 'react';
import Header from './components/Header';
import User from './db/entity/User';
import { PostgresDB } from './db/DataSources';

function App() {
	const name:string = 'Austen The Magnificently Goofy';
	useEffect(()=>{
		console.log('getting postgres');
		const postgres = PostgresDB;
		console.log('initializing postgres');
		postgres.initialize().then(()=>{
			console.log('starting application');
			const newUser = User.create({username : 'austenlorenstrine', email:'austenstrine@gmail.com'});
			newUser.save();
		});
	})

	return (
		<div className="container">
			<Header title={name}/>
			<div>More elements</div>
		</div>
	);
}

export default App;
