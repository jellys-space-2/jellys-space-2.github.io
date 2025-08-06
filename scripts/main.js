const navBar = document.querySelector('.top-nav');
const primaryContainer = document.querySelector('#content');

function trimURL(a) {
    return a.replace("/", "");
}

const notFoundHTMLContent = `
    <img src="https://beta.jellys-space.vip/images/jellyhome.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
    <div class="text-block">
        <h2>404</h2>
        <p>You've taken a wrong turn, and ended up in a place far, far away...</p>
        <p>:/</p>
    </div>
`;


// Fake API / Database responses

// The image urls that will be randomly picked for the home page "Decors" homenav button
const marketing = [
    "https://beta.jellys-space.vip/images/camille%20healing.png",
    "https://beta.jellys-space.vip/images/Xiva.png",
    "https://beta.jellys-space.vip/images/Huxleys%20Myst.png",
];




// Pages

// will default to the first page if no page is set in the url

// url: The name of the page in the url
// name: The name of the tab in the nav bar
// hidden: If it's set to true, it will be hiddden on the nav bar
// content: The html the content container gets set to when the button is clicked
const pages = [
    {
        url: "/home",
        name: "Home",
        hidden: false,
        content: `
            <img src="https://beta.jellys-space.vip/images/jellyhome.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <h2>Welcome to Jelly's Space!</h2>
                <p>Here, you can find a huge catalog of custom-made Avatar Decorations to use with the Decor plugin for Vencord!</p>
                <p>^o^</p>
            </div>
            <div class="homenav-grid"></div>
        `
    },
    {
        url: "/decors",
        name: "Decors",
        hidden: false,
        content: `
            decors page
        `
    },
    {
        url: "/guide",
        name: "Guide",
        hidden: false,
        content: `
            <img src="https://beta.jellys-space.vip/guide/jellyguide.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here's how to get your own custom Decor!</p>
                <p>Follow this guide and you'll be lookin' sweet in no time :D</p>
            </div>
        `
    },
    {
        url: "/artists",
        name: "Artists",
        hidden: false,
        content: `
            <img src="https://beta.jellys-space.vip/artists/jellyartists.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here are some of the artists who make Jelly's Space what it is~</p>
                <p>They are amazing people who deserve love~</p>
                <p>You can click the name of the artist to go directly to their Discord Profile!</p>
            </div>
        `
    },
    {
        url: "/faq",
        name: "Faq",
        hidden: false,
        content: `
            <img src="https://beta.jellys-space.vip/faq/jellyfaq.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here, you'll find the frequently asked questions</p>
                <p>^-^</p>
            </div>
        `
    },
    {
        url: "/donate",
        name: "Donate",
        hidden: false,
        content: `
            <img src="https://beta.jellys-space.vip/donate/jellythx.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>If you would like to donate to me, the links to do so will be below!</p>
                <p>Mwah~</p>
            </div>
        `
    },
    {
        url: "/test",
        name: "404 (test)",
        hidden: false,
        content: notFoundHTMLContent
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const match = pages.find(page => page.url === currentPath);
    if (match) {
        setPage(match.url);
    } else if (!match || match === "" || match === "/") {
        setPage('/home');
    } else {
        primaryContainer.innerHTML = notFoundHTMLContent;
    }
});

// Adds each page from "pages" to the nav bar
pages.forEach(page => {
    const tab = document.createElement('p');
    tab.textContent = page.name;
    tab.id = `${trimURL(page.url)}-tab`;
    navBar.appendChild(tab);
    tab.addEventListener("click", () => {
        setPage(page.url);
    });
    if (page.hidden) tab.classList.add('hidden');
});

// Selects the page button on the nav bar and sets the page content
function setPage(url) {
    primaryContainer.className = '';
    const page = pages.find(p => p.url === url);
    const tabs = navBar.querySelectorAll('p');
    tabs.forEach((el) => {
        el.classList.remove("selected");
    });

    const match = pages.find(page => page.url === url);
    if (!match || match === "" || match === "/") {
        history.pushState(null, '', url);
        return primaryContainer.innerHTML = notFoundHTMLContent;
    }

    try {
        navBar.querySelector('#'+trimURL(page.url)+'-tab').classList.add("selected");
        history.pushState(null, '', page.url);
        primaryContainer.classList.add(trimURL(page.url));
        primaryContainer.innerHTML = page.content;

        // Code that's run after the set page loads
        if (trimURL(page.url) === "home") {
            const randomIndex = Math.floor(Math.random() * marketing.length);
            const homenavGrid = primaryContainer.querySelector('.homenav-grid');
            homenavGrid.innerHTML = `
                <div class="var1" onclick="setPage('/decors')">
                    <div class="decoration-container">
                        <img class="avatar" src="https://beta.jellys-space.vip/images/default-avatar.png" oncontextmenu="return false;" loading="lazy">
                        <img class="deco" src="${marketing[randomIndex]}" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>Decors</h1>
                </div>
                <div class="var2" onclick="setPage('/guide')">
                    <div>
                        <img src="https://cdn.discordapp.com/emojis/1369748654629327060.webp?size=4096" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>How-To</h1>
                </div>
                <div class="var3" onclick="setPage('/rehash')">
                    <div>
                        <img src="https://beta.jellys-space.vip/images/jellyhome.png" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>Re-Hash</h1>
                </div>
            `;
        }
    } catch(err) {
        console.error("Error loading page: "+err)
    }
}