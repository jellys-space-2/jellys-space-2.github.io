const navBar = document.querySelector('.top-nav');
const primaryContainer = document.querySelector('#content');
const pageSearchBar = document.querySelector('.search-bar');


// Cache

let openModalsCache = 0;


// param code
const params = new URLSearchParams(window.location.search);
function setParams(params) {
    const url = new URL(window.location);
    url.search = '';
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    history.replaceState(null, '', url);
};
function addParams(params) {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    history.replaceState(null, '', url);
};
function removeParams(params) {
    const url = new URL(window.location);
    if (!Array.isArray(params)) {
        params = [params];
    }
    params.forEach(key => url.searchParams.delete(key));
    history.replaceState(null, '', url);
};


const commission_types = {
    MONEY: "Money",
    DISCORD_NITRO: "Nitro",
    DISCORD_COLLECTIBLES: "Discord Shop Items",
    STEAM_GIFTS: "Steam Gifts",
    KOFI: "Ko-fi Donations",
    NEGOTIABLE: "Payment is negotiable.",
};

const modal_types = {
    DECOR: 0,
    CATEGORY: 1,
    USER: 3
}

const urls = {
    CDN: "https://jellys-space-2.github.io/cdn" // The cdn link that assets will use (makes it esier to change if you wanted to use cdn.jellys-space.vip)
};

const notFoundHTMLContent = `
    <img src="${urls.CDN}/assets/jellyhome.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
    <div class="text-block">
        <h2>404</h2>
        <p>You've taken a wrong turn, and ended up in a place far, far away...</p>
        <p>:/</p>
    </div>
`;


// Fake API / Database responses

// The image urls that will be randomly picked for the home page "Decors" homenav button
const marketing = [
    `${urls.CDN}/decors/camille%20healing.png`,
    `${urls.CDN}/decors/Xiva.png`,
    `${urls.CDN}/decors/Huxleys%20Myst.png`,
];


// List of artists

// id: the users discord id
// name: The users discord username (or just a name they want)
// assets: for the avatar and banner, put the asset id (e.g <asset>-avatar.png) and "-avatar.png", "-avatar.webm", "-banner.png" and "-banner.webm" will be automatically added when rendering the assets on the client
// commissions: what forms of payment the user accepts for commissions
const artists = [
    {
        id: "1147940825330876538",
        name: "Jelly",
        assets: {
            avatar: {
                asset: "jelly",
                animated: false
            },
            banner: {
                asset: "jelly",
                animated: true
            }
        },
        sumarry: `Founder of this website.\nI created the Pokéball Decors, the Abstract category and a few uncategorized Decors.\nLet it be known that coding this site destroyed my one and only braincell.\nIt was a labor of love!\nMwah~`,
        colors: {
            primary: "#4fe9e1"
        },
        commissions: []
    },
    {
        id: "334062444718587905",
        name: "Seele",
        assets: {
            avatar: {
                asset: "seele",
                animated: true
            },
            banner: {
                asset: "seele",
                animated: true
            }
        },
        sumarry: `I like to draw woman\nand animate them in After Effects Afterwards.`,
        colors: {
            primary: "#515151"
        },
        commissions: [
            {
                "type": "MONEY",
                "link": null
            },
            {
                "type": "DISCORD_NITRO",
                "link": null
            }
        ]
    },
    {
        id: "995651435519815772",
        name: "Ca-Cawthon",
        assets: {
            avatar: {
                asset: "cacawthon",
                animated: false
            },
            banner: {
                asset: "cacawthon",
                animated: false
            }
        },
        sumarry: `Heyo all! The name's Cawthon.\nI am the creator of the Flavor Foley set and hopefully more to come.\nI go by they/them and I'm quite the introvert.`,
        colors: {
            primary: "#f52f6a"
        },
        commissions: [
            {
                "type": "DISCORD_NITRO",
                "link": null
            }
        ]
    },
    {
        id: "1143994313034960967",
        name: "Nuki",
        assets: {
            avatar: {
                asset: "nuki",
                animated: false
            },
            banner: {
                asset: "nuki",
                animated: false
            }
        },
        sumarry: `Hi !! ♡ I'm Nuki, i go by she/they !!\ni'm a person with half a braincell\nxavvi a valorant player`,
        colors: {
            primary: "#893f79"
        },
        commissions: [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        id: "1187559332703899708",
        name: "Serenemist",
        assets: {
            avatar: {
                asset: "serenemist",
                animated: false
            },
            banner: {
                asset: "serenemist",
                animated: false
            }
        },
        sumarry: `haii !!! my name's serene and i also go by mist ^_^\ni am the creator of a few sets such as\nSky Dreams, Kitsune Appearings, Petting Zoo, Horns and the TBHK set!\nhttps://serenemist.carrd.co/`,
        colors: {
            primary: "#cdffeb"
        },
        commissions: []
    },
    {
        id: "1096831760089763860",
        name: "Alide",
        assets: {
            avatar: {
                asset: "alide",
                animated: false
            },
            banner: {
                asset: "alide",
                animated: false
            }
        },
        sumarry: `Hai!!! My name is alide and i go by she/her, im a big fan of the colour pink 🩷\nhttps://alidewashere.straw.page/`,
        colors: {
            primary: "#ffdcb4"
        },
        commissions: [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        id: "811114235966521364",
        name: "CallieVD",
        assets: {
            avatar: {
                asset: "cal",
                animated: false
            },
            banner: {
                asset: "cal",
                animated: false
            }
        },
        sumarry: `hi, i'm cal! i'm just a weird lil' guy and i make things sometimes :3\nhttps://ibtvtuo.carrd.co/\nhttps://ko-fi.com/callievd`,
        colors: {
            primary: "#89ffbe"
        },
        commissions: [
            {
                "type": "KOFI",
                "link": "https://ko-fi.com/c/6d9b88bc51"
            }
        ]
    },
    {
        id: "1104844219094401215",
        name: "Random Phineaszem",
        assets: {
            avatar: {
                asset: "phineas",
                animated: false
            },
            banner: {
                asset: "phineas",
                animated: false
            }
        },
        sumarry: `Hello I'm RandomPhineaszem\nPolish Decor Creator And Dubbinger, I Love Books Over Scott Pilgrim, I Am DVD Collector, The Most Dangerous Person In Society, I Like Doing Videos.\nI Have A Specific Sense Of Humor Like Haha Gore, And My Fav Games Are Undertale-Deltarune Cookie Run Kingdom And FNF\nhttps://www.youtube.com/@Random_Phineaszem`,
        colors: {
            primary: "#c8e1ff"
        },
        commissions: [
            {
                "type": "KOFI",
                "link": "https://ko-fi.com/c/6d9b88bc51"
            }
        ]
    },
    {
        id: "1031549301001814059",
        name: "Shadow",
        assets: {
            avatar: {
                asset: "shadow",
                animated: false
            },
            banner: {
                asset: "shadow",
                animated: false
            }
        },
        sumarry: `Hi, I'm Shadow, a guy who make games and arts.\nAnd kinda obsessed with the Sonic franchise.`,
        colors: {
            primary: "#969696"
        },
        commissions: []
    },
    {
        id: "855561944257789973",
        name: "Palco",
        assets: {
            avatar: {
                asset: "palco",
                animated: false
            },
            banner: {
                asset: "palco",
                animated: false
            }
        },
        sumarry: `haiiiii i draw pizza tower art!!!\ni work on alot of pizza tower projects!!\nbaii!!`,
        colors: {
            primary: "#ffca84"
        },
        commissions: []
    },
    {
        id: "1139815872874172456",
        name: "Foxy",
        assets: {
            avatar: {
                asset: "foxy",
                animated: false
            },
            banner: {
                asset: "foxy",
                animated: false
            }
        },
        sumarry: `Helloo im Foxy!!\ni love vocaloid and pjsk and im a both tradi and digi artist\n(〃＾▽＾〃)o\nmy pronouns are she/her and im ambivert ehe..\nhttps://foooooxy.straw.page/`,
        colors: {
            primary: "#ffc0cb"
        },
        commissions: []
    },
    {
        id: "808325271949934652",
        name: "T8dy1",
        assets: {
            avatar: {
                asset: "t8dy1",
                animated: false
            },
            banner: {
                asset: "t8dy1",
                animated: false
            }
        },
        sumarry: `Hi, I'm T8dyi and I like video editing and other things revolving around graphical design etc,\nalso like photography, cars and Star Wars 😊`,
        colors: {
            primary: "#474747"
        },
        commissions: [
            {
                "type": "STEAM_GIFT",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        id: "1088105926030000178",
        name: "Sharr",
        assets: {
            avatar: {
                asset: "sharr",
                animated: false
            },
            banner: {
                asset: "sharr",
                animated: false
            }
        },
        sumarry: `Hi, I'm Sharr!\nI'm a huge fan of the Bloons game series and absolutely love Vocaloid~\n♡ (＾▽＾)`,
        colors: {
            primary: "#96f8ff"
        },
        commissions: [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        id: "452679089929846784",
        name: "Zin",
        assets: {
            avatar: {
                asset: "zin",
                animated: false
            },
            banner: {
                asset: "zin",
                animated: false
            }
        },
        sumarry: `Hihi Im Zin or Z for short, the creator of the Genshin Impact decors and most of the Jelly images you see on the website.\nI plan on 2 batches in the near future so look out for those !!\nI do commission work for decors I feel comfortable doing, like genshin characters i havent put onto the website like Columbina or Varesa.\nZenless Zone Zero, Honkai Star Rail, Wuthering Waves, and Neverness To Everness are in my future todo lists, but im willing to do commission for those games as well, depending on difficulty ^^`,
        colors: {
            primary: "#72ff77"
        },
        commissions: [
            {
                "type": "NEGOTIABLE",
                "link": null
            }
        ]
    },
    {
        id: "1033224131795243008",
        name: "Doger",
        assets: {
            avatar: {
                asset: "doger",
                animated: false
            },
            banner: {
                asset: "doger",
                animated: false
            }
        },
        sumarry: `Hello! im Doger.\nCurrently a big vr addict and someone who enjoys to draw alot with their computer mouse for some reason, if you dont know i dont too.\nhttps://www.roblox.com/users/1790186904/profile`,
        colors: {
            primary: "#ffc896"
        },
        commissions: []
    },
    {
        id: "995598255612239884",
        name: "Prince",
        assets: {
            avatar: {
                asset: "prince",
                animated: false
            },
            banner: {
                asset: "prince",
                animated: false
            }
        },
        sumarry: `Hey hey, I'm Prince!\nI'm a self-taught hyper-realistic artist skilled in traditional and digital mediums.\nWhile I enjoy working on various other skills,\nart always takes the top spot ^ ^\n..well i like to help others, u jus have to dm me XD`,
        colors: {
            primary: "#b6b6b6"
        },
        commissions: []
    },
    {
        id: "599654027764039690",
        name: "Xavvi",
        assets: {
            avatar: {
                asset: "xavvi",
                animated: false
            },
            banner: {
                asset: "xavvi",
                animated: false
            }
        },
        sumarry: `hi im xavi (^^)/\ni do art but not crazy into it\nim into persona 3, doom, scott pilgrim and omori (also any fps shooter game tbh)\nhttps://www.roblox.com/users/470642084/profile\nhttps://x.com/notxavvi`,
        colors: {
            primary: "#78ff88"
        },
        commissions: []
    },
    {
        id: "1071722654723219587",
        name: "Nexell",
        assets: {
            avatar: {
                asset: "nexell",
                animated: false
            },
            banner: {
                asset: "nexell",
                animated: false
            }
        },
        sumarry: `Hi, I'm Nexell! :3\nI use Blender to make the Neon set.\nhttps://linktr.ee/nebvlamusic`,
        colors: {
            primary: "#831b5f"
        },
        commissions: []
    },
    {
        id: "1039595490238529606",
        name: "Sharsame",
        assets: {
            avatar: {
                asset: "sharsame",
                animated: false
            },
            banner: {
                asset: "sharsame",
                animated: false
            }
        },
        sumarry: `HALLO!! im sharsame\ni like producing music, making art and animating!!!! :P\nhttps://www.tiktok.com/@sharsamee\nhttps://youtube.com/@exdeedeedee`,
        colors: {
            primary: "#7edbfd"
        },
        commissions: []
    },
    {
        id: "323205750262595595",
        name: "Jenku",
        assets: {
            avatar: {
                asset: "jenku",
                animated: false
            },
            banner: {
                asset: "jenku",
                animated: false
            }
        },
        sumarry: `hiiiii im jenku\ni do uh, a lot of different stuff; art, web&bot development, vtube rigging, 3d modelling etcetera etcetera and am planning on studying physics, computer science and design engineering!\nOh also I collect nintendo consoles.\ni also have a couple of presets here and in the actual plugin!\nmy interests are all over the place: mainly nintendo, ultrakill and portal\ncurrently playing through deltarune!!\nmy site is https://jenku.xyz/, more info about me there !!\nhttps://decor.jenku.xyz/ (decor faq) and https://theme.jenku.xyz/ (mobile discord theme maker)`,
        colors: {
            primary: "#ff6ee6"
        },
        commissions: []
    },
    {
        id: "713791218160500796",
        name: "GlassConsumer69",
        assets: {
            avatar: {
                asset: "glassconsumer",
                animated: false
            },
            banner: {
                asset: "glassconsumer",
                animated: false
            }
        },
        sumarry: `Hi, I'm Glass.\nI draw mostly fan-art for stickers or commissions, but am also currently working on animating my own show.\nI made the Oxygen not included, Starcraft II, and Axolotl decors on the website,\nas well as the Hotline Miami pack available through the presets in vencord.\nhttps://www.redbubble.com/people/LetsEatGlass69/shop\nhttps://glassconsumer69.newgrounds.com/\nhttps://www.tumblr.com/blog/glasseeater`,
        colors: {
            primary: "#3aa9f8"
        },
        commissions: []
    }
];

const categories = [
    {
        "name": "Fate Trigger",
        "banner": "fatetrigger-banner.png",
        "artist_info": `Join the Fate Trigger Discord at <strong><a href="https://discord.gg/fatetrigger" target="_blank" rel="noopener" class="commission-link">this link</a></strong>.`,
        "artists": [
            findUser('334062444718587905')
        ],
        "decorations": [
            {
                "name": "Xiva",
                "asset": "Xiva.png"
            },
            {
                "name": "Camille Healing",
                "asset": "camille healing.png"
            },
            {
                "name": "Huxleys Myst",
                "asset": "Huxleys Myst.png"
            }
        ]
    },
    {
        "name": "Pokemart",
        "banner": "pokemart-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1147940825330876538')
        ],
        "decorations": [
            {
                "name": "Poké Ball",
                "asset": "poke ball.png"
            },
            {
                "name": "Great Ball",
                "asset": "great ball.png"
            },
            {
                "name": "Ultra Ball",
                "asset": "ultra ball.png"
            },
            {
                "name": "Master Ball",
                "asset": "master ball.png"
            },
            {
                "name": "Premier Ball",
                "asset": "premier ball.png"
            },
            {
                "name": "Strange Ball",
                "asset": "strange ball.png"
            },
            {
                "name": "Team Rocket Ball",
                "asset": "rocket ball.png"
            },
            {
                "name": "GS Ball",
                "asset": "gs ball.png"
            }
        ]
    },
    {
        "name": "Flavor Foley",
        "banner": "flavorfoley-banner.png",
        "artist_info": null,
        "artists": [
            findUser('995651435519815772')
        ],
        "decorations": [
            {
                "name": "Cardiac Contrepoint",
                "asset": "Cardiac Contrepoint.png"
            },
            {
                "name": "Electric Weekend Zone",
                "asset": "Electric Weekend Zone.png"
            },
            {
                "name": "Flavor Foley",
                "asset": "Flavor Foley.png"
            },
            {
                "name": "Meatgirl",
                "asset": "meatgirl.png"
            },
            {
                "name": "Queen of Venus",
                "asset": "Queen of Venus.png"
            },
            {
                "name": "Rawdog",
                "asset": "rawdog.png"
            },
            {
                "name": "Water the roses",
                "asset": "watertheroses.png"
            },
            {
                "name": "Weathergirl",
                "asset": "weathergirl.png"
            },
            {
                "name": "Wei Ward Romance",
                "asset": "WeiWardRomance.png"
            },
            {
                "name": "Static's Miku",
                "asset": "Static's Miku.png"
            }
        ]
    }
];


// Gets the user info from their id (if they're in the "artists" list)
function findUser(id) {
    const user = artists[artists.findIndex(u => u.id === id)];
    if (user) {
        return {
            id: user.id,
            name: user.name,
            sumarry: user.sumarry,
            commissions: commissions(user.commissions)
        };
    } else return null
};

// Cleanly renders the artists commissions from config
function commissions(data) {
    const readableTypes = data
        .map(entry => {
            const label = commission_types[entry.type];
            if (!label) return null;

            if (entry.link) {
                return `<a href="${entry.link}" target="_blank" rel="noopener noreferrer">${label}</a>`;
            }

            return label;
        })
        .filter(Boolean);

    if (readableTypes.length === 0) return null;

    if (data[0].type === "NEGOTIABLE") {
        return commission_types.NEGOTIABLE;
    }

    if (readableTypes.length === 1) {
        return `They accept ${readableTypes[0]} as payment.`;
    }

    const last = readableTypes.pop();
    return `They accept ${readableTypes.join(", ")} or ${last} as payment.`;
};


// Pages

// will default to the first page if no page is set in the url

// url: The name of the page in the url
// name: The name of the tab in the nav bar
// hidden: If it's set to true, it will be hiddden on the nav bar
// content: The html the content container gets set to when the button is clicked
const pages = [
    {
        url: "home",
        name: "Home",
        hidden: false,
        content: `
            <img src="${urls.CDN}/assets/jellyhome.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <h2>Welcome to Jelly's Space!</h2>
                <p>Here, you can find a huge catalog of custom-made Avatar Decorations to use with the Decor plugin for Vencord!</p>
                <p>^o^</p>
            </div>
            <div class="homenav-grid"></div>
        `
    },
    {
        url: "decors",
        name: "Decors",
        hidden: false,
        content: `
            <div class="pagination"></div>

            <div class="categories-container">
            </div>

            <div class="pagination"></div>
        `
    },
    {
        url: "guide",
        name: "Guide",
        hidden: false,
        content: `
            <img src="${urls.CDN}/assets/jellyguide.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here's how to get your own custom Decor!</p>
                <p>Follow this guide and you'll be lookin' sweet in no time :D</p>
            </div>
        `
    },
    {
        url: "artists",
        name: "Artists",
        hidden: false,
        content: `
            <img src="${urls.CDN}/assets/jellyartists.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here are some of the artists who make Jelly's Space what it is~</p>
                <p>They are amazing people who deserve love~</p>
                <p>You can click the name of the artist to go directly to their Discord Profile!</p>
                <strong>Fancy being featured here? Reach out to Jelly!</strong>
            </div>

            <div class="artists-list">
            </div>
        `
    },
    {
        url: "faq",
        name: "Faq",
        hidden: false,
        content: `
            <img src="${urls.CDN}/assets/jellyfaq.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>Here, you'll find the frequently asked questions</p>
                <p>^-^</p>
            </div>
        `
    },
    {
        url: "donate",
        name: "Donate",
        hidden: false,
        content: `
            <img src="${urls.CDN}/assets/jellythx.png" alt="Jelly" style="height: 200px;" oncontextmenu="return false;" loading="lazy">
            <div class="text-block">
                <p>If you would like to donate to me, the links to do so will be below!</p>
                <p>Mwah~</p>
            </div>
        `
    },
    {
        url: "test",
        name: "404 (test)",
        hidden: false,
        content: notFoundHTMLContent
    }
];

// Checks to see if "?page=" is in the url. if it isn't: it takes you to the home page. if it is but not a valid page: it takes you to the 404 page
window.addEventListener("DOMContentLoaded", () => {
    const currentPath = params.get("page");
    const match = pages.find(page => page.url === currentPath);
    if (params.get("page")) {
        setPage(params.get("page"));
    } else if (!match) {
        setPage('home');
    } else {
        primaryContainer.innerHTML = notFoundHTMLContent;
    }
});

// Adds each page from "pages" to the nav bar
pages.forEach(page => {
    const tab = document.createElement('p');
    tab.textContent = page.name;
    tab.id = `${page.url}-tab`;
    navBar.appendChild(tab);
    tab.addEventListener("click", () => {
        setPage(page.url);
    });
    if (page.hidden) tab.classList.add('hidden');
});

// Selects the page button on the nav bar and sets the page content
function setPage(url) {
    pageSearchBar.value = '';
    primaryContainer.className = '';
    const page = pages.find(p => p.url === url);
    const tabs = navBar.querySelectorAll('p');
    tabs.forEach((el) => {
        el.classList.remove("selected");
    });

    const match = pages.find(page => page.url === url);
    if (!match) {
        setParams({page: url})
        return primaryContainer.innerHTML = notFoundHTMLContent;
    }

    try {
        navBar.querySelector('#'+page.url+'-tab').classList.add("selected");
        setParams({page: page.url})
        primaryContainer.classList.add(page.url);
        primaryContainer.innerHTML = page.content;

        // Code that's run after the set page loads
        if (page.url === "home") {
            const homenavGrid = primaryContainer.querySelector('.homenav-grid');
            homenavGrid.innerHTML = `
                <div class="var1" onclick="setPage('decors')">
                    <div class="decoration-container">
                        <img class="avatar" src="${urls.CDN}/assets/default-avatar.png" oncontextmenu="return false;" loading="lazy">
                        <img class="deco" src="${marketing[Math.floor(Math.random() * marketing.length)]}" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>Decors</h1>
                </div>
                <div class="var2" onclick="setPage('guide')">
                    <div>
                        <img src="${urls.CDN}/assets/jellythonk.webp" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>How-To</h1>
                </div>
                <div class="var3" onclick="setPage('rehash')">
                    <div>
                        <img src="${urls.CDN}/assets/rehashicon.png" oncontextmenu="return false;" loading="lazy">
                    </div>
                    <h1>Re-Hash</h1>
                </div>
            `;
        } else if (page.url === "decors") {
            renderDecorsData(categories, primaryContainer.querySelector('.categories-container'));
        } else if (page.url === "artists") {
            const artistsList = primaryContainer.querySelector('.artists-list');
            artists.forEach((artist) => {
                const banner = document.createElement('div');
                if (artist.assets.banner.animated === true) {
                    banner.innerHTML = `
                        <video src="${urls.CDN}/artists/${artist.assets.banner.asset}-banner.webm" disablepictureinpicture muted loop playsinline autoplay></video>
                    `;
                } else {
                    banner.innerHTML = `
                        <img src="${urls.CDN}/artists/${artist.assets.banner.asset}-banner.png" oncontextmenu="return false;" loading="lazy">
                    `;
                }
                banner.addEventListener("click", () => {
                    let config = {
                        type: modal_types.USER,
                        data: findUser(artist.id)
                    };
                    if (artist.colors?.primary) {
                        config = {
                            type: modal_types.USER,
                            accentColor: artist.colors?.primary,
                            data: findUser(artist.id)
                        };
                    }
                    openModal(config);
                });
                artistsList.appendChild(banner);
            });
        }
    } catch(err) {
        console.error("Error loading page: "+err)
    }
};

function paginate(items, page = 1, perPage = 5) {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
};
function createPaginationControls(container, totalPages, currentPage, onPageChange) {
    if (container) {
        container.innerHTML = '';

        const btn = (text, page, disabled = false, isCurrent = false, isNav = false) => {
            const b = document.createElement('button');
            b.textContent = text;
            b.classList.add(isNav ? 'nav-btn' : 'circle-btn');
            if (disabled) b.disabled = true;
            if (isCurrent) b.classList.add('current-page');
            b.addEventListener('click', () => onPageChange(page));
            return b;
        };

        container.appendChild(btn('< Back', currentPage - 1, currentPage === 1, false, true));

        const range = Math.min(5, totalPages);
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + range - 1);
        if (endPage - startPage < range - 1) startPage = Math.max(1, endPage - range + 1);

        if (startPage > 1) {
            container.appendChild(btn('1', 1));
            if (startPage > 2) container.appendChild(document.createTextNode('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            container.appendChild(btn(i, i, false, i === currentPage));
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) container.appendChild(document.createTextNode('...'));
            container.appendChild(btn(totalPages, totalPages));
        }

        container.appendChild(btn('Next >', currentPage + 1, currentPage === totalPages, false, true));
    }
};
function filterCategories(data, search) {
    if (!search.trim()) return data;
    const term = search.toLowerCase();
    return data.map(cat => {
        const catMatch = cat.name.toLowerCase().includes(term);
        const filteredProducts = cat.decorations?.filter(p =>
            p.name.toLowerCase().includes(term)
        ) || [];
        if (catMatch || filteredProducts.length > 0) {
            return {
                ...cat,
                decorations: catMatch ? cat.decorations : filteredProducts
            };
        }
        return null;
    }).filter(Boolean);
};

async function renderDecorsData(data, output) {
    const paginationContainers = [];
    
    const mainPaginationById = document.getElementById('pagination');
    if (mainPaginationById) {
        paginationContainers.push(mainPaginationById);
    }
    
    const paginationByClass = document.querySelectorAll('.pagination');
    paginationByClass.forEach(container => {
        if (!paginationContainers.includes(container)) {
            paginationContainers.push(container);
        }
    });

    const paginationByDataAttr = document.querySelectorAll('[data-pagination]');
    paginationByDataAttr.forEach(container => {
        if (!paginationContainers.includes(container)) {
            paginationContainers.push(container);
        }
    });

    let itemsPerPage = 5;
    let filteredData = data;

    const renderPage = (page) => {
        currentPage = page;
        output.innerHTML = '';
        const pageData = paginate(filteredData, page, itemsPerPage);
        output.scrollTo(0,0);

        if (data.length <= itemsPerPage) {
            paginationContainers.forEach(container => {
                container.classList.add('hidden');
            });
        } else {
            paginationContainers.forEach(container => {
                container.classList.remove('hidden');
            });
        }

        pageData.forEach((categoryData) => {
            const category = document.createElement("div");
            category.classList.add('category');



            category.innerHTML = `
                <img src="${urls.CDN}/banners/${categoryData.banner}" class="banner" oncontextmenu="return false;" loading="lazy">
                <div class="decorations"></div>
            `;

            categoryData.decorations.forEach((deco) => {
                const decoCard = document.createElement("div");
                decoCard.classList.add('deco-card');

                decoCard.innerHTML = `
                    <div class="decoration-container">
                        <img class="avatar" src="${urls.CDN}/assets/default-avatar.png" oncontextmenu="return false;" loading="lazy">
                        <img class="deco" src="${urls.CDN}/decors/${deco.asset}" oncontextmenu="return false;" loading="lazy">
                    </div>
                `;

                decoCard.addEventListener("click", () => {
                    openModal();
                });

                category.querySelector('.decorations').appendChild(decoCard);
            });







            output.appendChild(category);
        });

        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        // Create pagination controls for all containers
        paginationContainers.forEach(container => {
            createPaginationControls(container, totalPages, page, renderPage);
        });
    };

    window.renderPage = renderPage;

    pageSearchBar.addEventListener('input', () => {
        filteredData = filterCategories(data, pageSearchBar.value);
        renderPage(1);
    });

    renderPage(1);
};





// Modal Code


// height is in pixels (px), can be set to null for auto size
// width is in pixels (px), can be set to null for auto size
// itemsCenter: if the content is centered in the modal, set to false and the content will be on the left\
// accentColor: the background color of the modal, can be set to null
function openModal({
    type = null,
    height = null,
    width = null,
    itemsCenter = true,
    accentColor = "#4fe9e1",
    data = null
} = {}) {
    openModalsCache += 1;

    // Code to hide the not top most modal
    try {
        const amount = openModalsCache - 1;
        if (!document.querySelector('.open-modal-' + amount).classList.contains('modalv3')) {
            document.querySelector('.open-modal-' + amount).classList.remove('show');
            document.querySelector('.open-back-modal-' + amount).classList.remove('show');
        }
    } catch {}

    const modal = document.createElement("div");
    modal.classList.add('modal-container');
    modal.classList.add('open-modal-' + openModalsCache);
    modal.style.zIndex = 301 + openModalsCache;

    const modal_back = document.createElement("div");
    modal_back.classList.add('modal-back');
    modal_back.classList.add('open-back-modal-' + openModalsCache);
    modal_back.id = 'modal-back';
    modal_back.style.zIndex = 300 + openModalsCache;

    modal.innerHTML = `
        <div class="modal"></div>
    `;
    const modalContent = modal.querySelector('.modal');
    Object.assign(modalContent.style, {
        height: height ? height+'px' : 'auto',
        width: width ? width+'px' : 'auto',
        justifyContent: itemsCenter ? 'center' : 'unset',
        textAlign: itemsCenter ? 'center' : 'unset',
        backgroundColor: accentColor ? hexWithOpacity(accentColor, 0.2) : 'unset'
    });

    if (type === modal_types.USER) {
        const user = data;

        modalContent.innerHTML = `
            <p>${processSummary(user.sumarry)}</p>
        `;
    } else {
        modalContent.innerHTML = `
            <p>this is a test modal, you didn't set a modal type</p>
            <p>this is a test modal, you didn't set a modal type</p>
            <p>this is a test modal, you didn't set a modal type</p>
            <p>this is a test modal, you didn't set a modal type</p>
            <p>this is a test modal, you didn't set a modal type</p>
        `;
    }


    document.body.appendChild(modal);
    document.body.appendChild(modal_back);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            modal.classList.add('show');
            modal_back.classList.add('show');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
};

function closeModal() {
    if (openModalsCache != 0) {
        const modal = document.querySelector('.open-modal-' + openModalsCache);
        const modal_back = document.querySelector('.open-back-modal-' + openModalsCache);

        // Code to hide the not top most modal
        try {
            const amount = openModalsCache - 1;
            if (!document.querySelector('.open-modal-' + amount).classList.contains('modalv3')) {
                document.querySelector('.open-modal-' + amount).classList.add('show');
                document.querySelector('.open-back-modal-' + amount).classList.add('show');
            }
        } catch {}

        if (modal) modal.classList.remove('show');
        if (modal_back) modal_back.classList.remove('show');
        setTimeout(() => {
            if (modal) modal.remove();
            if (modal_back) modal_back.remove();
        }, 300);
        openModalsCache -= 1;
    }
};

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal()
    }
});




// Other crap

function hexWithOpacity(hex, alpha) {
    if (/^#?[0-9a-fA-F]{3}$/.test(hex)) {
        hex = hex.replace(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, 
            (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`);
    }

    hex = hex.replace(/^#/, '');

    if (/^[0-9a-fA-F]{8}$/.test(hex)) {
        hex = hex.slice(0, 6);
    }

    if (!/^([0-9a-fA-F]{6})$/.test(hex)) {
        throw new Error('Invalid hex color format');
    }

    const clampedAlpha = Math.round(Math.min(Math.max(alpha, 0), 1) * 255);
    const alphaHex = clampedAlpha.toString(16).padStart(2, '0');

    return `#${hex}${alphaHex}`;
};



function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};
function processSummary(text) {
    const lines = text
        .replace(/\r?\n/g, '\\n')
        .split(/\\n/g);

    const processedLines = lines.map(line => {
        const trimmed = line.trim();
        const escaped = escapeHtml(trimmed);
        const linked = escaped.replace(
            /(https?:\/\/[^\s<>"']*[^.,!?()\[\]{}\s<>"'])/g,
            url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
        );
        return linked;
    });

    return processedLines.join('<br>');
};