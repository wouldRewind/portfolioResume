import $ from "jquery";
const titles : Array<HTMLTitleElement> = Array.from(
    document.querySelectorAll(".title")
)
const menu : HTMLElement = document.getElementById("menu");

const sections : Array<HTMLElement> = Array.from(document.querySelectorAll("section:not(.no-pad)"))


export function insertMenu() : void {
    sections.forEach(section => {

        const titleName: string = section.querySelector(".title").textContent;

        const bookmark: HTMLAnchorElement = document.createElement("a")
        bookmark.classList.add("bookmark")
        bookmark.setAttribute("id",titleName)

        const item : HTMLLIElement = document.createElement("li");
        const link : HTMLAnchorElement = document.createElement("a");
        
        link.setAttribute("href",`#${titleName}`);
        link.textContent = titleName;
    
        item.appendChild(link);
        menu.appendChild(item);
        section.appendChild(bookmark)

    })
};

export function handleMenu () : void
{
    document.addEventListener("scroll",function(e)
    {
        const winHeight: number = window.innerHeight;
        
        if(window.scrollY > 0)
            menu.classList.remove("hidden-menu")
        else
            menu.classList.add("hidden-menu")

    })
}
