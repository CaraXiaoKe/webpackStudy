var data = require("./data.json");
import "./main.css";
import styles from "./main.css";
console.log(JSON.stringify(data,undefined,"\t"));
console.log(styles);
module.exports = function(){
	var hello = document.createElement('div');
	hello.setAttribute("class",styles.root);
	hello.textContent = "Hello222222 "+data.name;
	return hello;
}