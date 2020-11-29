import $ from "jquery";
const titles : Array<HTMLTitleElement> = Array.from(
    document.querySelectorAll(".title")
)
const menu : HTMLElement = document.getElementById("menu");

const sections : Array<HTMLElement> = Array.from(document.querySelectorAll("section:not(.no-pad)"))

const burger: HTMLDivElement = document.querySelector(".burger");

const up: HTMLElement = document.getElementById("up");

const getAnchors  = () : Array<HTMLAnchorElement> => Array // получает все ссылки, начинающися на #
.from(document.querySelectorAll("a[href^='#']")) 
const getScrollBlocks = () : Array<HTMLAnchorElement> => Array
.from(document.querySelectorAll("a[scroll]"))




const handleAnchorClick = () : void => {
    getAnchors()
    .forEach((link) : void =>  {
        link.addEventListener("click",e => {
            e.preventDefault();

            const linkID : string = link.getAttribute("href").slice(1); // избавляюсь от #

            const bookmark : HTMLAnchorElement = getScrollBlocks()
            .find((bm) : boolean => bm.getAttribute("scroll") == linkID) // получаю "закладку", до куда крутить

            // кручу-верчу
            bookmark.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
            
            // скрываю меню
            menu.classList.add("hidden-menu")
            
        })
    })
    
}

export function insertMenu() : void {
    sections.forEach(section => {

        const titleName: string = section.querySelector(".title").textContent; // название секции

        const bookmark: HTMLAnchorElement = document.createElement("a")
        bookmark.classList.add("bookmark")
        bookmark.setAttribute("scroll",titleName)

        const item : HTMLLIElement = document.createElement("li");
        const link : HTMLAnchorElement = document.createElement("a");
        
        link.setAttribute("href",`#${titleName}`);
        link.textContent = titleName;
    
        item.appendChild(link);
        menu.appendChild(item);
        section.appendChild(bookmark)
    })
};

up.addEventListener("click",() => {
    document.querySelector(".no-pad").scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

export function handleMenu () : void
{
    handleAnchorClick();
    document.addEventListener("scroll",function handler(e)
    {
        const scrY : number = window.scrollY;
        
        if(scrY > 1400)
            up.classList.remove("invisible")
        else
            up.classList.add("invisible")
        

        if(getComputedStyle(burger).display =="none")
        {
            if(window.scrollY > 0)
            menu.classList.remove("hidden-menu")
        else
            menu.classList.add("hidden-menu")
        }
        else{
            if(!menu.classList.contains("hidden-menu"))
                menu.classList.add("hidden-menu")
        }

        
    })

    burger.addEventListener("click",function()
    {
        menu.classList.toggle("hidden-menu")
    })
}
