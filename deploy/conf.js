const execSync = require('child_process').execSync;
const fs = require('fs');

const exec = (cmd) => execSync(cmd, {stdio:[0,1,2]});

const readJSON = (filename) => JSON.parse(fs.readFileSync(filename));
const writeJSON = (filename, content) => fs.writeFileSync(filename, JSON.stringify(content));

const projectMapping = {
    F: 'AFL_RU'
};


const projectKey = process.argv[2].toUpperCase();
    if (!projectMapping[projectKey]) {
        return console.log('Only these values allowed: ', Object.keys(projectMapping).join(' '));
}


const projectName = projectMapping[projectKey];

const path = __dirname+'/templates/'+projectName+'/';

let config = readJSON(path+projectName+'.config.json');

exec(`cp ${path+projectName}.manifest.json src/manifest.json`);
exec(`cp -r ${path}/icons/* src/assets/icons`);

exec(`cp ${path+projectName}.variables.scss src/theme/variables.scss`);


if (process.argv[3] != '-p'){
    config.HOSTS.API = 'http://localhost:3000/m2-api';
    config.HOSTS.LOCAL = 'http://localhost:4200';
}

writeJSON('src/app.config.json',  config);


console.log(projectName, 'DONE');

