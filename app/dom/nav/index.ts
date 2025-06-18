import {NavigationItems} from "@/app/data/nav";


const setNavLinkActiveByClass = (className: string) => {

    const link = document.querySelector(`.${className}-link`);
    const line = document.querySelector(`.${className}-line`)
    removeAllActiveLinks()

    if (link && link) {
        line?.classList.add('bg-java-red');
        link.classList.add('font-bold', 'text-java-red');
    }

}

function removeAllActiveLinks() {

    const navItems = NavigationItems.map(string => string.toLowerCase());
    const underlines = navItems.map((item) => item.concat('-line'))
    const navlinks = navItems.map(item => item.concat('-link'));

    underlines.forEach((line) => {
        const element = document.querySelector(`.${line}`);
        if (element) {
            element.classList.remove('bg-java-red');
        }
    })

    navlinks.forEach((navlink) => {
        const element = document.querySelector(`.${navlink}`);
        if (element) {
            element.classList.remove('font-bold', 'text-java-red');
        }
    })

}

export {setNavLinkActiveByClass};