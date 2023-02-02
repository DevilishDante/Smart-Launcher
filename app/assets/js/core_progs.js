// var child = require('child_process').execFile;
// var executablePath = "./KeePassXC/KeePassXC.exe";
// var parameters = ["--incognito"];

// child(executablePath, parameters, function(err, data) {
//      console.log(err)
//      console.log(data.toString());
// });

function click_exec($path){
    var child = require('child_process').execFile;
    var executablePath = $path;
    child(executablePath, function(err, data) {
        if(err){
            window.alert.error(err);
            return;
        }
        console.log(data.toString());
    });
}