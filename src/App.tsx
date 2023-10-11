import Header from './components/Header';

function App() {
	const name:string = 'Austen The Magnificently Goofy';

	return (
		<div className="container">
			<Header title={name}/>
			<div>More elements</div>
		</div>
	);
}

export default App;
