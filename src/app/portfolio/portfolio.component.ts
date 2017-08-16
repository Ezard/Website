import {Component} from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
    data = [
        {
            title: 'Games',
            items: [
                {
                    title: 'Lost Sector (8-Bit Warframe)',
                    languages: 'Java, Typescript, Node.js',
                    frameworks: 'OpenGL, OpenAL, MongoDB',
                    other: 'P2P networking, UPnP',
                    links: [
                        {
                            url: 'https://8bitwarframe.com/download',
                            text: 'Download (8bitwarframe.com)'
                        },
                        {
                            url: 'https://github.com/8-Bit-Warframe',
                            text: 'Source (GitHub)'
                        }
                    ],
                    description: [
                        'Retro-inspired platformer / ARPG, based on the game "Warframe" by Digital Extremes',
                        'Created purely by members of the Warframe community; programming mainly produced by me',
                        'Built on top of the "Dethsquare Engine", my custom cross-platform (Windows/macOS/Linux/Android) 2D game engine',
                        'Dethsquare uses several native APIs to improve performance and quality, such as OpenGL and OpenAL',
                        'Custom multiplayer implementation that uses peer-to-peer networking'
                    ]
                }
            ]
        },
        {
            title: 'Mobile Applications',
            items: [
                {
                    title: 'Warframe Utility',
                    languages: 'Java, PHP, XML, SQL',
                    frameworks: 'Android, MySQL, SQLite',
                    links: [
                        {
                            url: 'https://play.google.com/store/apps/details?id=com.ezardlabs.warframe',
                            text: 'Link (Google Play Store)'
                        }
                    ],
                    description: [
                        'Companion app for the game "Warframe", by Digital Extremes',
                        'Started off as a damage calculator for the complex modding system in Warframe, but soon grew into a ' +
                        'mission notification system, wiki, mobile forums browser (before the official forums supported mobile CSS), ' +
                        'and several other features',

                        'A PHP / MySQL backend provided an XML API that served stats for the hundreds of weapons, enemies and items, ' +
                        'allowing the app to update its data (which was then stored in a local SQLite database) without requiring an ' +
                        'update to be submitted to the Google Play Store',

                        'A similar mechanism provided language support for 21 non-English languages, with translations provided by users ' +
                        'through a web interface',

                        'Acquired over 370,000 downloads, with an average rating of 4.61 across over 27,000 reviews'
                    ]
                }
            ]
        },
        {
            title: 'Websites',
            items: [
                {
                    title: '8-Bit Warframe',
                    languages: 'Typescript, Node.js',
                    frameworks: 'Angular, Express.js, MongoDB',
                    links: [
                        {
                            url: 'https://8bitwarframe.com',
                            text: 'Link (8bitwarframe.com)'
                        },
                        {
                            url: 'https://github.com/8-Bit-Warframe/Server',
                            text: 'Source (GitHub)'
                        }
                    ],
                    description: [
                        'Website for the above 8-Bit Warframe',
                        'Originally created as a pure HTML / CSS website, then updated to be a single-page application (SPA) using ' +
                        'Ember.js, and recently updated again as an Angular SPA',
                        'Typescript / Node.js backend connects to a MongoDB instance, providing a RESTful API via Express.js for ' +
                        'authentication (using JWTs) and, in the future, services tied more directly into the game (such as saving and ' +
                        'retrieving player profiles)'
                    ]
                },
                {
                    title: 'Verminguide',
                    languages: 'Javascript, Node.js, Lua, SQL',
                    frameworks: 'Express.js, MySQL, Handlebars.js',
                    links: [
                        {
                            url: 'http://verminguide.com/',
                            text: 'Link (verminguide.com)'
                        },
                        {
                            url: 'https://github.com/Ezard/Verminguide',
                            text: 'Source (GitHub)'
                        }
                    ],
                    description: [
                        'Wiki-style website for the game "Warhammer: End Times - Vermintide"',
                        '"Home-grown" SPA solution using Javascript and Handlebars templates',
                        'Parsed Lua game scripts to obtain data such as weapon statistics',
                        'Development ceased due to decreased player-base of Vermintide'
                    ]
                }
            ]
        }
    ];
}
