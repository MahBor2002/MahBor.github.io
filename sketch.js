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
	lastUpdated();
	document.getElementsByClassName("submitBtn")[0].addEventListener("click", submitClicked);
}

function submitClicked() {
	alert("Your message has been sent.");
}

function lastUpdated() {
	let pageUpdated = new Date(document.lastModified);

	document.getElementById("last-updated-p").innerHTML = "Page last updated: " + pageUpdated;
}
