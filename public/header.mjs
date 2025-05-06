const button = document.getElementById("menu_button");
const links_container = document.getElementById("Links_Container");
const main = document.getElementsByTagName("main")[0];



button.addEventListener("click", () => {
    
    if(links_container.className === "Links_Container")
        links_container.className = "toggled_Links_Container";
    else
        links_container.className = "Links_Container";

  });

main.addEventListener("click", () => {

    console.log("Main was clicked");

    if(links_container.className === "toggled_Links_Container")
        links_container.className = "Links_Container";

  });
