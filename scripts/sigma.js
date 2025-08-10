// Config for if the artist accepts commissions
const commission_types = {
    MONEY: "Money",
    DISCORD_NITRO: "Nitro",
    DISCORD_COLLECTIBLES: "Discord Shop Items",
    STEAM_GIFTS: "Steam Gifts",
    KOFI: "Ko-fi Donations",
    NEGOTIABLE: "Payment is negotiable.",
};

// List of artists
const users = [
    {
        "name": "Unknown",
        "id": "1",
        "commissions": []
    },
    {
        "name": "Beep.Boop.The.Bot",
        "id": "2",
        "commissions": []
    },
    {
        "name": "The Crushing One",
        "id": "3",
        "commissions": []
    },
    {
        "name": "prince_purelight",
        "id": "4",
        "commissions": []
    },
    {
        "name": "lvnders_",
        "id": "5",
        "commissions": []
    },
    {
        "name": "doger",
        "id": "6",
        "commissions": []
    },
    {
        "name": "randomphineaszem",
        "id": "7",
        "commissions": []
    },
    {
        "name": "GFNAF",
        "id": "8",
        "commissions": []
    },
    {
        "name": "Rainydaysout",
        "id": "9",
        "commissions": []
    },
    {
        "name": "not_kasane.teto",
        "id": "10",
        "commissions": []
    },
    {
        "name": "glassconsumer69",
        "id": "11",
        "commissions": []
    },
    {
        "name": "dio._.brando.",
        "id": "12",
        "commissions": []
    },
    {
        "name": "Jenku",
        "id": "13",
        "commissions": []
    },
    {
        "name": "Png",
        "id": "14",
        "commissions": []
    },
    {
        "name": "Palco",
        "id": "15",
        "commissions": []
    },
    {
        "name": "Nexell",
        "id": "16",
        "commissions": []
    },
    {
        "name": "(Niko)",
        "id": "17",
        "commissions": []
    },
    {
        "name": "Katsu",
        "id": "18",
        "commissions": []
    },
    {
        "name": "x.zii",
        "id": "19",
        "commissions": []
    },
    {
        "name": "Wahoo",
        "id": "20",
        "commissions": []
    },
    {
        "name": "Sharsame",
        "id": "21",
        "commissions": []
    },
    {
        "name": "bpdlais",
        "id": "22",
        "commissions": []
    },
    {
        "name": "Seele",
        "id": "334062444718587905",
        "commissions": [
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
        "name": "Jelly",
        "id": "1147940825330876538",
        "commissions": []
    },
    {
        "name": "Ca-Cawthon",
        "id": "995651435519815772",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            }
        ]
    },
    {
        "name": "T8dyi",
        "id": "808325271949934652",
        "commissions": [
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            },
            {
                "type": "STEAM_GIFTS",
                "link": null
            }
        ]
    },
    {
        "name": "callievd",
        "id": "811114235966521364",
        "commissions": [
            {
                "type": "KOFI",
                "link": "https://ko-fi.com/c/6d9b88bc51"
            }
        ]
    },
    {
        "name": "BunBwon",
        "id": "845613407818088498",
        "commissions": [
            {
                "type": "NEGOTIABLE",
                "link": null
            }
        ]
    },
    {
        "name": "Nuki",
        "id": "1143994313034960967",
        "commissions": [
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
        "name": "Zin",
        "id": "452679089929846784",
        "commissions": [
            {
                "type": "NEGOTIABLE",
                "link": null
            }
        ]
    },
    {
        "name": "vinhwaiker",
        "id": "1088105926030000178",
        "commissions": [
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
        "name": "Alide",
        "id": "1096831760089763860",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    }
];

// Gets the user info from their id (if they're in the "users" list)
function findUser(id) {
    const user = users[users.findIndex(u => u.id === id)];
    if (user) {
        return {
            id: user.id,
            name: user.name,
            commissions: commissions(user.commissions)
        };
    } else return null
};

// Cleanly renders the users commissions from config
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

// List of categories and decors

// If a category has multiple artists, it requires each decor to have the artists credits
const categories =
[
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
        "name": "Library of Ruina",
        "banner": "ruina-banner.png",
        "artist_info": null,
        "artists": [
            findUser('9')
        ],
        "decorations": [
            {
                "name": "Animated Apocalypse Bird",
                "asset": "Animated Apocalypse Bird.png"
            },
            {
                "name": "Apocalypse Bird",
                "asset": "Apocalypse Bird.png"
            },
            {
                "name": "Blue Star",
                "asset": "Blue Star.png"
            },
            {
                "name": "Burrowing Heaven",
                "asset": "Burrowing Heaven.png"
            },
            {
                "name": "The Happy Teddy Bear Decor",
                "asset": "The Happy Teddy Bear Decor.png"
            },
            {
                "name": "The Price of Silence Decor",
                "asset": "The Price of Silence Decor.png"
            },
            {
                "name": "The Funeral of the Dead Butterflies",
                "asset": "The Funeral of the Dead Butterflies.png"
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
    },
    {
        "name": "Star Wars",
        "banner": "starwars-banner.png",
        "artist_info": null,
        "artists": [
            findUser('808325271949934652')
        ],
        "decorations": [
            {
                "name": "Kylo Ren First Order",
                "asset": "krfo.png"
            },
            {
                "name": "Kylo Ren Unignited Lightsaber",
                "asset": "krunignited.png"
            },
            {
                "name": "Kylo Ren Ignited Lightsaber",
                "asset": "krignited.png"
            },
            {
                "name": "Kylo Ren Animated",
                "asset": "kr_anim.png"
            },
            {
                "name": "Darth Vader",
                "asset": "vader.png"
            },
            {
                "name": "Obi-Wan Kenobi",
                "asset": "obk.png"
            },
            {
                "name": "Kylo Ren Dark Side",
                "asset": "kr_illsytds.png"
            },
            {
                "name": "Yoda May the Force be With You",
                "asset": "yoda_mtfbwy.png"
            },
            {
                "name": "Peeking Grogu",
                "asset": "Grogu.png"
            },
            {
                "name": "The Armorer",
                "asset": "ta.png"
            },
            {
                "name": "Mythosaur",
                "asset": "mys.png"
            },
            {
                "name": "Clan Mudhorn",
                "asset": "CM.png"
            },
            {
                "name": "Bo-Katan Kryze",
                "asset": "bkk.png"
            },
            {
                "name": "Dark Side",
                "asset": "ds_logo.png"
            },
            {
                "name": "Luke Skywalker",
                "asset": "LS.png"
            },
            {
                "name": "Luke Skywalker (no retraction)",
                "asset": "LSnr.png"
            },
            {
                "name": "Ahsoka Tano Lightsabers",
                "asset": "ATsaber.png"
            }
        ]
    },
    {
        "name": "Bugs",
        "banner": "1bugs-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Bee",
                "asset": "bee.png"
            },
            {
                "name": "Butterfly",
                "asset": "butterfly.png"
            },
            {
                "name": "Butterfly Blue Variant",
                "asset": "butterfly var.png"
            },
            {
                "name": "Fly",
                "asset": "fly.png"
            },
            {
                "name": "Moth",
                "asset": "moth.png"
            },
            {
                "name": "Roly Poly",
                "asset": "roly poly.png"
            }
        ]
    },
    {
        "name": "Monochrome",
        "banner": "monochrome-banner.png",
        "artist_info": null,
        "artists": [
            findUser('2')
        ],
        "decorations": [
            {
                "name": "All Black",
                "asset": "All Black.png"
            },
            {
                "name": "All White",
                "asset": "All White.png"
            },
            {
                "name": "Monokuma",
                "asset": "Monokuma.png"
            },
            {
                "name": "Monodam",
                "asset": "Monodam.png"
            },
            {
                "name": "Monokid",
                "asset": "Monokid.png"
            },
            {
                "name": "Monomi",
                "asset": "Monomi.png"
            },
            {
                "name": "Monophanie",
                "asset": "Monophanie.png"
            },
            {
                "name": "Monosuke",
                "asset": "Monosuke.png"
            },
            {
                "name": "Monotaro",
                "asset": "Monotaro.png"
            },
            {
                "name": "Usami",
                "asset": "Usami.png"
            },
            {
                "name": "Shuichis cap",
                "asset": "Shuichis cap.png"
            },
            {
                "name": "Kirigiri Ramen",
                "asset": "kirigiri ramen.png"
            },
            {
                "name": "Junkos Hair Pins",
                "asset": "Junkos hair pins.png"
            }
        ]
    },
    {
        "name": "Doodleys",
        "banner": "doodleys-banner.png",
        "artist_info": null,
        "artists": [
            findUser('3')
        ],
        "decorations": [
            {
                "name": "Appel",
                "asset": "Appel.png"
            },
            {
                "name": "Burnin'",
                "asset": "Burnin'.png"
            },
            {
                "name": "Fedora",
                "asset": "Fedora.png"
            },
            {
                "name": "Sleepy",
                "asset": "Sleepy.png"
            },
            {
                "name": "Yummers",
                "asset": "Yummers.png"
            }
        ]
    },
    {
        "name": "Angel X Devil",
        "banner": "angelxdevil-banner.png",
        "artist_info": null,
        "artists": [
            findUser('4')
        ],
        "decorations": [
            {
                "name": "Angel Halo",
                "asset": "angel halo.png"
            },
            {
                "name": "Angel Label",
                "asset": "angel label.png"
            },
            {
                "name": "Angel Wings",
                "asset": "angel wings.png"
            },
            {
                "name": "Devil Horn",
                "asset": "devil horn.png"
            },
            {
                "name": "Devil Label",
                "asset": "devil label.png"
            },
            {
                "name": "Devil Wings",
                "asset": "devil wings.png"
            }
        ]
    },
    {
        "name": "SkyDreams",
        "banner": "skydreams-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Cloud Platform",
                "asset": "CloudPlatform.png"
            },
            {
                "name": "Cloud Platform (Alt)",
                "asset": "CloudPlatform(Alt).png"
            },
            {
                "name": "Side Clouds",
                "asset": "SideClouds.png"
            },
            {
                "name": "Starry Night",
                "asset": "StarryNight.png"
            },
            {
                "name": "Starry Night (Alt)",
                "asset": "StarryNight(Alt).png"
            },
            {
                "name": "Sunny Day",
                "asset": "SunnyDay.png"
            }
        ]
    },
    {
        "name": "Color Mass",
        "banner": "colormass-banner.png",
        "artist_info": null,
        "artists": [
            findUser('845613407818088498')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Black Spike Crimson",
                "asset": "Black Spike  Crimson 2.png"
            },
            {
                "name": "Black Spike Cherise",
                "asset": "Black Spike Cherise 2.png"
            },
            {
                "name": "Black Spike Barbie Pink",
                "asset": "Black Spike Barbie Pink 2.png"
            },
            {
                "name": "Black Spike Phlox",
                "asset": "Black Spike Phlox 2.png"
            },
            {
                "name": "Black Spike Veronica",
                "asset": "Black Spike Veronica 2.png"
            },
            {
                "name": "Black Spike Bluebonnet",
                "asset": "Black Spike Bluebonnet 2.png"
            },
            {
                "name": "Black Spike Azure",
                "asset": "Black Spike Azure 2.png"
            },
            {
                "name": "Black Spike Capri",
                "asset": "Black Spike Capri 2.png"
            },
            {
                "name": "Black Spike Fluorescent Blue",
                "asset": "Black Spike Fluorescent Blue 2.png"
            },
            {
                "name": "Black Spike Munsell 5G",
                "asset": "Black Spike Munsell 5G 2.png"
            },
            {
                "name": "Black Spike Erin",
                "asset": "Black Spike Erin 2.png"
            },
            {
                "name": "Black Spike Harlequin",
                "asset": "Black Spike Harlequin 2.png"
            },
            {
                "name": "Black Spike Acid Green",
                "asset": "Black Spike Acid Green 2.png"
            },
            {
                "name": "Black Spike Chartreuse",
                "asset": "Black Spike Chartreuse 2.png"
            },
            {
                "name": "Black Spike Lemon",
                "asset": "Black Spike Lemon 2.png"
            },
            {
                "name": "Black Spike Saffron",
                "asset": "Black Spike Saffron 2.png"
            },
            {
                "name": "Black Spike Butterscotch",
                "asset": "Black Spike Butterscotch 2.png"
            },
            {
                "name": "Black Spike Safety Orange",
                "asset": "Black Spike Safety Orange 2.png"
            },
            {
                "name": "Black Spike Tangelo",
                "asset": "Black Spike Tangelo 2.png"
            },
            {
                "name": "Black Spike Vermillion",
                "asset": "Black Spike Vermillion 2.png"
            },
            {
                "name": "Black Wave Crimson",
                "asset": "Black Wave Crimson 2.png"
            },
            {
                "name": "Black Wave Cherise",
                "asset": "Black Wave Cherise 2.png"
            },
            {
                "name": "Black Wave Barbie Pink",
                "asset": "Black Wave Barbie Pink 2.png"
            },
            {
                "name": "Black Wave Phlox",
                "asset": "Black Wave Phlox 2.png"
            },
            {
                "name": "Black Wave Veronica",
                "asset": "Black Wave Veronica 2.png"
            },
            {
                "name": "Black Wave Bluebonnet",
                "asset": "Black Wave Bluebonnet 2.png"
            },
            {
                "name": "Black Wave Azure",
                "asset": "Black Wave Azure 2.png"
            },
            {
                "name": "Black Wave Capri",
                "asset": "Black Wave Capri 2.png"
            },
            {
                "name": "Black Wave Fluorescent Blue",
                "asset": "Black Wave Fluorescent Blue 2.png"
            },
            {
                "name": "Black Wave Munsell 5G",
                "asset": "Black Wave Munsell 5G 2.png"
            },
            {
                "name": "Black Wave Erin",
                "asset": "Black Wave Erin 2.png"
            },
            {
                "name": "Black Wave Harlequin",
                "asset": "Black Wave Harlequin 2.png"
            },
            {
                "name": "Black Wave Acid Green",
                "asset": "Black Wave Acid Green 2.png"
            },
            {
                "name": "Black Wave Chartreuse",
                "asset": "Black Wave Chartreuse 2.png"
            },
            {
                "name": "Black Wave Lemon",
                "asset": "Black Wave Lemon 2.png"
            },
            {
                "name": "Black Wave Saffron",
                "asset": "Black Wave Saffron 2.png"
            },
            {
                "name": "Black Wave Butterscotch",
                "asset": "Black Wave Butterscotch 2.png"
            },
            {
                "name": "Black Wave Safety Orange",
                "asset": "Black Wave Safety Orange 2.png"
            },
            {
                "name": "Black Wave Tangelo",
                "asset": "Black Wave Tangelo 2.png"
            },
            {
                "name": "Black Wave Vermillion",
                "asset": "Black Wave Vermillion 2.png"
            },
            {
                "name": "White Spike Bubblegum",
                "asset": "White Spike Bubblegum 2.png"
            },
            {
                "name": "White Spike Rose Pompadour",
                "asset": "White Spike Rose Pompadour 2.png"
            },
            {
                "name": "White Spike Rose Pink",
                "asset": "White Spike Rose Pink 2.png"
            },
            {
                "name": "White Spike Ultra Pink",
                "asset": "White Spike Ultra Pink 2.png"
            },
            {
                "name": "White Spike Lavender",
                "asset": "White Spike Lavender 2.png"
            },
            {
                "name": "White Spike Cornflower",
                "asset": "White Spike Cornflower 2.png"
            },
            {
                "name": "White Spike Maya Blue",
                "asset": "White Spike Maya Blue 2.png"
            },
            {
                "name": "White Spike Sky Blue",
                "asset": "White Spike Sky Blue 2.png"
            },
            {
                "name": "White Spike Celeste",
                "asset": "White Spike Celeste 2.png"
            },
            {
                "name": "White Spike Celadon",
                "asset": "White Spike Celadon 2.png"
            },
            {
                "name": "White Spike Pale Green",
                "asset": "White Spike Pale Green 2.png"
            },
            {
                "name": "White Spike Mantis",
                "asset": "White Spike Mantis 2.png"
            },
            {
                "name": "White Spike Green Tea",
                "asset": "White Spike Green Tea 2.png"
            },
            {
                "name": "White Spike Calamansi",
                "asset": "White Spike Calamansi 2.png"
            },
            {
                "name": "White Spike Mellow Yellow 2",
                "asset": "White Spike Mellow Yellow 2.png"
            },
            {
                "name": "White Spike Moccasin",
                "asset": "White Spike Moccasin 2.png"
            },
            {
                "name": "White Spike Apricot",
                "asset": "White Spike Apricot 2.png"
            },
            {
                "name": "White Spike Coral",
                "asset": "White Spike Coral 2.png"
            },
            {
                "name": "White Spike Atomic Tangerine",
                "asset": "White Spike Atomic Tangerine 2.png"
            },
            {
                "name": "White Spike Tango",
                "asset": "White Spike Tango 2.png"
            },
            {
                "name": "White Wave Bubblegum",
                "asset": "White Wave Bubblegum 2.png"
            },
            {
                "name": "White Wave Rose Pompadour",
                "asset": "White Wave Rose Pompadour 2.png"
            },
            {
                "name": "White Wave Rose Pink",
                "asset": "White Wave Rose Pink 2.png"
            },
            {
                "name": "White Wave Ultra Pink",
                "asset": "White Wave Ultra Pink 2.png"
            },
            {
                "name": "White Wave Lavender",
                "asset": "White Wave Lavender 2.png"
            },
            {
                "name": "White Wave Cornflower",
                "asset": "White Wave Cornflower 2.png"
            },
            {
                "name": "White Wave Maya Blue",
                "asset": "White Wave Maya Blue 2.png"
            },
            {
                "name": "White Wave Sky Blue",
                "asset": "White Wave Sky Blue 2.png"
            },
            {
                "name": "White Wave Celeste",
                "asset": "White Wave Celeste 2.png"
            },
            {
                "name": "White Wave Celadon",
                "asset": "White Wave Celadon 2.png"
            },
            {
                "name": "White Wave Pale Green",
                "asset": "White Wave Pale Green 2.png"
            },
            {
                "name": "White Wave Mantis",
                "asset": "White Wave Mantis 2.png"
            },
            {
                "name": "White Wave Green Tea",
                "asset": "White Wave Green Tea 2.png"
            },
            {
                "name": "White Wave Calamansi",
                "asset": "White Wave Calamansi 2.png"
            },
            {
                "name": "White Wave Mellow Yellow",
                "asset": "White Wave Mellow Yellow 2.png"
            },
            {
                "name": "White Wave Moccasin",
                "asset": "White Wave Moccasin 2.png"
            },
            {
                "name": "White Wave Apricot",
                "asset": "White Wave Apricot 2.png"
            },
            {
                "name": "White Wave Coral",
                "asset": "White Wave Coral 2.png"
            },
            {
                "name": "White Wave Atomic Tangerine",
                "asset": "White Wave Atomic Tangerine 2.png"
            },
            {
                "name": "White Wave Tango",
                "asset": "White Wave Tango 2.png"
            },
            {
                "name": "Black Wave Crimson (No Status)",
                "asset": "Black Wave Crimson.png"
            },
            {
                "name": "Black Wave Cherise (No Status)",
                "asset": "Black Wave Cherise.png"
            },
            {
                "name": "Black Wave Barbie Pink (No Status)",
                "asset": "Black Wave Barbie Pink.png"
            },
            {
                "name": "Black Wave Phlox (No Status)",
                "asset": "Black Wave Phlox.png"
            },
            {
                "name": "Black Wave Veronica (No Status)",
                "asset": "Black Wave Veronica.png"
            },
            {
                "name": "Black Wave Bluebonnet (No Status)",
                "asset": "Black Wave Bluebonnet.png"
            },
            {
                "name": "Black Wave Azure (No Status)",
                "asset": "Black Wave Azure.png"
            },
            {
                "name": "Black Wave Capri (No Status)",
                "asset": "Black Wave Capri.png"
            },
            {
                "name": "Black Wave Fluerescent Blue (No Status)",
                "asset": "Black Wave Fluerescent Blue.png"
            },
            {
                "name": "Black Wave Munsell 5G (No Status)",
                "asset": "Black Wave Munsell 5G.png"
            },
            {
                "name": "Black Wave Erin (No Status)",
                "asset": "Black Wave Erin.png"
            },
            {
                "name": "Black Wave Harlequin (No Status)",
                "asset": "Black Wave Harlequin.png"
            },
            {
                "name": "Black Wave Acid Green (No Status)",
                "asset": "Black Wave Acid Green.png"
            },
            {
                "name": "Black Wave Chartreuse (No Status)",
                "asset": "Black Wave Chartreuse.png"
            },
            {
                "name": "Black Wave Lemon (No Status)",
                "asset": "Black Wave Lemon.png"
            },
            {
                "name": "Black Wave Saffron (No Status)",
                "asset": "Black Wave Saffron.png"
            },
            {
                "name": "Black Wave Butterscotch (No Status)",
                "asset": "Black Wave Butterscotch.png"
            },
            {
                "name": "Black Wave Safety Orange (No Status)",
                "asset": "Black Wave Safety Orange.png"
            },
            {
                "name": "Black Wave Tangelo (No Status)",
                "asset": "Black Wave Tangelo.png"
            },
            {
                "name": "Black Wave Vermillion (No Status)",
                "asset": "Black Wave Vermillion.png"
            },
            {
                "name": "Black Spike Crimson (No Status)",
                "asset": "Black Spike Crimson.png"
            },
            {
                "name": "Black Spike Cherise (No Status)",
                "asset": "Black Spike Cherise.png"
            },
            {
                "name": "Black Spike Barbie Pink (No Status)",
                "asset": "Black Spike Barbie Pink.png"
            },
            {
                "name": "Black Spike Phlox (No Status)",
                "asset": "Black Spike Phlox.png"
            },
            {
                "name": "Black Spike Veronica (No Status)",
                "asset": "Black Spike Veronica.png"
            },
            {
                "name": "Black Spike Bluebonnet (No Status)",
                "asset": "Black Spike Bluebonnet.png"
            },
            {
                "name": "Black Spike Azure (No Status)",
                "asset": "Black Spike Azure.png"
            },
            {
                "name": "Black Spike Capri (No Status)",
                "asset": "Black Spike Capri.png"
            },
            {
                "name": "Black Spike Fluorescent Blue (No Status)",
                "asset": "Black Spike Fluorescent Blue.png"
            },
            {
                "name": "Black Spike Munsell 5G (No Status)",
                "asset": "Black Spike Munsell 5G.png"
            },
            {
                "name": "Black Spike Erin (No Status)",
                "asset": "Black Spike Erin.png"
            },
            {
                "name": "Black Spike Harlequin (No Status)",
                "asset": "Black Spike Harlequin.png"
            },
            {
                "name": "Black Spike Acid Green (No Status)",
                "asset": "Black Spike Acid Green.png"
            },
            {
                "name": "Black Spike Chartreuse (No Status)",
                "asset": "Black Spike Chartreuse.png"
            },
            {
                "name": "Black Spike Lemon (No Status)",
                "asset": "Black Spike Lemon.png"
            },
            {
                "name": "Black Spike Saffron (No Status)",
                "asset": "Black Spike Saffron.png"
            },
            {
                "name": "Black Spike Butterscotch (No Status)",
                "asset": "Black Spike Butterscotch.png"
            },
            {
                "name": "Black Spike Safety Orange (No Status)",
                "asset": "Black Spike Safety Orange.png"
            },
            {
                "name": "Black Spike Tangelo (No Status)",
                "asset": "Black Spike Tangelo.png"
            },
            {
                "name": "Black Spike Vermillion (No Status)",
                "asset": "Black Spike Vermillion.png"
            },
            {
                "name": "White Wave Bubblegum (No Status)",
                "asset": "White Wave Bubblegum.png"
            },
            {
                "name": "White Wave Rose Pompadour (No Status)",
                "asset": "White Wave Rose Pompadour.png"
            },
            {
                "name": "White Wave Rose Pink (No Status)",
                "asset": "White Wave Rose Pink.png"
            },
            {
                "name": "White Wave Ultra Pink (No Status)",
                "asset": "White Wave Ultra Pink.png"
            },
            {
                "name": "White Wave Lavender (No Status)",
                "asset": "White Wave Lavender.png"
            },
            {
                "name": "White Wave Cornflower (No Status)",
                "asset": "White Wave Cornflower.png"
            },
            {
                "name": "White Wave Maya Blue (No Status)",
                "asset": "White Wave Maya Blue.png"
            },
            {
                "name": "White Wave Sky Blue (No Status)",
                "asset": "White Wave Sky Blue.png"
            },
            {
                "name": "White Wave Celeste (No Status)",
                "asset": "White Wave Celeste.png"
            },
            {
                "name": "White Wave Celadon (No Status)",
                "asset": "White Wave Celadon.png"
            },
            {
                "name": "White Wave Pale Green (No Status)",
                "asset": "White Wave Pale Green.png"
            },
            {
                "name": "White Wave Mantis (No Status)",
                "asset": "White Wave Mantis.png"
            },
            {
                "name": "White Wave Green Tea (No Status)",
                "asset": "White Wave Green Tea.png"
            },
            {
                "name": "White Wave Calamansi (No Status)",
                "asset": "White Wave Calamansi.png"
            },
            {
                "name": "White Wave Mellow Yellow (No Status)",
                "asset": "White Wave Mellow Yellow.png"
            },
            {
                "name": "White Wave Moccasin (No Status)",
                "asset": "White Wave Moccasin.png"
            },
            {
                "name": "White Wave Apricot (No Status)",
                "asset": "White Wave Apricot.png"
            },
            {
                "name": "White Wave Coral (No Status)",
                "asset": "White Wave Coral.png"
            },
            {
                "name": "White Wave Atomic Tangerine (No Status)",
                "asset": "White Wave Atomic Tangerine.png"
            },
            {
                "name": "White Wave Tango (No Status)",
                "asset": "White Wave Tango.png"
            },
            {
                "name": "White Spike Bubblegum (No Status)",
                "asset": "White Spike Bubblegum.png"
            },
            {
                "name": "White Spike Rose Pompadour (No Status)",
                "asset": "White Spike Rose Pompadour.png"
            },
            {
                "name": "White Spike Rose Pink (No Status)",
                "asset": "White Spike Rose Pink.png"
            },
            {
                "name": "White Spike Ultra Pink (No Status)",
                "asset": "White Spike Ultra Pink.png"
            },
            {
                "name": "White Spike Lavender (No Status)",
                "asset": "White Spike Lavender.png"
            },
            {
                "name": "White Spike Cornflower (No Status)",
                "asset": "White Spike Cornflower.png"
            },
            {
                "name": "White Spike Maya Blue (No Status)",
                "asset": "White Spike Maya Blue.png"
            },
            {
                "name": "White Spike Sky Blue (No Status)",
                "asset": "White Spike Sky Blue.png"
            },
            {
                "name": "White Spike Celeste (No Status)",
                "asset": "White Spike Celeste.png"
            },
            {
                "name": "White Spike Celadon (No Status)",
                "asset": "White Spike Celadon.png"
            },
            {
                "name": "White Spike Pale Green (No Status)",
                "asset": "White Spike Pale Green.png"
            },
            {
                "name": "White Spike Mantis (No Status)",
                "asset": "White Spike Mantis.png"
            },
            {
                "name": "White Spike Green Tea (No Status)",
                "asset": "White Spike Green Tea.png"
            },
            {
                "name": "White Spike Calamansi (No Status)",
                "asset": "White Spike Calamansi.png"
            },
            {
                "name": "White Spike Mellow Yellow (No Status)",
                "asset": "White Spike Mellow Yellow.png"
            },
            {
                "name": "White Spike Moccasin (Status)",
                "asset": "White Spike Moccasin.png"
            },
            {
                "name": "White Spike Apricot (No Status)",
                "asset": "White Spike Apricot.png"
            },
            {
                "name": "White Spike Atomic Tangerine (No Status)",
                "asset": "White Spike Atomic Tangerine.png"
            },
            {
                "name": "White Spike Coral (No Status)",
                "asset": "White Spike Coral.png"
            },
            {
                "name": "White Spike Tango (No Status)",
                "asset": "White Spike Tango.png"
            },
            {
                "name": "Black Spike (No Status)",
                "asset": "Black Spike.png"
            },
            {
                "name": "Black Wave (No Status)",
                "asset": "Black Wave.png"
            },
            {
                "name": "White Spike (No Status)",
                "asset": "White Spike.png"
            },
            {
                "name": "White Wave (No Status)",
                "asset": "White Wave.png"
            },
            {
                "name": "Black Spike",
                "asset": "Black Spike 2.png"
            },
            {
                "name": "Black Wave",
                "asset": "Black Wave 2.png"
            },
            {
                "name": "White Spike",
                "asset": "White Spike 2.png"
            },
            {
                "name": "White Wave",
                "asset": "White Wave 2.png"
            },
            {
                "name": "Black Spike On White (No Status)",
                "asset": "Black Spike On White.png"
            },
            {
                "name": "Black Wave On White (No Status)",
                "asset": "Black Wave On White.png"
            },
            {
                "name": "White Spike On Black (No Status)",
                "asset": "White Spike On Black.png"
            },
            {
                "name": "White Wave On Black (No Status)",
                "asset": "White Wave On Black.png"
            },
            {
                "name": "Black Spike On White",
                "asset": "Black Spike On White 2.png"
            },
            {
                "name": "Black Wave On White",
                "asset": "Black Wave On White 2.png"
            },
            {
                "name": "White Spike On Black",
                "asset": "White Spike On Black 2.png"
            },
            {
                "name": "White Wave On Black",
                "asset": "White Wave On Black 2.png"
            },
            {
                "name": "Black Spike Rainbow (No Status)",
                "asset": "Black Spike Rainbow.png"
            },
            {
                "name": "Black Wave Rainbow (No Status)",
                "asset": "Black Wave Rainbow.png"
            },
            {
                "name": "White Spike Rainbow (No Status)",
                "asset": "White Spike Rainbow.png"
            },
            {
                "name": "White Wave Rainbow (No Status)",
                "asset": "White Wave Rainbow.png"
            },
            {
                "name": "Black Spike Rainbow",
                "asset": "Black Spike Rainbow 2.png"
            },
            {
                "name": "Black Wave Rainbow",
                "asset": "Black Wave Rainbow 2.png"
            },
            {
                "name": "White Spike Rainbow",
                "asset": "White Spike Rainbow 2.png"
            },
            {
                "name": "White Wave Rainbow",
                "asset": "White Wave Rainbow 2.png"
            }
        ]
    },
    {
        "name": "Formula 1",
        "banner": "1formula1-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Tsunoda",
                "asset": "tsunoda.png"
            },
            {
                "name": "Verstappen",
                "asset": "verstappen.png"
            },
            {
                "name": "Hadjar",
                "asset": "hadjar.png"
            },
            {
                "name": "Lawson",
                "asset": "lawson.png"
            },
            {
                "name": "Bearman",
                "asset": "bearman.png"
            },
            {
                "name": "Ocon",
                "asset": "ocon.png"
            },
            {
                "name": "Bortoleto",
                "asset": "bortoleto.png"
            },
            {
                "name": "Hulkenberg",
                "asset": "hulkenberg.png"
            },
            {
                "name": "Alonso",
                "asset": "alonso.png"
            },
            {
                "name": "Stroll",
                "asset": "stroll.png"
            },
            {
                "name": "Piastri",
                "asset": "piastri.png"
            },
            {
                "name": "Norris",
                "asset": "norris.png"
            },
            {
                "name": "Hamilton",
                "asset": "hamilton.png"
            },
            {
                "name": "Leclerc",
                "asset": "leclerc.png"
            },
            {
                "name": "Albon",
                "asset": "albon.png"
            },
            {
                "name": "Sainz",
                "asset": "sainz.png"
            },
            {
                "name": "Antonelli",
                "asset": "antonelli.png"
            },
            {
                "name": "Russell",
                "asset": "russel.png"
            },
            {
                "name": "Colapinto",
                "asset": "colapinto.png"
            },
            {
                "name": "Doohan",
                "asset": "doohan.png"
            },
            {
                "name": "Gasly",
                "asset": "gasly.png"
            },
            {
                "name": "Bianchi",
                "asset": "bianchi.png"
            },
            {
                "name": "Perez",
                "asset": "perez.png"
            },
            {
                "name": "Raikkonen",
                "asset": "raikkonen.png"
            },
            {
                "name": "Ricciardo",
                "asset": "ricciardo.png"
            },
            {
                "name": "Rosberg",
                "asset": "rosberg.png"
            },
            {
                "name": "Sargeant",
                "asset": "sargeant.png"
            },
            {
                "name": "Schumacher",
                "asset": "schumacher.png"
            },
            {
                "name": "Senna",
                "asset": "senna.png"
            },
            {
                "name": "Vettel",
                "asset": "vettel.png"
            },
            {
                "name": "Webber",
                "asset": "webber.png"
            },
            {
                "name": "Red Bull",
                "asset": "red bull.png"
            },
            {
                "name": "Vcarb",
                "asset": "vcarb.png"
            },
            {
                "name": "Haas",
                "asset": "haas.png"
            },
            {
                "name": "Sauber",
                "asset": "sauber.png"
            },
            {
                "name": "Aston Martin",
                "asset": "aston martin.png"
            },
            {
                "name": "McLaren",
                "asset": "mclaren.png"
            },
            {
                "name": "Ferrari",
                "asset": "ferrari.png"
            },
            {
                "name": "Williams",
                "asset": "williams.png"
            },
            {
                "name": "Mercedes",
                "asset": "mercedes.png"
            },
            {
                "name": "Alpine",
                "asset": "alpine.png"
            }
        ]
    },
    {
        "name": "Beat Saber",
        "banner": "beatsaber-banner.png",
        "artist_info": null,
        "artists": [
            findUser('6')
        ],
        "decorations": [
            {
                "name": "Beat Sabers",
                "asset": "Beat Sabers.png"
            },
            {
                "name": "Big Slash (Blue)",
                "asset": "Big Slash (Blue).png"
            },
            {
                "name": "Big Slash (Red)",
                "asset": "Big Slash (Red).png"
            },
            {
                "name": "Bombs",
                "asset": "Bombs.png"
            },
            {
                "name": "The Bloq (Blue)",
                "asset": "The Bloq (Blue).png"
            },
            {
                "name": "The Bloq (Red)",
                "asset": "The Bloq (Red).png"
            },
            {
                "name": "The Walls",
                "asset": "The Walls.png"
            }
        ]
    },
    {
        "name": "ANGRY BIRDS",
        "banner": "angrybirds-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "AB Wood Block",
                "asset": "AB Wood Block Decor.png"
            },
            {
                "name": "AB Glass Block",
                "asset": "AB Glass Block Decor.png"
            },
            {
                "name": "AB Stone Block",
                "asset": "AB Stone Block Decor.png"
            },
            {
                "name": "AB Cheetos Logo",
                "asset": "AB Cheetos Logo Decor.png"
            },
            {
                "name": "AB Coca Cola Logo",
                "asset": "AB Coca Cola Logo Decor.png"
            },
            {
                "name": "AB Seasons Easter Egg Logo",
                "asset": "AB Seasons Easter Egg Logo Decor.png"
            },
            {
                "name": "AB Logo",
                "asset": "AB Logo Decor.png"
            },
            {
                "name": "AB Space Logo",
                "asset": "AB Space Logo Decor.png"
            },
            {
                "name": "AB Space Vuela Tazos Logo",
                "asset": "AB Space Vuela Tazos Logo Decor.png"
            },
            {
                "name": "Attack Of Darth Maul",
                "asset": "Attack Of Darth Maul Decor.png"
            },
            {
                "name": "Darth Vader",
                "asset": "Darth Vader Decor.png"
            },
            {
                "name": "Solar System",
                "asset": "Solar System Decor.png"
            },
            {
                "name": "Pork Federation",
                "asset": "Pork Federation Decor.png"
            },
            {
                "name": "Bomb Space",
                "asset": "Bomb Space Decor.png"
            },
            {
                "name": "Mynock Pigs",
                "asset": "Mynock Pigs Decor.png"
            },
            {
                "name": "Electric Bomb",
                "asset": "Electric Bomb Decor.png"
            },
            {
                "name": "Red Space",
                "asset": "Red Space Decor.png"
            },
            {
                "name": "King Pig",
                "asset": "King Pig Decor.png"
            },
            {
                "name": "Stars",
                "asset": "Stars Decor.png"
            }
        ]
    },
    {
        "name": "RDR2",
        "banner": "rdr2-banner.png",
        "artist_info": null,
        "artists": [
            findUser('8')
        ],
        "decorations": [
            {
                "name": "Arthur",
                "asset": "Arthur.png"
            },
            {
                "name": "Dutch",
                "asset": "Dutch.png"
            },
            {
                "name": "Hosea",
                "asset": "Hosea.png"
            },
            {
                "name": "John",
                "asset": "John.png"
            },
            {
                "name": "Sadie",
                "asset": "Sadie.png"
            },
            {
                "name": "RDR II",
                "asset": "RDR_II.png"
            }
        ]
    },
    {
        "name": "EASTER",
        "banner": "easter-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967'),
            findUser('452679089929846784'),
            findUser('811114235966521364'),
            findUser('1088105926030000178'),
            findUser('10')
        ],
        "decorations": [
            {
                "name": "Bunnie",
                "artist": findUser('1143994313034960967'),
                "asset": "bunnie by pixie.png"
            },
            {
                "name": "Choco Bunny",
                "artist": findUser('1143994313034960967'),
                "asset": "choco bunny by pixie.png"
            },
            {
                "name": "Egg Basket",
                "artist": findUser('1143994313034960967'),
                "asset": "egg basket by pixie.png"
            },
            {
                "name": "Community Eggs",
                "artist": findUser('452679089929846784'),
                "asset": "fixed community eggs by zin.png"
            },
            {
                "name": "Easter Bunny",
                "artist": findUser('811114235966521364'),
                "asset": "easter bunny by cal.png"
            },
            {
                "name": "Easter Egg",
                "artist": findUser('811114235966521364'),
                "asset": "easter egg by cal.png"
            },
            {
                "name": "Egg Basket",
                "artist": findUser('811114235966521364'),
                "asset": "egg basket by cal.png"
            },
            {
                "name": "Egg Bowl",
                "artist": findUser('811114235966521364'),
                "asset": "egg bowl by cal.png"
            },
            {
                "name": "Eggs in Grass",
                "artist": findUser('811114235966521364'),
                "asset": "eggs in grass by cal.png"
            },
            {
                "name": "Grass Egg",
                "artist": findUser('1088105926030000178'),
                "asset": "grass egg by sharr.png"
            },
            {
                "name": "Pastel Blue Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel blue easter decor by teto.png"
            },
            {
                "name": "Pastel Cyan Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel cyan easter decor by teto.png"
            },
            {
                "name": "Pastel Green Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel green easter decor by teto.png"
            },
            {
                "name": "Pastel Mint Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel mint easter decor by teto.png"
            },
            {
                "name": "Pastel Orange Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel orange easter decor by teto.png"
            },
            {
                "name": "Pastel Pink Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel pink easter decor by teto.png"
            },
            {
                "name": "Pastel Red Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel red easter decor by teto.png"
            },
            {
                "name": "Pastel Teal Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel teal easter decor by teto.png"
            },
            {
                "name": "Pastel Yellow Easter Decor",
                "artist": findUser('10'),
                "asset": "pastel yellow easter decor by teto.png"
            }
        ]
    },
    {
        "name": "BLOONS",
        "banner": "bloons-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1088105926030000178')
        ],
        "decorations": [
            {
                "name": "Adora",
                "asset": "adora.png"
            },
            {
                "name": "Benjamin",
                "asset": "benjamin.png"
            },
            {
                "name": "Brickell",
                "asset": "brickell.png"
            },
            {
                "name": "Churchill",
                "asset": "churchill.png"
            },
            {
                "name": "Corvus",
                "asset": "corvus.png"
            },
            {
                "name": "Etienne",
                "asset": "etienne.png"
            },
            {
                "name": "Ezili",
                "asset": "ezili.png"
            },
            {
                "name": "Gwendolin",
                "asset": "gwendolin.png"
            },
            {
                "name": "Jones",
                "asset": "jones.png"
            },
            {
                "name": "Obyn",
                "asset": "obyn.png"
            },
            {
                "name": "Pat",
                "asset": "pat.png"
            },
            {
                "name": "Psi",
                "asset": "psi.png"
            },
            {
                "name": "Quincy",
                "asset": "quincy.png"
            },
            {
                "name": "Alchemist",
                "asset": "004-Alchemistdecorx.png"
            },
            {
                "name": "Boomerang Monkey",
                "asset": "500-BoomerangMonkeyDecorx.png"
            },
            {
                "name": "Sniper Monkey",
                "asset": "500-SniperMonkeydecorx.png"
            },
            {
                "name": "Geraldox",
                "asset": "geraldox.png"
            },
            {
                "name": "Outclassed by icicle",
                "asset": "out-classed-by-icicle-impalex.png"
            },
            {
                "name": "Rosaliax",
                "asset": "rosaliax.png"
            },
            {
                "name": "True Sun Godx",
                "asset": "truesungodx.png"
            },
            {
                "name": "005-Super Monkey",
                "asset": "005-SuperMonkeydecor.png"
            },
            {
                "name": "005-Wizard Monkey",
                "asset": "005-WizardMokeydecor.png"
            },
            {
                "name": "050-Druid Monkey",
                "asset": "050-DruidMonkeydecor.png"
            },
            {
                "name": "050-Engineer Monkey",
                "asset": "050-EngineerMonkeydecor.png"
            },
            {
                "name": "050-Ice Monkey",
                "asset": "050-IceMonkeydecor.png"
            },
            {
                "name": "500-Monkey Submarine",
                "asset": "500-MonkeySubmarinedecor.png"
            },
            {
                "name": "500-Ninja Monkey",
                "asset": "500-NinjaMonkeydecor.png"
            }
        ]
    },
    {
        "name": "BAKERS",
        "banner": "nuki-bakery-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Pink Boba",
                "asset": "pinkboba.png"
            },
            {
                "name": "Cherry On Top",
                "asset": "cherryontop.png"
            },
            {
                "name": "Chocolate Roll",
                "asset": "choco_roll.png"
            },
            {
                "name": "Strawberry Roll",
                "asset": "strawberry_roll.png"
            },
            {
                "name": "Cookie",
                "asset": "cookie.png"
            },
            {
                "name": "Croissant",
                "asset": "croissant.png"
            },
            {
                "name": "Crumb",
                "asset": "crumb.png"
            },
            {
                "name": "Pink Cupcake Circle",
                "asset": "pinkcupcake.png"
            },
            {
                "name": "Cupcake Tray",
                "asset": "cupcaketray.png"
            },
            {
                "name": "Mixing Bowl",
                "asset": "mixingbowl.png"
            },
            {
                "name": "Pie Slice",
                "asset": "pieslice.png"
            },
            {
                "name": "Strawberries",
                "asset": "strawberries.png"
            },
            {
                "name": "Sundae Bowl",
                "asset": "sundaebowl.png"
            }
        ]
    },
    {
        "name": "STARCRAFT",
        "banner": "starcraft-banner.png",
        "artist_info": null,
        "artists": [
            findUser('11')
        ],
        "decorations": [
            {
                "name": "Protoss",
                "asset": "protoss.png"
            },
            {
                "name": "Protoss Green",
                "asset": "Protoss_green.png"
            },
            {
                "name": "Protoss Purple",
                "asset": "Protoss_purp.png"
            },
            {
                "name": "Terran",
                "asset": "terran.png"
            },
            {
                "name": "Terran Green",
                "asset": "terran_green.png"
            },
            {
                "name": "Terran Red",
                "asset": "terran_red.png"
            },
            {
                "name": "Zerg",
                "asset": "zerg.png"
            },
            {
                "name": "Zerg Green",
                "asset": "Zerg_green.png"
            },
            {
                "name": "Zerg Pink",
                "asset": "Zerg_pink.png"
            },
            {
                "name": "Zerg Purple",
                "asset": "Zerg_purp.png"
            }
        ]
    },
    {
        "name": "limbus",
        "banner": "limbus-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1096831760089763860')
        ],
        "decorations": [
            {
                "name": "don_quixote",
                "asset": "don_quixote.png"
            },
            {
                "name": "Heathcliff",
                "asset": "heathcliff.png"
            },
            {
                "name": "Hong Lu",
                "asset": "hong_lu.png"
            },
            {
                "name": "Ishmael",
                "asset": "ishmael.png"
            },
            {
                "name": "Meursault",
                "asset": "meursault.png"
            },
            {
                "name": "Middle Brother",
                "asset": "middle_brother.png"
            },
            {
                "name": "Ryoshu",
                "asset": "ryoshu.png"
            }
        ]
    },
    {
        "name": "JOJO",
        "banner": "jojo-banner.png",
        "artist_info": null,
        "artists": [
            findUser('12')
        ],
        "decorations": [
            {
                "name": "Aerosmith",
                "asset": "Aerosmith.png"
            },
            {
                "name": "bitesthedustunderrr",
                "asset": "bitesthedustunderrr.png"
            },
            {
                "name": "Echoes Act 1",
                "asset": "echoes_act_1.png"
            },
            {
                "name": "Echoes Act 2",
                "asset": "echoes_act_2.png"
            },
            {
                "name": "Hermit",
                "asset": "hermit.png"
            },
            {
                "name": "Killer Queen",
                "asset": "killer_queen.png"
            },
            {
                "name": "Six Pistols",
                "asset": "SixPistols.png"
            }
        ]
    },
    {
        "name": "DORITOS",
        "banner": "doritos-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "American Doritos",
                "asset": "Ameican_Doritos_Decor.png"
            },
            {
                "name": "Cheese Doritos",
                "asset": "Cheese_Doritos_Decor.png"
            },
            {
                "name": "Flaming Hot Doritos",
                "asset": "Flaming_Hot_Doritos_Decor.png"
            },
            {
                "name": "Mountain Dew Doritos",
                "asset": "Mountain_Dew_Doritos_Decor.png"
            },
            {
                "name": "Rainbow Doritos",
                "asset": "Raimbow_Doritos_Decor.png"
            },
            {
                "name": "Sweet Chilli Pepper Doritos",
                "asset": "Sweet_Chilli_Pepper_Doritos_Decor.png"
            },
            {
                "name": "Whopper Doritos",
                "asset": "Whopper_Doritos_Decor.png"
            },
            {
                "name": "Sweet Paprika Doritos Bits",
                "asset": "Sweet_Paprika_Doritos_Bits_Decor.png"
            },
            {
                "name": "Honey BBQ Doritos Bits",
                "asset": "Honey_BBQ_Doritos_Bts_Decor.png"
            },
            {
                "name": "Mountain Dew Drink Doritos",
                "asset": "Montain_Dew_Drink_Doritos_Decor.png"
            },
            {
                "name": "Flaming Hot Chicken Fries",
                "asset": "Flaming_Hot_Chicken_Fries_Doritos.png"
            },
            {
                "name": "Chilli Heatwave Chicken Fries",
                "asset": "Chilli_Heatwave_Chicken_Fries_Doritos.png"
            },
            {
                "name": "Cheese Chicken Fries",
                "asset": "Cheese_Chicken_Fries_Doritos.png"
            }
        ]
    },
    {
        "name": "OM NOMS",
        "banner": "omnom-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "decorations": [
            {
                "name": "Granny Smith Apple",
                "asset": "apple (granny smith).png"
            },
            {
                "name": "Apple",
                "asset": "apple.png"
            },
            {
                "name": "Banana",
                "asset": "banana.png"
            },
            {
                "name": "Beans",
                "asset": "beans.png"
            },
            {
                "name": "Broccoli",
                "asset": "broccoli.png"
            },
            {
                "name": "Burger",
                "asset": "burger.png"
            },
            {
                "name": "Burrito",
                "asset": "burito.png"
            },
            {
                "name": "Cabbage",
                "asset": "cabbage.png"
            },
            {
                "name": "Carrot",
                "asset": "carrot.png"
            },
            {
                "name": "Cheese",
                "asset": "cheese.png"
            },
            {
                "name": "Chips",
                "asset": "chips.png"
            },
            {
                "name": "Chocolate",
                "asset": "chocolate.png"
            },
            {
                "name": "Real Cookie",
                "asset": "realcookie.png"
            },
            {
                "name": "Corns",
                "asset": "corns.png"
            },
            {
                "name": "Cotton Candy",
                "asset": "cotton candy.png"
            },
            {
                "name": "Real Cupcake",
                "asset": "realcupcake.png"
            },
            {
                "name": "Dragon Fruit",
                "asset": "dragon fruit.png"
            },
            {
                "name": "Fries",
                "asset": "fries.png"
            },
            {
                "name": "Grape",
                "asset": "grape.png"
            },
            {
                "name": "Hot Dog",
                "asset": "hot dog.png"
            },
            {
                "name": "Strawberry Ice Cream",
                "asset": "ice cream (strawberry).png"
            },
            {
                "name": "Jelly Beans",
                "asset": "jelly beans.png"
            },
            {
                "name": "Mandarin",
                "asset": "mandarin.png"
            },
            {
                "name": "Mango",
                "asset": "mango.png"
            },
            {
                "name": "Pancake",
                "asset": "pancake.png"
            },
            {
                "name": "Pie",
                "asset": "pie.png"
            },
            {
                "name": "Pizza",
                "asset": "pizza.png"
            },
            {
                "name": "Popcorn",
                "asset": "popcorns.png"
            },
            {
                "name": "Pudding",
                "asset": "pudding.png"
            },
            {
                "name": "Red Mushroom",
                "asset": "red mushroom (srry i only make 1 mushroom decor cuz i have mycophobia).png"
            },
            {
                "name": "Rice",
                "asset": "rice.png"
            },
            {
                "name": "Salad",
                "asset": "salad.png"
            },
            {
                "name": "Salmon",
                "asset": "salmon.png"
            },
            {
                "name": "Strawberry",
                "asset": "strawberry.png"
            },
            {
                "name": "Taco",
                "asset": "taco.png"
            },
            {
                "name": "Watermelon",
                "asset": "watermelon.png"
            },
            {
                "name": "The Forbidden Cheese",
                "asset": "the forbidden cheese (sulfur).png"
            },
            {
                "name": "Uranium",
                "asset": "Uranium (special).png"
            }
        ]
    },
    {
        "name": "cat person",
        "banner": "cat-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Black Collar Black Cat Ears",
                "asset": "black collar black cat ears.png"
            },
            {
                "name": "Black Collar Blue Cat Ears",
                "asset": "black collar blue cat ears.png"
            },
            {
                "name": "Black Collar Calico Cat Ears",
                "asset": "black collar calico cat ears.png"
            },
            {
                "name": "Black Collar Dark Orange Cat Ears",
                "asset": "black collar dark orange cat ears.png"
            },
            {
                "name": "Black Collar Green Cat Ears",
                "asset": "black collar green cat ears.png"
            },
            {
                "name": "Black Collar Light Gray Cat Ears",
                "asset": "black collar light gray cat ears.png"
            },
            {
                "name": "Black Collar Light Orange Cat Ears",
                "asset": "black collar light orange cat ears.png"
            },
            {
                "name": "Black Collar Light Yellow Cat Ears",
                "asset": "black collar light yellow cat ears.png"
            },
            {
                "name": "Black Collar Purple Cat Ears",
                "asset": "black collar purple cat ears.png"
            },
            {
                "name": "Black Collar Red Cat Ears",
                "asset": "black collar red cat ears.png"
            },
            {
                "name": "Black Collar White Cat Ears",
                "asset": "black collar white cat ears.png"
            },
            {
                "name": "Blue Collar Black Cat Ears",
                "asset": "blue collar black cat ears.png"
            },
            {
                "name": "Blue Collar Blue Cat Ears",
                "asset": "blue collar blue cat ears.png"
            },
            {
                "name": "Blue Collar Calico Cat Ears",
                "asset": "blue collar calico cat ears.png"
            },
            {
                "name": "Blue Collar Dark Orange Cat Ears",
                "asset": "blue collar dark orange cat ears.png"
            },
            {
                "name": "Blue Collar Gray Cat Ears",
                "asset": "blue collar gray cat ears.png"
            },
            {
                "name": "Blue Collar Green Cat Ears",
                "asset": "blue collar green cat ears.png"
            },
            {
                "name": "Blue Collar Light Orange Cat Ears",
                "asset": "blue collar light orange cat ears.png"
            },
            {
                "name": "Blue Collar Purple Cat Ears",
                "asset": "blue collar purple cat ears.png"
            },
            {
                "name": "Blue Collar Red Cat Ears",
                "asset": "blue collar red cat ears.png"
            },
            {
                "name": "Blue Collar White Cat Ears",
                "asset": "blue collar white cat ears.png"
            },
            {
                "name": "Cyan Collar Black Cat Ears",
                "asset": "cyan collar black cat ears.png"
            },
            {
                "name": "Cyan Collar Blue Cat Ears",
                "asset": "cyan collar blue cat ears.png"
            },
            {
                "name": "Cyan Collar Calico Cat Ears",
                "asset": "cyan collar calico cat ears.png"
            },
            {
                "name": "Cyan Collar Dark Orange Cat Ears",
                "asset": "cyan collar dark orange cat ears.png"
            },
            {
                "name": "Cyan Collar Green Cat Ears",
                "asset": "cyan collar green cat ears.png"
            },
            {
                "name": "Cyan Collar Light Gray Cat Ears",
                "asset": "cyan collar light gray cat ears.png"
            },
            {
                "name": "Cyan Collar Light Orange Cat Ears",
                "asset": "cyan collar light orange cat ears.png"
            },
            {
                "name": "Cyan Collar Light Yellow Cat Ears",
                "asset": "cyan collar light yellow cat ears.png"
            },
            {
                "name": "Cyan Collar Red Cat Ears",
                "asset": "cyan collar red cat ears.png"
            },
            {
                "name": "Cyan Collar White Cat Ears",
                "asset": "cyan collar white cat ears.png"
            },
            {
                "name": "Green Collar Black Cat Ears",
                "asset": "green collar black cat ears.png"
            },
            {
                "name": "Green Collar Blue Cat Ears",
                "asset": "green collar blue cat ears.png"
            },
            {
                "name": "Green Collar Calico Cat Ears",
                "asset": "green collar calico cat ears.png"
            },
            {
                "name": "Green Collar Dark Orange Cat Ears",
                "asset": "green collar dark orange cat ears.png"
            },
            {
                "name": "Green Collar Green Cat Ears",
                "asset": "green collar green cat ears.png"
            },
            {
                "name": "Green Collar Light Gray Cat Ears",
                "asset": "green collar light gray cat ears.png"
            },
            {
                "name": "Green Collar Light Orange Cat Ears",
                "asset": "green collar light orange cat ears.png"
            },
            {
                "name": "Green Collar Light Yellow Cat Ears",
                "asset": "green collar light yellow cat ears.png"
            },
            {
                "name": "Green Collar Purple Cat Ears",
                "asset": "green collar purple cat ears.png"
            },
            {
                "name": "Green Collar Red Cat Ears",
                "asset": "green collar red cat ears.png"
            },
            {
                "name": "Green Collar White Cat Ears",
                "asset": "green collar white cat ears.png"
            },
            {
                "name": "Magenta Collar Black Cat Ears",
                "asset": "magneta collar black cat ears.png"
            },
            {
                "name": "Magenta Collar Blue Cat Ears",
                "asset": "magneta collar blue cat ears.png"
            },
            {
                "name": "Magenta Collar Calico Cat Ears",
                "asset": "magneta collar calico cat ears.png"
            },
            {
                "name": "Magenta Collar Dark Orange Cat Ears",
                "asset": "magneta collar dark orange cat ears.png"
            },
            {
                "name": "Magenta Collar Green Cat Ears",
                "asset": "magneta collar green cat ears.png"
            },
            {
                "name": "Magenta Collar Light Gray Cat Ears",
                "asset": "magneta collar light gray cat ears.png"
            },
            {
                "name": "Magenta Collar Light Yellow Cat Ears",
                "asset": "magneta collar light yellow cat ears.png"
            },
            {
                "name": "Magenta Collar Purple Cat Ears",
                "asset": "magneta collar purple cat ears.png"
            },
            {
                "name": "Magenta Collar Red Cat Ears",
                "asset": "magneta red cat ears.png"
            },
            {
                "name": "Magenta Collar White Cat Ears",
                "asset": "magneta collar white cat ears.png"
            },
            {
                "name": "Orange Collar Black Cat Ears",
                "asset": "orange collar black cat ears.png"
            },
            {
                "name": "Orange Collar Blue Cat Ears",
                "asset": "orange collar blue cat ears.png"
            },
            {
                "name": "Orange Collar Calico Cat Ears",
                "asset": "orange collar calico cat ears.png"
            },
            {
                "name": "Orange Collar Dark Orange Cat Ears",
                "asset": "orange collar dark orange cat ears.png"
            },
            {
                "name": "Orange Collar Green Cat Ears",
                "asset": "orange collar green cat ears.png"
            },
            {
                "name": "Orange Collar Light Gray Cat Ears",
                "asset": "orange collar light gray cat ears.png"
            },
            {
                "name": "Orange Collar Light Yellow Cat Ears",
                "asset": "orange collar light yellow cat ears.png"
            },
            {
                "name": "Orange Collar Orange Cat Ears",
                "asset": "orange collar orange cat ears.png"
            },
            {
                "name": "Orange Collar Purple Cat Ears",
                "asset": "orange collar purple cat ears.png"
            },
            {
                "name": "Orange Collar Red Cat Ears",
                "asset": "orange collar red cat ears.png"
            },
            {
                "name": "Orange Collar White Cat Ears",
                "asset": "orange collar white cat ears.png"
            },
            {
                "name": "Red Collar Black Cat Ears",
                "asset": "red collar black cat ears.png"
            },
            {
                "name": "Red Collar Blue Cat Ears",
                "asset": "red collar blue cat ears.png"
            },
            {
                "name": "Red Collar Calico Cat Ears",
                "asset": "red collar calico cat ears.png"
            },
            {
                "name": "Red Collar Dark Orange Cat Ears",
                "asset": "red collar dark orange cat ears.png"
            },
            {
                "name": "Red Collar Green Cat Ears",
                "asset": "red collar green cat ears.png"
            },
            {
                "name": "Red Collar Light Orange Cat Ears",
                "asset": "red collar light orange cat ears.png"
            },
            {
                "name": "Red Collar Light Yellow Cat Ears",
                "asset": "red collar light yellow cat ears.png"
            },
            {
                "name": "Red Collar Purple Cat Ears",
                "asset": "red collar purple cat ears.png"
            },
            {
                "name": "Red Collar Red Cat Ears",
                "asset": "red collar red cat ears.png"
            },
            {
                "name": "Red Collar White Cat Ears",
                "asset": "red collar white cat ears.png"
            },
            {
                "name": "White Collar Black Cat Ears",
                "asset": "white collar black cat ears.png"
            },
            {
                "name": "White Collar Blue Cat Ears",
                "asset": "white collar blue cat ears.png"
            },
            {
                "name": "White Collar Calico Cat Ears",
                "asset": "white collar calico cat ears.png"
            },
            {
                "name": "White Collar Dark Orange Cat Ears",
                "asset": "white collar dark orange cat ears.png"
            },
            {
                "name": "White Collar Green Cat Ears",
                "asset": "white collar green cat ears.png"
            },
            {
                "name": "White Collar Light Gray Cat Ears",
                "asset": "white collar light gray cat ears.png"
            },
            {
                "name": "White Collar Light Orange Cat Ears",
                "asset": "white collar light orange cat ears.png"
            },
            {
                "name": "White Collar Light Yellow Cat Ears",
                "asset": "white collar light yellow cat ears.png"
            },
            {
                "name": "White Collar Purple Cat Ears",
                "asset": "white collar purple cat ears.png"
            },
            {
                "name": "White Collar Red Cat Ears",
                "asset": "white collar red cat ears.png"
            },
            {
                "name": "White Collar White Cat Ears",
                "asset": "white collar white cat ears.png"
            },
            {
                "name": "Blue Cat Ears",
                "asset": "blue cat ears.png"
            },
            {
                "name": "Calico Cat Ears",
                "asset": "calico cat ears.png"
            },
            {
                "name": "Cyan Cat Ears",
                "asset": "cyan cat ears.png"
            },
            {
                "name": "Dark Orange Cat Ears",
                "asset": "dark orange cat ears.png"
            },
            {
                "name": "Green Cat Ears",
                "asset": "green cat ears.png"
            },
            {
                "name": "Light Gray Cat Ears",
                "asset": "light gray cat ears.png"
            },
            {
                "name": "Light Yellow Cat Ears",
                "asset": "light yellow cat ears.png"
            },
            {
                "name": "Purple Cat Ears",
                "asset": "purple cat ears.png"
            },
            {
                "name": "Red Cat Ears",
                "asset": "red cat ears.png"
            },
            {
                "name": "White Cat Ears",
                "asset": "white cat ears.png"
            }
        ]
    },
    {
        "name": "GENSHIN",
        "banner": "genshin-banner.png",
        "artist_info": null,
        "artists": [
            findUser('452679089929846784')
        ],
        "decorations": [
            {
                "name": "Kirara Skill",
                "asset": "kirara-skill.png"
            },
            {
                "name": "Xiangling Skill",
                "asset": "xiangling_skill.png"
            },
            {
                "name": "Charlotte Skill",
                "asset": "charlotte_skill.png"
            },
            {
                "name": "Chevreuse Skill",
                "asset": "chevreuse_skill.png"
            },
            {
                "name": "Layla Skill",
                "asset": "layla_skill.png"
            },
            {
                "name": "Nahida Skill",
                "asset": "nahida_skill.png"
            }
        ]
    },
    {
        "name": "POKEMON",
        "banner": "pokemon-banner.png",
        "artist_info": null,
        "artists": [
            findUser('13')
        ],
        "decorations": [
            {
                "name": "Cynthia",
                "asset": "cynthia.png"
            },
            {
                "name": "Natural Harmonia Gropius",
                "asset": "N.png"
            },
            {
                "name": "Giratina",
                "asset": "giratina.png"
            },
            {
                "name": "Ceruledge",
                "asset": "ceruledge.png"
            },
            {
                "name": "Reshiram",
                "asset": "reshiram.png"
            },
            {
                "name": "Mew",
                "asset": "mew.png"
            }
        ]
    },
    {
        "name": "BFDI",
        "banner": "bfdi-banner.png",
        "artist_info": null,
        "artists": [
            findUser('14')
        ],
        "decorations": [
            {
                "name": "Bomby and Nickel",
                "asset": "bomby-and-nickel.png"
            },
            {
                "name": "Dirt Cake",
                "asset": "dirt-cake.png"
            },
            {
                "name": "Freesmart",
                "asset": "freesmart-alternates.png"
            },
            {
                "name": "Gumdrop Galore",
                "asset": "gumdrop-galore.png"
            },
            {
                "name": "Inside Bubble",
                "asset": "inside-bubble.png"
            },
            {
                "name": "Inside the donut hole",
                "asset": "inside-the-donut-hole.png"
            },
            {
                "name": "Pop that bubble",
                "asset": "pop-that-bubble.png"
            },
            {
                "name": "Rocky Barf",
                "asset": "rocky-barf.png"
            }
        ]
    },
    {
        "name": "FNF",
        "banner": "fnf-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "Darnell Sticker",
                "asset": "DARNELL_Sticker_Decor.png"
            },
            {
                "name": "Face Sticker",
                "asset": "FACE_Sticker_Decor.png"
            },
            {
                "name": "Tankman Sticker",
                "asset": "TANKMAN_Sticker_Decor.png"
            },
            {
                "name": "GF Sticker",
                "asset": "GF_Sticker_Decor.png"
            },
            {
                "name": "Daddy Dearest Sticker",
                "asset": "DADDY_DEAREST_Sticker_Decor.png"
            },
            {
                "name": "Mommy Dearest Sticker",
                "asset": "MOMMY_DEAREST_Sticker_Decor.png"
            },
            {
                "name": "Sempai Sticker",
                "asset": "SEMPAI_Sticker_Decor.png"
            },
            {
                "name": "Ski And Pump Sticker",
                "asset": "SKIDANDPUMP_Sticker_Decor.png"
            },
            {
                "name": "Speakers Sticker",
                "asset": "SPEAKERS_Sticker_Decor.png"
            },
            {
                "name": "Spirit Sticker",
                "asset": "SPIRIT_Sticker_Decor.png"
            },
            {
                "name": "Lemon Demon Sticker",
                "asset": "LEMON_DEMON_Sticker_Decor.png"
            },
            {
                "name": "BF Sticker",
                "asset": "Bf_Sticker_Decor.png"
            },
            {
                "name": "Pico Sticker",
                "asset": "PICO_Sticker_Decor.png"
            },
            {
                "name": "Nene Sticker",
                "asset": "NENE_Sticker_Decor.png"
            },
            {
                "name": "BF Fan",
                "asset": "Bf_Fan_Decor.png"
            },
            {
                "name": "FNF Player",
                "asset": "FNF_Player_Decor.png"
            },
            {
                "name": "GF Sit",
                "asset": "GF_Sit_Decor.png"
            }
        ]
    },
    {
        "name": "Pizza",
        "banner": "pizza-banner.png",
        "artist_info": null,
        "artists": [
            findUser('15')
        ],
        "decorations": [
            {
                "name": "Chef",
                "asset": "chef.png"
            },
            {
                "name": "Chef Hat",
                "asset": "chefhat.png"
            },
            {
                "name": "Goo",
                "asset": "goo.png"
            },
            {
                "name": "Mouth",
                "asset": "mouth.png"
            },
            {
                "name": "Rat Knife",
                "asset": "ratknife.png"
            },
            {
                "name": "Brick",
                "asset": "brick.png"
            }
        ]
    },
    {
        "name": "Kitsune",
        "banner": "kitsune-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Black Mask",
                "asset": "Blackmask.png"
            },
            {
                "name": "Blue Mask",
                "asset": "Bluemask.png"
            },
            {
                "name": "Green Mask",
                "asset": "Greenmask.png"
            },
            {
                "name": "Pink Mask",
                "asset": "Pinkmask.png"
            },
            {
                "name": "Purple Mask",
                "asset": "Purplemask.png"
            },
            {
                "name": "Red Mask",
                "asset": "Redmask.png"
            }
        ]
    },
    {
        "name": "NEON",
        "banner": "neon-banner.png",
        "artist_info": null,
        "artists": [
            findUser('16')
        ],
        "decorations": [
            {
                "name": "Flamelike",
                "asset": "flamelike.png"
            },
            {
                "name": "Prideful",
                "asset": "prideful.png"
            },
            {
                "name": "Split Globe",
                "asset": "split-globe.png"
            },
            {
                "name": "Glitch",
                "asset": "glitch.png"
            },
            {
                "name": "RGB Circle",
                "asset": "rgbcircle.png"
            },
            {
                "name": "Purple Glow",
                "asset": "purple-glow.png"
            },
            {
                "name": "Geometric",
                "asset": "geometric.png"
            },
            {
                "name": "Particle Circle",
                "asset": "particle-circle.png"
            },
            {
                "name": "Retro Car",
                "asset": "retrocar.png"
            },
            {
                "name": "Runic",
                "asset": "runic.png"
            },
            {
                "name": "Wireframe",
                "asset": "wireframe.png"
            },
            {
                "name": "Galaxy",
                "asset": "Galaxy.png"
            }
        ]
    },
    {
        "name": "Stardew",
        "banner": "1stardew-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Abigail",
                "asset": "abigail.png"
            },
            {
                "name": "Alex",
                "asset": "alex.png"
            },
            {
                "name": "Elliott",
                "asset": "elliott.png"
            },
            {
                "name": "Emily",
                "asset": "emily.png"
            },
            {
                "name": "Haley",
                "asset": "haley.png"
            },
            {
                "name": "Harvey",
                "asset": "harvey.png"
            },
            {
                "name": "Hat Mouse",
                "asset": "hatmouse.png"
            },
            {
                "name": "Junimo",
                "asset": "junimo.png"
            },
            {
                "name": "Leah",
                "asset": "leah.png"
            },
            {
                "name": "Maru",
                "asset": "maru.png"
            },
            {
                "name": "Mr Qi",
                "asset": "mrqi.png"
            },
            {
                "name": "Pendant",
                "asset": "pendant.png"
            },
            {
                "name": "Penny",
                "asset": "penny.png"
            },
            {
                "name": "Sam",
                "asset": "sam.png"
            },
            {
                "name": "Sebastian",
                "asset": "sebastian.png"
            },
            {
                "name": "Shane",
                "asset": "shane.png"
            },
            {
                "name": "Portrait",
                "asset": "portrait.png"
            }
        ]
    },
    {
        "name": "Squish",
        "banner": "1squishmallow-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Carotene",
                "asset": "carotene.png"
            },
            {
                "name": "Davina",
                "asset": "davina.png"
            },
            {
                "name": "Mario",
                "asset": "mario.png"
            },
            {
                "name": "Rebecca",
                "asset": "rebecca.png"
            },
            {
                "name": "Tristan",
                "asset": "tristan.png"
            },
            {
                "name": "Omnomnom",
                "asset": "omnomnom.png"
            },
            {
                "name": "Sam Sundae",
                "asset": "sam sundae.png"
            },
            {
                "name": "Pom Pom Burger",
                "asset": "pom pom burger.png"
            },
            {
                "name": "Akilah",
                "asset": "akilah.png"
            }
        ]
    },
    {
        "name": "BUTTERFLY",
        "banner": "nuki-crystal-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Dandelion Autumn",
                "asset": "dandelionautumn.png"
            },
            {
                "name": "Dandelion Blue",
                "asset": "dandelionblue.png"
            },
            {
                "name": "Dandelion Cherry",
                "asset": "dandelioncherry.png"
            },
            {
                "name": "Dandelion Cyan",
                "asset": "dandelioncyan.png"
            },
            {
                "name": "Dandelion Green",
                "asset": "dandeliongreen.png"
            },
            {
                "name": "Dandelion Mystical",
                "asset": "dandelionmystical.png"
            },
            {
                "name": "Dandelion Pink",
                "asset": "dandelionpink.png"
            },
            {
                "name": "Dandelion Purple",
                "asset": "dandelionpurple.png"
            },
            {
                "name": "Dandelion Yellow",
                "asset": "dandelionyellow.png"
            },
            {
                "name": "Dust Azure",
                "asset": "dustazure.png"
            },
            {
                "name": "Dust Cyan",
                "asset": "dustcyan.png"
            },
            {
                "name": "Dust Forest",
                "asset": "dustforest.png"
            },
            {
                "name": "Dust Green",
                "asset": "dustgreen.png"
            },
            {
                "name": "Dust Magical",
                "asset": "dustmagical.png"
            },
            {
                "name": "Dust Pink",
                "asset": "dustpink.png"
            },
            {
                "name": "Dust Purple",
                "asset": "dustpurple.png"
            },
            {
                "name": "Dust Red",
                "asset": "dustred.png"
            },
            {
                "name": "Dust Yellow",
                "asset": "dustyellow.png"
            },
            {
                "name": "Gemstone Autumn",
                "asset": "gemstoneautumn.png"
            },
            {
                "name": "Gemstone Blue",
                "asset": "gemstoneblue.png"
            },
            {
                "name": "Gemstone Green",
                "asset": "gemstonegreen.png"
            },
            {
                "name": "Gemstone Pastel",
                "asset": "gemstonepastel.png"
            },
            {
                "name": "Gemstone Pink",
                "asset": "gemstonepink.png"
            },
            {
                "name": "Gemstone Red",
                "asset": "gemstonered.png"
            },
            {
                "name": "Gemstone Spring",
                "asset": "gemstonespring.png"
            },
            {
                "name": "Gemstone Summer",
                "asset": "gemstonesummer.png"
            },
            {
                "name": "Gemstone Yellow",
                "asset": "gemstoneyellow.png"
            },
            {
                "name": "Holly Autumn",
                "asset": "hollyautumn.png"
            },
            {
                "name": "Holly Blue",
                "asset": "hollyblue.png"
            },
            {
                "name": "Holly Brown",
                "asset": "hollybrown.png"
            },
            {
                "name": "Holly Cherry",
                "asset": "hollycherry.png"
            },
            {
                "name": "Holly Forest",
                "asset": "hollyforest.png"
            },
            {
                "name": "Holly Green",
                "asset": "hollygreen.png"
            },
            {
                "name": "Holly Mint",
                "asset": "hollymint.png"
            },
            {
                "name": "Holly Purple",
                "asset": "hollypurple.png"
            },
            {
                "name": "Holly Red",
                "asset": "hollyred.png"
            },
            {
                "name": "Lantern Autumn",
                "asset": "lanternautumn.png"
            },
            {
                "name": "Lantern Blue",
                "asset": "lanternblue.png"
            },
            {
                "name": "Lantern Cherry",
                "asset": "lanterncherry.png"
            },
            {
                "name": "Lantern Crystal",
                "asset": "lanterncrystal.png"
            },
            {
                "name": "Lantern Green",
                "asset": "lanterngreen.png"
            },
            {
                "name": "Lantern Pink",
                "asset": "lanternpink.png"
            },
            {
                "name": "Lantern Purple",
                "asset": "lanternpurple.png"
            },
            {
                "name": "Lantern Red",
                "asset": "lanternred.png"
            },
            {
                "name": "Lantern Yellow",
                "asset": "lanternyellow.png"
            },
            {
                "name": "No Lantern Autumn",
                "asset": "nolanternautumn.png"
            },
            {
                "name": "No Lantern Blue",
                "asset": "nolanternblue.png"
            },
            {
                "name": "No Lantern Cherry",
                "asset": "nolanterncherry.png"
            },
            {
                "name": "No Lantern Crystal",
                "asset": "nolanterncrystal.png"
            },
            {
                "name": "No Lantern Green",
                "asset": "nolanterngreen.png"
            },
            {
                "name": "No Lantern Pink",
                "asset": "nolanternpink.png"
            },
            {
                "name": "No Lantern Purple",
                "asset": "nolanternpurple.png"
            },
            {
                "name": "No Lantern Red",
                "asset": "nolanternred.png"
            },
            {
                "name": "No Lantern Yellow",
                "asset": "nolanternyellow.png"
            },
            {
                "name": "Quartz Blue",
                "asset": "quartzblue.png"
            },
            {
                "name": "Quartz Cyan",
                "asset": "quartzcyan.png"
            },
            {
                "name": "Quartz Green",
                "asset": "quartzgreen.png"
            },
            {
                "name": "Quartz Orange",
                "asset": "quartzorange.png"
            },
            {
                "name": "Quartz Purple",
                "asset": "quartzpurple.png"
            },
            {
                "name": "Quartz Red",
                "asset": "quartzred.png"
            },
            {
                "name": "Quartz Rose",
                "asset": "quartzrose.png"
            },
            {
                "name": "Quartz Yellow",
                "asset": "quartzyellow.png"
            },
            {
                "name": "Quartz Rainbow",
                "asset": "quartzrainbow.png"
            },
            {
                "name": "Ribbon Blue",
                "asset": "ribbonblue.png"
            },
            {
                "name": "Ribbon Cyan",
                "asset": "ribboncyan.png"
            },
            {
                "name": "Ribbon Forest",
                "asset": "ribbonforest.png"
            },
            {
                "name": "Ribbon Mint",
                "asset": "ribbonmint.png"
            },
            {
                "name": "Ribbon Pink",
                "asset": "ribbonpink.png"
            },
            {
                "name": "Ribbon Purple",
                "asset": "ribbonpurple.png"
            },
            {
                "name": "Ribbon Red",
                "asset": "ribbonred.png"
            },
            {
                "name": "Ribbon Rose",
                "asset": "ribbonrose.png"
            },
            {
                "name": "Ribbon Yellow",
                "asset": "ribbonyellow.png"
            },
            {
                "name": "Sakura Autumn",
                "asset": "sakuraautumn.png"
            },
            {
                "name": "Sakura Dawn",
                "asset": "sakuradawn.png"
            },
            {
                "name": "Sakura Cyan",
                "asset": "sakuracyan.png"
            },
            {
                "name": "Sakura Emerald",
                "asset": "sakuraemerald.png"
            },
            {
                "name": "Sakura Mint",
                "asset": "sakuramint.png"
            },
            {
                "name": "Sakura Moonlight",
                "asset": "sakuramoonlight.png"
            },
            {
                "name": "Sakura Twilight",
                "asset": "sakuratwilight.png"
            },
            {
                "name": "Sakura Pink",
                "asset": "sakurapink.png"
            },
            {
                "name": "Sakura Yellow",
                "asset": "sakurayellow.png"
            },
            {
                "name": "Leaves Autumn",
                "asset": "leavesautumn.png"
            },
            {
                "name": "Leaves Blue",
                "asset": "leavesblue.png"
            },
            {
                "name": "Leaves Green",
                "asset": "leavesgreen.png"
            },
            {
                "name": "Leaves Magenta",
                "asset": "leavesmagenta.png"
            },
            {
                "name": "Leaves Mint",
                "asset": "leavesmint.png"
            },
            {
                "name": "Leaves Pink",
                "asset": "leavespink.png"
            },
            {
                "name": "Leaves Red",
                "asset": "leavesred.png"
            },
            {
                "name": "Leaves Winter",
                "asset": "leaveswinter.png"
            },
            {
                "name": "Leaves Yellow",
                "asset": "leavesyellow.png"
            }
        ]
    },
    {
        "name": "CORAL REEF",
        "banner": "coralbannernew.png",
        "artist_info": "Reminder to add all the artists to this category or you will explode",
        "artists": [
            findUser('1')
        ],
        "decorations": [
            {
                "name": "Pink Jellyfish",
                "asset": "pinkjelly.png"
            },
            {
                "name": "Happy Jellyfish",
                "asset": "happyjelly.png"
            },
            {
                "name": "Axolotl Blue",
                "asset": "axoblue.png"
            },
            {
                "name": "Axolotl Pink",
                "asset": "axopink.png"
            },
            {
                "name": "Axolotl Purple",
                "asset": "axopurple.png"
            },
            {
                "name": "Axolotl White",
                "asset": "axowhite.png"
            },
            {
                "name": "Axolotl Yellow",
                "asset": "axoyellow.png"
            },
            {
                "name": "Float Blue",
                "asset": "floatblue.png"
            },
            {
                "name": "Float Green",
                "asset": "floatgreen.png"
            },
            {
                "name": "Float Pink",
                "asset": "floatpink.png"
            },
            {
                "name": "Float Purple",
                "asset": "floatpurple.png"
            },
            {
                "name": "Float Yellow",
                "asset": "floatyellow.png"
            },
            {
                "name": "Blue Knife",
                "asset": "blueknife.png"
            },
            {
                "name": "Green Knife",
                "asset": "greenknife.png"
            },
            {
                "name": "Mint Knife",
                "asset": "mintknife.png"
            },
            {
                "name": "Pink Knife",
                "asset": "pinkknife.png"
            },
            {
                "name": "Purple Knife",
                "asset": "purpleknife.png"
            },
            {
                "name": "Red Knife",
                "asset": "redknife.png"
            },
            {
                "name": "Yellow Knife",
                "asset": "yellowknife.png"
            },
            {
                "name": "White Jelly",
                "asset": "a_ white jelly.png"
            },
            {
                "name": "Cyan Jelly",
                "asset": "cyan jelly.png"
            },
            {
                "name": "Light Purple Jelly",
                "asset": "d_light purple jelly.png"
            },
            {
                "name": "Pink Jelly",
                "asset": "d_pink jelly.png"
            },
            {
                "name": "Light Green Jelly",
                "asset": "f_light green jelly.png"
            },
            {
                "name": "Dark Green Jelly",
                "asset": "g_dark green jelly.png"
            },
            {
                "name": "Light Yellow Jelly",
                "asset": "g_light yellow jelly.png"
            },
            {
                "name": "Gold Jelly",
                "asset": "g1_gold jelly.png"
            }
        ]
    },
    {
        "name": "Zoo",
        "banner": "zoobanner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Bunny Ears",
                "asset": "bunnyears.png"
            },
            {
                "name": "Cat Ears",
                "asset": "catears.png"
            },
            {
                "name": "Deer Ears",
                "asset": "deerears.png"
            },
            {
                "name": "Dog Ears No Tail",
                "asset": "dogearsnotail.png"
            },
            {
                "name": "Dog Ears Tail",
                "asset": "dogearstail.png"
            },
            {
                "name": "Wing Ears",
                "asset": "wingears.png"
            }
        ]
    },
    {
        "name": "Garage",
        "banner": "garage-banner.png",
        "artist_info": null,
        "artists": [
            findUser('17')
        ],
        "decorations": [
            {
                "name": "Holly Jolly",
                "asset": "hollyjolly.png"
            },
            {
                "name": "Rated M",
                "asset": "ratedm.png"
            },
            {
                "name": "Beat",
                "asset": "Beat.png"
            },
            {
                "name": "Corn",
                "asset": "Corn.png"
            },
            {
                "name": "Gum",
                "asset": "Gum.png"
            },
            {
                "name": "Evil Dead",
                "asset": "evildead.png"
            },
            {
                "name": "Neon Chainsaw",
                "asset": "neonchainsaw.png"
            },
            {
                "name": "Lava Lamp",
                "asset": "lavadecor.png"
            }
        ]
    },
    {
        "name": "Showtime",
        "banner": "showtime-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "decorations": [
            {
                "name": "It's Teto!",
                "asset": "another.png"
            },
            {
                "name": "Cat Cap",
                "asset": "catcap.png"
            },
            {
                "name": "Emu",
                "asset": "Emu.png"
            },
            {
                "name": "Glowy",
                "asset": "less_light.png"
            },
            {
                "name": "Nene",
                "asset": "Nene.png"
            },
            {
                "name": "Peachy",
                "asset": "remake.png"
            },
            {
                "name": "Rui",
                "asset": "Rui.png"
            },
            {
                "name": "Teto Pear",
                "asset": "teto_frame_ig.png"
            },
            {
                "name": "Teto Bow",
                "asset": "tetoo.png"
            },
            {
                "name": "Teto Swirl",
                "asset": "tetoswirl.png"
            },
            {
                "name": "More Teto",
                "asset": "tetoteto.png"
            },
            {
                "name": "Tsukasa",
                "asset": "Tsukasa.png"
            },
            {
                "name": "Wonderhoy",
                "asset": "wonderhoy.png"
            }
        ]
    },
    {
        "name": "Pancake Day",
        "banner": "nuki-pancake-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Fork",
                "asset": "fork.png"
            },
            {
                "name": "Munching",
                "asset": "munching.png"
            },
            {
                "name": "Syrup",
                "asset": "syrup.png"
            },
            {
                "name": "Syrup 2",
                "asset": "syrup2.png"
            }
        ]
    },
    {
        "name": "Oxygen",
        "banner": "newoxygen-banner.png",
        "artist_info": null,
        "artists": [
            findUser('11')
        ],
        "decorations": [
            {
                "name": "Plumbing",
                "asset": "plumbing.png"
            },
            {
                "name": "Power",
                "asset": "power.png"
            },
            {
                "name": "Radbolts",
                "asset": "radbolts.png"
            },
            {
                "name": "Slickster",
                "asset": "slickster.png"
            }
        ]
    },
    {
        "name": "Sanrio",
        "banner": "nuki-sanrio-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Choco",
                "asset": "choco.png"
            },
            {
                "name": "Cinnamoroll",
                "asset": "cinnamoroll.png"
            },
            {
                "name": "Hello Kitty",
                "asset": "kitty.png"
            },
            {
                "name": "Kuromi",
                "asset": "kuromi.png"
            },
            {
                "name": "Melody",
                "asset": "melody.png"
            },
            {
                "name": "Purin",
                "asset": "purin.png"
            }
        ]
    },
    {
        "name": "Scribble",
        "banner": "scribble-banner.png",
        "artist_info": null,
        "artists": [
            findUser('20')
        ],
        "decorations": [
            {
                "name": "Annie's Hair",
                "asset": "Annies_Hair.png"
            },
            {
                "name": "Anton's Hair",
                "asset": "Antons_Hair.png"
            },
            {
                "name": "Cookie",
                "asset": "Cookie_decoration.png"
            },
            {
                "name": "Green Dude",
                "asset": "Greendude_decoration.png"
            },
            {
                "name": "Marcie",
                "asset": "Marcie_decoration.png"
            },
            {
                "name": "Taunt",
                "asset": "Taunt_decor.png"
            }
        ]
    },
    {
        "name": "Horns",
        "banner": "horns-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Goat Horns",
                "asset": "goat horns.png"
            },
            {
                "name": "Devil Horns",
                "asset": "devil horns.png"
            },
            {
                "name": "Squishy Horns",
                "asset": "squishy horns.png"
            },
            {
                "name": "Over Horns",
                "asset": "over horns.png"
            },
            {
                "name": "Stylish Horns",
                "asset": "stylish horns.png"
            },
            {
                "name": "Alien Ears",
                "asset": "alien ears.png"
            }
        ]
    },
    {
        "name": "TOILET BOUND",
        "banner": "toilet-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Yashiro Clips",
                "asset": "yashiro clips.png"
            },
            {
                "name": "Hanako Ghosts",
                "asset": "hanako ghosts.png"
            },
            {
                "name": "Tsukasa Ghosts",
                "asset": "tsukasa ghosts.png"
            },
            {
                "name": "Yako Ears",
                "asset": "yako ears.png"
            },
            {
                "name": "Yako Ears Alt",
                "asset": "yako ears alt.png"
            }
        ]
    },
    {
        "name": "ABSTRACT",
        "banner": "abstract-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1147940825330876538')
        ],
        "decorations": [
            {
                "name": "Abstract Purple",
                "asset": "abstractpurple.png"
            },
            {
                "name": "Bubble",
                "asset": "bubble.png"
            }
        ]
    },
    {
        "name": "VALENTINES",
        "banner": "love-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Kisses",
                "asset": "kisses.png"
            },
            {
                "name": "Envelope",
                "asset": "envelope.png"
            },
            {
                "name": "Love Thoughts",
                "asset": "lovethoughts.png"
            },
            {
                "name": "Blue Flower",
                "asset": "blueflower.png"
            },
            {
                "name": "Pink Flower",
                "asset": "pinkflower.png"
            },
            {
                "name": "Blue Candy",
                "asset": "blue candy.png"
            },
            {
                "name": "Pink Candy",
                "asset": "pink candy.png"
            },
            {
                "name": "Blue Hat",
                "asset": "bluehat.png"
            },
            {
                "name": "Pink Hat",
                "asset": "pinkhat.png"
            },
            {
                "name": "Valentines Day",
                "asset": "valentinesday.png"
            }
        ]
    },
    {
        "name": "Sonic Love",
        "banner": "nuki-sonic-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Holding Baby",
                "asset": "holdingbaby.png"
            },
            {
                "name": "Greetings",
                "asset": "greetings.png"
            },
            {
                "name": "Sonic Pal",
                "asset": "sonicpal.png"
            },
            {
                "name": "Marry Me",
                "asset": "marryme.png"
            },
            {
                "name": "Big Day",
                "asset": "bigday.png"
            },
            {
                "name": "Streamer",
                "asset": "streamer.png"
            }
        ]
    },
    {
        "name": "BALATRO",
        "banner": "balatro-banner.png",
        "artist_info": null,
        "artists": [
            findUser('13')
        ],
        "decorations": [
            {
                "name": "Abstract",
                "asset": "abstract.png"
            },
            {
                "name": "Baron",
                "asset": "baron.png"
            },
            {
                "name": "Canio",
                "asset": "canio.png"
            },
            {
                "name": "Chicot",
                "asset": "chicot.png"
            },
            {
                "name": "Jimbo",
                "asset": "jimbo.png"
            },
            {
                "name": "Mime",
                "asset": "mime.png"
            },
            {
                "name": "Perkeo",
                "asset": "perkeo.png"
            },
            {
                "name": "Red Chip",
                "asset": "red chip.png"
            },
            {
                "name": "Triboulet",
                "asset": "triboulet.png"
            },
            {
                "name": "Wheel of Fortune",
                "asset": "wheel of fortune.png"
            },
            {
                "name": "White Chip",
                "asset": "white chip.png"
            },
            {
                "name": "Yorick",
                "asset": "yorick.png"
            }
        ]
    },
    {
        "name": "DOODLES",
        "banner": "doodles-banner.png",
        "artist_info": null,
        "artists": [
            findUser('21')
        ],
        "decorations": [
            {
                "name": "Brown Alien",
                "asset": "brownalien.png"
            },
            {
                "name": "Purple Alien",
                "asset": "purplealien.png"
            },
            {
                "name": "Sanford",
                "asset": "sanford.png"
            },
            {
                "name": "Deimos",
                "asset": "deimos.png"
            },
            {
                "name": "Dynamite",
                "asset": "dynamite.png"
            },
            {
                "name": "Ganyu",
                "asset": "ganyu.png"
            },
            {
                "name": "Shark with a Trident",
                "asset": "sharktrident.png"
            }
        ]
    },
    {
        "name": "DELICIOUS DUNGEON",
        "banner": "delicious-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Senshi",
                "asset": "senshi.png"
            },
            {
                "name": "Senshi with mustache",
                "asset": "senshi1.png"
            },
            {
                "name": "Laios Touden",
                "asset": "laios-touden.png"
            },
            {
                "name": "Marcille Donato",
                "asset": "marcille-donato.png"
            },
            {
                "name": "Chilchuck Tims",
                "asset": "chilchuck-tims.png"
            },
            {
                "name": "Falin Touden",
                "asset": "falin-touden.png"
            },
            {
                "name": "Izutsumi",
                "asset": "izutsumi.png"
            },
            {
                "name": "Neck Warmer",
                "asset": "neckwarmer.png"
            }
        ]
    },
    {
        "name": "PRIDE",
        "banner": "pride-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Acespec",
                "asset": "acespec.png"
            },
            {
                "name": "Agender",
                "asset": "agender.png"
            },
            {
                "name": "Aroace",
                "asset": "aroace.png"
            },
            {
                "name": "Aroacespec",
                "asset": "aroacespec.png"
            },
            {
                "name": "Aromantic",
                "asset": "aromantic.png"
            },
            {
                "name": "Arospec",
                "asset": "arospec.png"
            },
            {
                "name": "Asexual",
                "asset": "asexual.png"
            },
            {
                "name": "Demiagender",
                "asset": "demiagender.png"
            },
            {
                "name": "Demiboy",
                "asset": "demiboy.png"
            },
            {
                "name": "Demigender",
                "asset": "demigender.png"
            },
            {
                "name": "Demigirl",
                "asset": "demigirl.png"
            },
            {
                "name": "Demimix",
                "asset": "demimix.png"
            },
            {
                "name": "Gay",
                "asset": "gay.png"
            },
            {
                "name": "Genderqueer",
                "asset": "genderqueer.png"
            },
            {
                "name": "Lesbian",
                "asset": "lesbian.png"
            },
            {
                "name": "Librafem",
                "asset": "librafem.png"
            },
            {
                "name": "Libramasc",
                "asset": "libramasc.png"
            },
            {
                "name": "Non Binary",
                "asset": "nonbinary.png"
            },
            {
                "name": "Transbian",
                "asset": "transbian.png"
            },
            {
                "name": "Trans Gay",
                "asset": "trans-gay.png"
            },
            {
                "name": "Transgender",
                "asset": "transgender.png"
            },
            {
                "name": "Transfem",
                "asset": "transfem.png"
            },
            {
                "name": "Transmasc",
                "asset": "transmasc.png"
            },
            {
                "name": "Transneutral",
                "asset": "transneutral.png"
            },
            {
                "name": "Abrosexual",
                "asset": "abrosexual.png"
            },
            {
                "name": "Bisexual",
                "asset": "bisexual.png"
            },
            {
                "name": "Omnisexual",
                "asset": "omnisexual.png"
            },
            {
                "name": "Pansexual",
                "asset": "pansexual.png"
            },
            {
                "name": "Polysexual",
                "asset": "polysexual.png"
            }
        ]
    },
    {
        "name": "SPACE",
        "banner": "space-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Moon",
                "asset": "moon.png"
            },
            {
                "name": "Moon & Stars",
                "asset": "moonstars.png"
            }
        ]
    },
    {
        "name": "TOTORO",
        "banner": "totoro-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Chibi Totoro",
                "asset": "chibi-totoro1.png"
            },
            {
                "name": "Chibi Totoro Animated",
                "asset": "chibi-totoroanimated.png"
            },
            {
                "name": "Chu Totoro",
                "asset": "chu-totoro.png"
            },
            {
                "name": "Chu Totoro Animated",
                "asset": "chu-totoroanimated.png"
            },
            {
                "name": "Chibi Totoro Green",
                "asset": "chibi-totorofixed.png"
            },
            {
                "name": "Totoro",
                "asset": "totoro.png"
            }
        ]
    },
    {
        "name": "LAKE",
        "banner": "lake-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Ladybug",
                "asset": "ladybug.png"
            },
            {
                "name": "Ducky",
                "asset": "ducky.png"
            },
            {
                "name": "Leaves",
                "asset": "leaves.png"
            },
            {
                "name": "Picnic",
                "asset": "picnic.png"
            }
        ]
    },
    {
        "name": "DESSERTS",
        "banner": "desserts-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Boba",
                "asset": "boba.png"
            },
            {
                "name": "Cupcake",
                "asset": "cupcake.png"
            },
            {
                "name": "Ice Cream",
                "asset": "icecream.png"
            },
            {
                "name": "Macarons",
                "asset": "macarons.png"
            },
            {
                "name": "Strawberry Cake",
                "asset": "strawberry-cake.png"
            }
        ]
    },
    {
        "name": "KATSU",
        "banner": "collectors-banner.png",
        "artist_info": null,
        "artists": [
            findUser('18')
        ],
        "decorations": [
            {
                "name": "Mew Card",
                "asset": "mewcard.png"
            },
            {
                "name": "Charizard Card",
                "asset": "charizardcard.png"
            },
            {
                "name": "Pokéball",
                "asset": "pokeball.png"
            },
            {
                "name": "GameBoy",
                "asset": "gameboy.png"
            },
            {
                "name": "SNES",
                "asset": "snes.png"
            },
            {
                "name": "Nintendo 3DS",
                "asset": "3ds.png"
            },
            {
                "name": "Nintendo Wii",
                "asset": "wii.png"
            },
            {
                "name": "PlayStation",
                "asset": "playstation.png"
            },
            {
                "name": "DreamCast",
                "asset": "dreamcast.png"
            },
            {
                "name": "Nintendo Switch",
                "asset": "switch.png"
            },
            {
                "name": "Xbox One",
                "asset": "xbox1.png"
            },
            {
                "name": "Xbox Series S",
                "asset": "xboxs.png"
            },
            {
                "name": "My Hero Academia",
                "asset": "mha.png"
            },
            {
                "name": "Sword Art Online",
                "asset": "sao.png"
            },
            {
                "name": "Bleach",
                "asset": "bleach.png"
            },
            {
                "name": "Majoras Mask",
                "asset": "zelda.png"
            },
            {
                "name": "Cat",
                "asset": "cat.png"
            },
            {
                "name": "Naruto",
                "asset": "naruto.png"
            },
            {
                "name": "My Deer Friend Nokotan",
                "asset": "nokotan.png"
            },
            {
                "name": "Antler",
                "asset": "antler.png"
            },
            {
                "name": "Hu Tao",
                "asset": "hutao.png"
            },
            {
                "name": "Cat Hug",
                "asset": "cathug.png"
            },
            {
                "name": "Sword Girl",
                "asset": "swordgirl.png"
            },
            {
                "name": "Jujutsu Kaisen 1",
                "asset": "juju1.png"
            },
            {
                "name": "Jujutsu Kaisen 2",
                "asset": "juju2.png"
            },
            {
                "name": "Girl 1",
                "asset": "girl1.png"
            },
            {
                "name": "Girl 2",
                "asset": "girl2.png"
            },
            {
                "name": "Girl 3",
                "asset": "girl3.png"
            }
        ]
    },
    {
        "name": "UNCATEGORIZED",
        "banner": "uncategorized-banner.png",
        "artist_info": "Reminder to add all the artists to this category or you will explode",
        "decorations": [
            {
                "name": "Bamboo",
                "asset": "bamboo.png"
            },
            {
                "name": "Kawaii Cat",
                "asset": "kawaiicat.png"
            },
            {
                "name": "Spheal",
                "asset": "spheal.png"
            },
            {
                "name": "Daggers",
                "asset": "daggers.png"
            },
            {
                "name": "Shuriken",
                "asset": "shuriken.png"
            },
            {
                "name": "Purple Devil",
                "asset": "purpledevil.png"
            },
            {
                "name": "Pink Devil",
                "asset": "pinkdevil.png"
            },
            {
                "name": "Green Devil",
                "asset": "greendevil.png"
            },
            {
                "name": "Neon Devil",
                "asset": "neondevil.png"
            },
            {
                "name": "Rimuru",
                "asset": "rimuru.png"
            },
            {
                "name": "Piplup using Bubblebeam",
                "asset": "piplup decor.png"
            },
            {
                "name": "Green Radar",
                "asset": "green-radar.png"
            },
            {
                "name": "Jellies",
                "asset": "jellies.png"
            },
            {
                "name": "Nyan Cat",
                "asset": "nyancat.png"
            },
            {
                "name": "Energy Ring",
                "asset": "energyring.png"
            },
            {
                "name": "Biblically Accurate Angel",
                "asset": "angel no sparkle.png"
            },
            {
                "name": "Biblically Accurate Angel with Sparkles",
                "asset": "angel sparkle.png"
            },
            {
                "name": "Pink Ribbon",
                "asset": "pinkribbon.png"
            },
            {
                "name": "Interstellar Smoke",
                "asset": "0 sec delay.png"
            },
            {
                "name": "Gods Portal",
                "asset": "jellys.png"
            }
        ]
    }
];

const container = document.getElementById('categories-container');

container.innerHTML = ``;

// Renders all the categories on the page before the other scrips take over
for (const category of categories) {
    const cdiv = document.createElement('section');
    cdiv.classList.add('category');
    if (category.force_pagebreak === true) {
        cdiv.setAttribute('data-force-pagebreak', 'true');
    }

    cdiv.innerHTML = `
        <div class="category-banner">
            <img src="${category.banner}" oncontextmenu="return false;"/>
        </div>
        <p class="artist-info"></p>
        <div class="decorations-grid"></div>
    `;
    const artistInfo = cdiv.querySelector('.artist-info');
    if (category.artist_info) artistInfo.innerHTML = category.artist_info;
    else if (category.artists && category.artists.length === 1 && category.artists[0].commissions) artistInfo.innerHTML = `This artist is accepting commissions. ${category.artists[0].commissions} Contact them on Discord <a href="https://discord.com/users/${category.artists[0].id}">here</a>.`;
    else artistInfo.remove();

    const decoGrid = cdiv.querySelector('.decorations-grid');

    for (const deco of category.decorations) {
        const ddiv = document.createElement('div');
        ddiv.classList.add('decoration-wrap');

        let artist = {
            name: "Unknown",
            commissions: null,
            id: "1"
        };
        if (deco.artist) artist = deco.artist;
        else if (category.artists?.length === 1) artist = category.artists[0];

        ddiv.innerHTML = `
            <div class="decoration-cell" data-image="${deco.asset}" data-artist="${artist.name}">
                <img class="decoration-img" src="${deco.asset}" alt="${deco.name}"/>
                <div class="commission-message" style="display: none;">
                    <p>&nbsp;</p>
                    <p>This artist is accepting commissions.</p>
                    <p>${artist.commissions}</p>
                    <p>Contact them on Discord <a href="https://discord.com/users/${artist.id}">here</a>.</p>
                    <p>&nbsp;</p>
                </div> 
                <img class="default-avatar" src="default-avatar.png" alt="Discord Logo"/>
            </div>
            <div class="download-info">Click to view</div>
        `;

        const commissionMessage = ddiv.querySelector('.commission-message');
        if (!artist.commissions) commissionMessage.remove();

        decoGrid.appendChild(ddiv)
    }

    container.appendChild(cdiv);
}