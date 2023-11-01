import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostgresDB } from './db/DataSources';

async function start(){
	console.log('getting postgres');
	const postgres = PostgresDB;
	console.log('initializing postgres');
	await postgres.initialize();
	console.log('starting application');
	if(postgres.isInitialized) {
		const root = ReactDOM.createRoot(
			document.getElementById('root') as HTMLElement
		);
		root.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
		
		// If you want to start measuring performance in your app, pass a function
		// to log results (for example: reportWebVitals(console.log))
		// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
		reportWebVitals();
	}
	else {
		console.log('Error: Postgres failed to initialize!');
	}
}
start();
