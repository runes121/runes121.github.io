const parameters = new URLSearchParams(window.location.search)
const shouldShowButton = parameters.get("showButton")

if (shouldShowButton == false) {
    document.getElementById("mainsitebtn").remove();
}