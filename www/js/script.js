var language = "en";
// codebase requires reform
function additionalmenu(){
	document.getElementById("inilink2").style.display = "inline-block";
	document.getElementById("inilink1").style.display = "none";
}

function opentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById("eduprompt").style.display = "none";
	document.getElementById(a).style.display = "block";

	document.getElementById("inilink").style.display = "inline-block";
	document.getElementById("frontboard").style.display = "none";
}

function aopentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById("eduprompt").style.display = "none";
	document.getElementById(a).style.display = "block";
	document.getElementById("inilink2").style.display = "inline-block";
	document.getElementById("inilink1").style.display = "none";
	if(a == "menu1")
		document.getElementById("descbar").innerHTML="Pure Science";
	if(a == "menu2")
		document.getElementById("descbar").innerHTML="Account";
	if(a == "menu3")
		document.getElementById("descbar").innerHTML="Islamic Studies";
	if(a == "menu4")
		document.getElementById("descbar").innerHTML="Additionals";
}

<<<<<<< HEAD:www/js/script.js
// THEMES
function purpl(){
	document.body.style.setProperty("--prm", "#e400fd");
	document.body.style.setProperty("--sec", "#5e17ed");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--fsc", "#ffffff");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--txt", "rgba(0,0,0,.4)");
	document.body.style.setProperty("--bgi", "url('purpl.png')");
	localStorage.setItem("theme", "purpl");
}
function pynk(){
	document.body.style.setProperty("--prm", "#ffa5b8");
	document.body.style.setProperty("--sec", "#f52b8f");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--fsc", "#ffffff");
	document.body.style.setProperty("--hvr", "#333333");
	document.body.style.setProperty("--txt", "rgba(0,0,0,.4)");
	document.body.style.setProperty("--bgi", "url('pynk.png')");
	localStorage.setItem("theme", "pynk");
}
function goldy(){
	document.body.style.setProperty("--prm", "#ca9c16");
	document.body.style.setProperty("--sec", "#faed33");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--fsc", "#000000");
	document.body.style.setProperty("--hvr", "#333333");
	document.body.style.setProperty("--txt", "rgba(0,0,0,.4)");
	document.body.style.setProperty("--bgi", "url('goldy.png')");
	localStorage.setItem("theme", "goldy");
}
function mynt(){
	document.body.style.setProperty("--prm", "#000000");
	document.body.style.setProperty("--sec", "#00ffc2");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--fsc", "#000000");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--txt", "rgba(0,0,0,.4)");
	document.body.style.setProperty("--bgi", "url('mynt.png')");
	localStorage.setItem("theme", "mynt");
}

if(!localStorage.getItem("theme")){
	purpl();
}if(localStorage.getItem("theme") == "purpl"){
	purpl();
}else if(localStorage.getItem("theme") == "goldy"){
	goldy();
}else if(localStorage.getItem("theme") == "mynt"){
	mynt();
}else if(localStorage.getItem("theme") == "pynk"){
	pynk();
}

// LEGACY THEME
function pink(){
	document.body.style.setProperty("--prm", "#ffa5b8");
	document.body.style.setProperty("--sec", "#f52b8f");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#333333");
	document.body.style.setProperty("--bgi", "url('pink.png')");
	localStorage.setItem("theme", "pink");
}
function blue(){
	document.body.style.setProperty("--prm", "#05445E");
	document.body.style.setProperty("--sec", "#5bb4aa");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--bgi", "url('blue.png')");
	localStorage.setItem("theme", "blue");
}
function gold(){
	document.body.style.setProperty("--prm", "#ca9c16");
	document.body.style.setProperty("--sec", "#faed33");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#333333");
	document.body.style.setProperty("--bgi", "url('gold.png')");
	localStorage.setItem("theme", "gold");
}
function mint(){
	document.body.style.setProperty("--prm", "#000000");
	document.body.style.setProperty("--sec", "#00ffc2");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--bgi", "url('mint.png')");
	localStorage.setItem("theme", "mint");
}
=======
>>>>>>> main:www/script.js
function testopen(){
	if(localStorage.getItem('openmenu') == 1){
		opentab('menu1')
	}
	if(localStorage.getItem('openmenu') == 2){
		opentab('menu2')
	}
<<<<<<< HEAD:www/js/script.js
}
=======
}

// THEMES
function themeSwitch(yPrm, ySec, yFnt, yFsc, yHvr, yBgi, yTheme)
{
	document.body.style.setProperty("--prm", yPrm);
	document.body.style.setProperty("--sec", ySec);
	document.body.style.setProperty("--fnt", yFnt);
	document.body.style.setProperty("--fsc", yFsc);
	document.body.style.setProperty("--hvr", yHvr);
	document.body.style.setProperty("--bgi", yBgi);
	localStorage.setItem("theme", yTheme);
}

function plum(){
	themeSwitch("#e400fd", "#5e17ed", "#ffffff", "#ffffff", "#d4f1f4", "url('./plum.png')", "plum");
}

function pink(){
	themeSwitch("#ffa5b8", "#f52b8f", "#ffffff", "#ffffff", "#333333", "url('./pink.png')", "pink");
}

function gold(){
	themeSwitch("#ca9c16", "#faed33", "#ffffff", "#000000", "#333333", "url('./gold.png')", "gold");
}

function mynt(){
	themeSwitch("#000000", "#00ffc2", "#ffffff", "#000000", "#d4f1f4", "url('./mynt.png')", "mynt");
}

function oldBlue(){
	themeSwitch("#05445E", "#5bb4aa", "#ffffff", null, "#d4f1f4", "url('legacy/old_blue.png')", "oldBlue");
}

function oldGold(){
	themeSwitch("#ca9c16", "#faed33", "#ffffff", null, "#333333", "url('legacy/old_gold.png')", "oldGold");
}

function oldMint(){
	themeSwitch("#000000", "#00ffc2", "#ffffff", null, "#d4f1f4", "url('legacy/old_mint.png')", "oldMint");
}

function oldPink(){
	themeSwitch("#ffa5b8", "#f52b8f", "#ffffff", null, "#333333", "url('legacy/old_pink.png')", "oldPink");
}


switch (localStorage.getItem("theme")) {
	case "plum":
		plum();
		break;

	case "gold":
		gold();
		break;

	case "pink":
		pink();
		break;

	case "mynt":
		mynt();
		break;

	case "oldBlue":
		oldBlue();
		break;

	case "oldGold":
		oldGold();
		break;

	case "oldPink":
		oldPink();
		break;

	case "oldMint":
		oldMint();
		break;

	default:
		plum();
		break;
}
>>>>>>> main:www/script.js
