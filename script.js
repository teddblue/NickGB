var NickGB = document.getElementById('NickGB');
var Screen = document.createElement('canvas');
Screen.id = "Screen"
Screen.width = 160
Screen.height = 144
NickGB.appendChild(Screen);
var Pen = Screen.getContext('2d');
Pen.fillStyle = 'RGB(0, 0, 0)'
Pen.fillRect(0, 0, 160, 144);
async function getJSON(path) {
	request = new Request(path);
	response = await fetch(request);
	content = await response.json();
	return content
}
const Opcodes = getJSON('./Opcodes.json');