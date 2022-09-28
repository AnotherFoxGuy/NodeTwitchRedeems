var fs = require('fs');


var dir = './dist/actions';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
}

fs.cpSync("publicDashboard", 'dist/publicDashboard', {recursive: true});
fs.cpSync("publicRedeemsLeaderboard", 'dist/publicRedeemsLeaderboard', {recursive: true});