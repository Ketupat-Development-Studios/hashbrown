var loginButton = document.querySelectorAll("input[type='submit'],button[type='submit']")[0];
var pwd = document.querySelectorAll("input[type='password']")[0];

loginButton.addEventListener("click", handleLogin);

function handleLogin(){
	var raw = pwd.value;
	var domain = window.location.hostname;
	pwd.value = CryptoJS.SHA1(raw+domain);
}