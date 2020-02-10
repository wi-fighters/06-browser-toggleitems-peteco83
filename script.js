(() => {
    const button = document.querySelector(".btn")

    let showDestination = true;

    const listGroup = document.querySelector(".list-group")
    
    listGroup.style.display = "none";

    const alertSuccess = document.querySelector(".alert-success");
    alertSuccess.style.display = "none";

    

    function toggle() {
        showDestination = !showDestination;
        button.innerHTML = showDestination ? "Show destinations" : "Hide destinations";
        showDestination ? listGroup.style.display = "none" : listGroup.style.display = "block";
    }

    function activeState(e) {
        alertSuccess.innerHTML = "You selected" + " " + e.target.innerHTML
        let listItem = document.querySelector(".active");
        listItem.classList.remove("active");
        e.target.classList.add("active"); 
        alertSuccess.style.display = "block";
        alertSuccess.style.marginTop = "20px"
    }


    const allListItems = [...document.querySelectorAll(".list-group-item")];
    console.log(allListItems);
    button.addEventListener("click", toggle);
    
    allListItems.forEach(element => {
        element.addEventListener("click", activeState);
    });
})();