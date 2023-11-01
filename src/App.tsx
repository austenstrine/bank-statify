import Header from './components/Header';
// import User from './db/entity/User';

function App() {
	const name:string = 'Austen The Magnificently Goofy';
	// const newUser = User.create({username : 'austenlorenstrine', email:'austenstrine@gmail.com'});
	// newUser.save();

	return (
		<div className="container">
			<Header title={name}/>
			<div>More elements</div>
		</div>
	);
}

export default App;
