function updateTabContent() {
    for (let item of document.getElementsByClassName("services-content")) {
        item.hidden = true;
    }
    for (let tab of document.getElementsByClassName("navbar-services")[0].children) {
        if (tab.classList.contains("focus")) {
            document.getElementsByClassName(tab.innerHTML.toLowerCase().replace(" ", "-"))[0].hidden = false;
        }
    }
}

updateTabContent();

document.getElementsByClassName("navbar-services")[0].onclick = function (event) {
    document.getElementsByClassName("focus")[0].classList.remove("focus");
    event.target.classList.add("focus");
    updateTabContent()
};

document.getElementsByClassName("amazingwork-img")[0].onclick = function (event) {
    console.log(event.target.parentElement)
};

