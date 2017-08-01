
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomColor(){
	let col = Math.round(255.0*Math.random());
	let r = col.toString(16);
	col = Math.round(255.0*Math.random());
	let g=col.toString(16);
	col = Math.round(255.0*Math.random());
	let d=col.toString(16);
	return r+g+d;
};

function replacementMyText(text, name, myText){
	let temp = text;
	let color = randomColor();
	do {
		text = temp;
		temp = temp.replace(name, "<font style='color: #"+color+"'>"+myText+"</font>");
	} while (temp.localeCompare(text) !== 0);
	return text;
};

function inputTextToSpeech(text,id){
    let btn = "<div class='fa fa-play btn-play bp' id=\""+id+"p\" onClick='onPlay(this, \""+id+"s\",\"{}\");'> </div>"+
    	"<div class='fa fa-stop none bs' id=\""+id+"s\" onClick='onStop(this, \""+id+"p\")'> </div>";
	btn = btn.replace("{}", text.replace(/<\/?[^>]+>/g,''));
    return btn;
};

export { replacementMyText, inputTextToSpeech, getRandomInt, randomColor };