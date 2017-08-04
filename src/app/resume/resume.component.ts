import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {DetailsDialogComponent} from './dialog/details.dialog';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
    data: Section[] = [
        {
            title: 'Education',
            items: [
                {
                    title: 'University of York',
                    desc: 'BSc Computer Systems',
                    period: '2013 - 2017'
                },
                {
                    title: 'Calday Grange Grammar School',
                    period: '2005 - 2013'
                }
            ]
        },
        {
            title: 'Related Experience',
            items: [
                {
                    title: 'Philips Research UK',
                    period: 'July 2015 - July 2016',
                    details: [
                        'Worked in a professional environment for a year as part of my degree',
                        'Built several Android and web application prototypes to assist patients with mental health problems',
                        'Heavy focus on UI and UX, but also included technologies such as face recognition'
                    ]
                },
                {
                    title: 'University of York DevSoc',
                    period: 'January 2014 -  July 2015',
                    details: [
                        'Founded the university’s game development society',
                        'Elected as chair of the society',
                        'Coordinated the efforts of the other members of the society committee',
                        'Taught game development skills involving the Unity3D game engine to other university students'
                    ]
                },
                {
                    title: 'Warframe Utility',
                    period: 'May 2013 - May 2016',
                    details: [
                        'Built, deployed and updated a successful companion application for the game "Warframe", by Digital Extremes',
                        'Provided a high level of support, often servicing over 200 support emails a week with a sub-24hr response time',
                        'Ceased development in April 2015, but continued to provide support for over a year'
                    ]
                },
                {
                    title: 'Lost Sector (8-Bit Warframe)',
                    period: 'September 2014 - Present',
                    details: [
                        'Loosely lead and coordinate a global team of members of the Warframe community',
                        'Built and continue to update a cross-platform 2D game engine called the ‘Dethsquare Engine’ ' +
                        '(https://github.com/8-Bit-Warframe/Dethsquare-Engine) in Java, using APIs such as OpenGL and OpenAL, ' +
                        'and using Gradle as a build tool',
                        'Revamped existing game code to work with Dethsquare, and built upon it by adding in new features such as ' +
                        'enemies, skills and missions (https://github.com/8-Bit-Warframe/LostSector)',
                        'Built peer-to-peer multiplayer support from the ground up, using technologies and concepts such as ' +
                        'UPnP and NAT punchthrough'
                    ]
                },
                {
                    title: 'University of Liverpool',
                    period: 'June 2012 - August 2012',
                    details: [
                        'Completed a research project as part of the Nuffield Research Placement Scheme',
                        'Project involved designing and analysing a discrete analogue for the harmonic resonance on different regular grids'
                    ]
                }
            ]
        },
        {
            title: 'Other Experience',
            items: [
                {
                    title: 'Goodricke College, University of York',
                    period: 'January 2014 - August 2015',
                    details: [
                        'Junior Common Room Committee (JCRC) Tech Officer',
                        'Involved maintaining the JCRC’s electrical equipment',
                        'Also involved setting up audio/visual equipment at college events of all scales'
                    ]
                }
            ]
        },
        {
            title: 'Qualifications',
            items: [
                {
                    desc: 'Motivated, enthusiastic and passionate about my work'
                },
                {
                    desc: 'Goal-oriented'
                },
                {
                    desc: 'Ability to work in a team or on my own'
                },
                {
                    desc: 'Proficient in a wide array of programming languages',
                    details: [
                        'Java (including Android)',
                        'C# (mainly pertaining to use with Unity3D)',
                        'Python',
                        'PHP',
                        'Javascript (including variations such as Node.js and Typescript)',
                        'C++ (not "proficient" as of yet, but an area of active improvement)'
                    ]
                },
                {
                    desc: 'Knowledge of a variety of data-interchange formats',
                    details: [
                        'XML',
                        'JSON',
                        'SOAP'
                    ]
                },
                {
                    desc: 'Experience using several types and brands of database',
                    details: [
                        'SQL (MySQL, MS_SQL, SQLite)',
                        'NoSQL (MongoDB)'
                    ]
                }
            ]
        },
        {
            title: 'Interests',
            items: [
                {
                    desc: 'Game development/design'
                },
                {
                    desc: 'Mobile application development'
                },
                {
                    desc: 'Artificial intelligence'
                },
                {
                    desc: 'Web development'
                },
                {
                    desc: 'Music (play piano)'
                },
                {
                    desc: 'Sports e.g. skiing, rock climbing, squash'
                }
            ]
        }
    ];

    constructor(public dialog: MdDialog) {
    }

    openDialog(item: Item) {
        const dialogRef = this.dialog.open(DetailsDialogComponent);
        dialogRef.componentInstance.data = item;
    }
}

class Section {
    constructor(public title: string, public items: Item[]) {
    }
}

export class Item {
    constructor(public title?: string, public desc?: string, public period?: string, public details?: string[]) {
    }

}
