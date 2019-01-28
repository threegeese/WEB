var fs = require('fs');
var dirName = process.argv[2];

var htmlContants = "<!DOCTYPE><title>Hello</title><h1>Hi</h1>";
var cssContants = "h1{color: red;}";
var jsContants = "var string = \"Hello World\";alert(string)";

if (fs.existsSync(dirName)){
    console.log("Directory " + dirName + " already exists!");
}else{
    fs.mkdirSync("./" + dirName);      
    process.chdir("./" + dirName);     
    fs.mkdirSync('css');             
    fs.mkdirSync('js');                

    fs.writeFileSync("./index.html", htmlContants);
    fs.writeFileSync("css/style.css", cssContants);
    fs.writeFileSync("./js/main.js", jsContants);
}
process.exit(0);
