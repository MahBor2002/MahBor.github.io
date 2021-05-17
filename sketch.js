let firstNames = [];
let lastNames = [];
let countries = [];
let subjects = [];

if (document.readyState == "loading") {
	document.addEventListener("DomContentLoaded", Ready);
} else {
	Ready();
}

function Ready() {
	document.getElementsByClassName("submitBtn")[0].addEventListener("click", submitClicked);

}

function submitClicked() {
	alert("Your message has been sent.");
}
