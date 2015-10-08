module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'dist',
					keepalive: true,
					open: {
						target: 'http://localhost:9001'
					}
				}
			}
		}
	});

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect']);
};