const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'debug.log');

class FileLogger {
	log(logMessage : string) {
		const timestamp = new Date().toISOString();
		const formattedLog = `${timestamp}: ${logMessage}\n`;
		
		fs.appendFile(logFilePath, formattedLog, (err: any) => {
			if (err) {
				console.error('Error writing to log file:', err);
			}
		});
	}
}

export default FileLogger;
