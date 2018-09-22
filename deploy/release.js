const execSync = require('child_process').execSync;
const fs = require('fs');
const rl =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const exec = (cmd) => execSync(cmd, {stdio:[0,1,2]});
const readJSON = (filename) => JSON.parse(fs.readFileSync(filename));
const writeJSON = (filename, content) => fs.writeFileSync(filename, JSON.stringify(content));

const currentVersion = JSON.parse(fs.readFileSync(__dirname+'/version.json')).APP;

rl.question(`Release version: (current is ${currentVersion})`, (version) => {

    rl.close();

    fs.writeFileSync(__dirname+'/version.json', JSON.stringify({APP: version}));

    fs.readdirSync(__dirname+'/templates').forEach(projectName => {
        console.log(`\n processing project ${projectName}... \n`);

        const path = __dirname+'/templates/'+projectName+'/';

        let config = readJSON(path+projectName+'.config.json');
        config.APP_VERSION = version;

        exec(`cp ${path+projectName}.manifest.json src/manifest.json`);
        exec(`cp ${path+projectName}.variables.scss src/theme/variables.scss`);
        exec(`cp -r ${path}/icons/* src/assets/icons`);
        writeJSON('src/app.config.json',  config);


        exec(`ng build --prod --build-optimizer --base-href=${config.HOSTS.LOCAL}`);

        exec(`zip -r www.zip www`);

        exec(`ssh afl "rm -f /var/afl/www.zip" && scp www.zip afl:/var/afl`);

        console.log(`\n ${projectName}: starting upload... \n`);

        exec(`ssh afl "rm -rf /var/afl/${projectName} && unzip -o /var/afl/www.zip -d /var/afl/${projectName}"`);

    });

});


