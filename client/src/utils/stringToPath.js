const testString = 'endpoint[0].parameters[0]';

const stringToPath = (path) => {

	// If the path isn't a string, return it
	if (typeof path !== 'string') return path;

	// Create new array
    let output = [];
    
	// Split to an array with dot notation
	path.split('.').forEach(function (item, index) {

		// Split to an array with bracket notation
		item.split(/\[([^}]+)\]/g).forEach(function (key) {

			// Push to the new array
			if (key.length > 0) {
				output.push(key);
			}

		});

    });
    
    return output;

};

console.log(stringToPath(testString));
export default stringToPath;