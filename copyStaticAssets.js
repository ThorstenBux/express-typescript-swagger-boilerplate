var shell = require('shelljs');

shell.mkdir('-p','dist/config/swagger/');
shell.cp('-R', 'src/config/swagger/*', 'dist/config/swagger/');
