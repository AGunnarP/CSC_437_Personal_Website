const button = document.getElementById("menu_button");
const links_container = document.getElementById("Links_Container");
const main = document.getElementsByTagName("main")[0];
const body = document.getElementsByTagName("body")[0];
const toggle = document.getElementById("Light_Mode_Toggle");


class ThemeController extends HTMLElement {
    connectedCallback() {

        console.log("Calling back!");
        const isDark = localStorage.getItem('dark_mode') === 'true';
        if(isDark)
            document.body.className = "";
        else
            document.body.className = "alternate_body";

        if(isDark && toggle)
            toggle.checked = false;
        else
            toggle.checked = true;

    }
  }
  
  customElements.define('theme-controller', ThemeController);

button.addEventListener("click", () => {
    
    if(links_container.className === "Links_Container")
        links_container.className = "toggled_Links_Container";
    else
        links_container.className = "Links_Container";

  });

main.addEventListener("click", () => {

    if(links_container.className === "toggled_Links_Container")
        links_container.className = "Links_Container";

});

if(toggle)
    toggle.addEventListener("click", () => {

        console.log("Toggle was clicked!");

        if(body.className === "alternate_body"){

            body.className = "";
            localStorage.setItem("dark_mode", "true");

        }
            
        else{

            body.className = "alternate_body";
            localStorage.setItem("dark_mode", "false");
        }

    })


