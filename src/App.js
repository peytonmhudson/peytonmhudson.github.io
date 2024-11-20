import logo from './translogo.png';
import headshot from './prof.webp';
import divider_curve from './curve.svg';
import gradient from './layered-waves-haikei.svg';
import divider_waves from './waves.svg';
import mobile_lines from './lines.png';

//start import of art
import art_GirlOnCanvas from './Artwork/girl_on_canvas.jpg';
import art_Cowgirl from './Artwork/cowgirl.jpg';
import art_CCLogo from './Artwork/CC_Logo.jpg';
import art_UnionPost from './Artwork/Union_poster_.jpg';
import art_Arches from './Artwork/Arches.jpg';


import $ from 'jquery';
import React, {useState} from 'react';


import './App.css';


let work_experience = [
    {
        title: "Park Avenue Florist",
        description: "Floral Designer / 2019 - 2023",
        experience: [
            "Creative Design",
            "Color Theory",
            "Point of Sales Operations",
            "Customer Relations",
            "Effective Time Management",
        ]
    },
    {
        title: "China Cat Estate Sales",
        description: "Art Researcher / 2021 - Current",
        experience: [
            "Art Pricing",
            "Research of Art",
            "Art Appraisals",
            "Historical Context",
            "Artwork Authentication",

        ]
    },
    {
        title: "Kelly Services Substitute",
        description: "Kelly Services / 2024 - Current",
        experience: [
            "Delivered Engaging Lessons",
            "Provided Individualized Support",
            "Facilitated a Safe Learning Environment",
        ]
    },

];

let school_experience = [
    {
        title: "Orange Park Highschool",
        description: "2019 - 2023",
        experience: [
            "Highschool Diploma",
            "Dual Enrollment with SJR State"
        ]
    },
    {
        title: "SJR State College",
        description: "2019 - 2023",
        experience: [
            "Associates in Arts Degree",
            "Dual Enrollment with Highschool",
        ]


    },
    {
        title: "University of North Florida",
        description: "2023 - 2027",
        experience: [
            "Dual Major",
            "Bachelor's in History",
            "Bachelor's in Painting and Drawing"
        ]
    },
    {
        title: "Relevant Coursework",
        description: "UNF and SJR",
        experience: [
            "Drawing I",
            "Drawing II",
            "Two Dimensional Design",
            "Three Dimensional Design",
            "Ceramics",
            "Art History I & II",
            "Art Appreciation",
            "Career Development",
            "American Art I",
            "Acient Greece History",
            "Early Modern Ireland History",
            "The Craft of The Historian",
            "US Environmental History",
            "Modern Germany History",
            "Florida History",
            "1960's and the Vietnam War",
            "South Africa History",
            "Spanish I & II",
            "Humanities"
        ]
    }
]

const portfolio_items = [
    {
        title: "Portrait of a Woman",
        description: "Portrait of a woman; Oil on canvas.",
        year: '2022',
        img: art_GirlOnCanvas,
        category: "art"
    },
    {
        title: "China Cat Estate Sales Logo",
        description: "Logo created for China Cat Estate Sales.",
        year: '2024',
        img: art_CCLogo,
        category: "digital"
    },
    {
        title: "Arches",
        description: "Digitized image of Arches National Park, AZ.",
        year: '2024',
        img: art_Arches,
        category: "digital"
    },
    {
        title: "Flyer",
        description: "Flyer for Clay County Teacher's Union",
        img: art_UnionPost,
        year: '2024',
        category: "digital"
    },
    {
        title: "Cowgirl",
        description: "Oil on wood panel",
        img: art_Cowgirl,
        year: '2022',
        category: "art"
    }
//TODO: Add in other china cat.

];

const headerLinks = [
    {
        text: "About Me",
        link: "/#about"
    },
    {
        text: "Experience",
        link: "/#experience"
    },
    {
        text: "My Portfolio",
        link: "/#portfolio"
    },
    {
        text: "Get In Touch",
        link: "/#contact"
    },
];

function filterPortfolioItems(cat) {

    if (cat.toLowerCase() === 'all')
        return portfolio_items;

    let items = [];

    for (let i = 0; i < portfolio_items.length; i++) {
        if (portfolio_items[i].category.toLowerCase() === cat.toLowerCase()) {
            items.push(portfolio_items[i]);
        }
    }

    if (items.length === 0) {
        items.push({
            title: "Nothing Is Here Right Now",
            description: "",
            year: "",
            img: null,
            category: cat
        })
    }

    return items;
}

function Dropper({item}) {

    const id = item.title.toString().replaceAll(" ", "_");
    const [isDropped, setIsDropped] = useState(false); // Start with false to be shrunk

    const [dHeight, setDHeight] = useState('');

    const shrunk = {
        'height': '0px',
        'padding': '0px',
        'margin-bottom': '0px'
    };


    React.useEffect(() => {
        const toShrink = $("#" + id);

        // Temporarily set to auto to measure
        toShrink.css({'height': 'auto'});

        // Get the height and store it
        const height = toShrink.outerHeight() + 20 + 'px';
        setDHeight(height);

        // Then shrink it
        toShrink.css(shrunk);
    }, []); //needs empty deps to mount


    const open = {
        'height': dHeight,
        'padding': '0.5rem',
        'margin-bottom': '1rem'
    }


    function onClick() {
        const toShrink = $("#" + id);

        if (isDropped) {
            toShrink.css(shrunk);
        } else {
            toShrink.css(open);
        }

        setIsDropped(!isDropped);
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-row gap-2 items-center" onClick={onClick}>
                <p className="text-3xl lg:text-4xl text-center cursor-pointer text-white">{item.title}</p>
                <p className="text-lg lg:text-xl align-bottom cursor-pointer mt-1 text-sunshine">
                    {isDropped ? '▼' : '▶'}
                </p>
            </div>

            <div id={id}
                 className="bg-reefHalf mb-4 rounded-lg transition-all  duration-500 overflow-y-hidden max-w-2xl">
                <p className="font-semibold mb-2 text-2xl px-2 text-white">{item.description}</p>
                <ol className="space-y-1 mr-2">
                    {item.experience.map((exp, index) => (
                        <li className='ml-4 text-subwhite text-xl font-semibold' key={index}><span
                            className="text-xl lg:text-2xl mr-2 text-offblack">•</span>{exp}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}


function HeaderLinks() {
    const headerMap = headerLinks.map(headLink => (
        <HeaderLink text={headLink.text} where={headLink.link}/>
    ));

    const headerID = 'dropdown-mob-menu';

    // Add useEffect to handle click outside
    React.useEffect(() => {
        function handleClickOutside(event) {
            const menu = document.getElementById(headerID);
            const menuButton = document.querySelector('.menu-button'); // Add this class to your img

            if (menu && !menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.add('hidden');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function onAttention() {
        $("#" + headerID).toggleClass("hidden");
    }

    return (
        <>
            <div className="lg:hidden">
                <img
                    onClick={onAttention}
                    src={mobile_lines}
                    width="50px"
                    className="cursor-pointer menu-button" // Added menu-button class
                />

                <div
                    id={headerID}
                    className="hidden absolute p-2 z-10 mt-4 -ml-12 bg-white shadow-xl shadow-t_black flex flex-col items-center justify-start gap-2"
                >
                    {headerMap}
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-center ml-12">
                    {headerMap}
                </div>
            </div>
        </>
    );
}


function HeaderLink({text, where}) {

    return (

        <a className="border-b-2 border-transparent px-3 py-0.5 whitespace-nowrap hover:border-lagoon lg:ml-12 text-xl lg:text-2xl transition-all duration-100 text-black hover:text-lagoon font-semibold"
           href={where}>{text}</a>

    );
}

function Header() {
    //do header
    return (


        <div className="h-56 shadow-md shadow-t_black w-full flex flex-row items-center">
            <div className="lg:ml-24 flex flex-row items-center justify-around lg:justify-start w-full">
                <div>

                    <img className="w-16 m-4" src={logo}/>

                </div>

                <HeaderLinks/>

            </div>
        </div>
    );

}


function Footer() {

    return (
        <div className="h-16 w-full flex flex-row items-center justify-center ">
            <p>&copy; {new Date().getFullYear()} Shawn Bohn. All rights reserved.</p>
        </div>
    );
}

function LinkedYellowButton({text, link}) {

    return (
        <a className="transition-all duration-300 text-white font-semibold text-2xl " href={link}
           rel="noopener noreferrer">
            <button
                className="transition-all duration-300 hover:bg-transparent border-2 border-sunshine bg-sunshine py-3 px-9 rounded-2xl">
                {text}
            </button>
        </a>
    );

}


function Body() {

    const [schoolItems, setSchoolItems] = useState(
        school_experience.map((item, index) => (
            <Dropper key={index} item={item}/>
        ))
    );

    const [workItems, setWorkItems] = useState(
        work_experience.map((item, index) => (
            <Dropper key={index} item={item}/>
        ))
    );


    //map portfolio items later..., maybe a picture, date, description etc...

    const [filter, setFilter] = useState("all");
    const [overlayContent, setOverlayContent] = useState(null);

    const [activePortfolio, setActivePortfolio] = useState(filterPortfolioItems(filter).map(item =>
        (
            <PortfolioItem portfolioItem={item} setOverlay={setOverlayContent}/>
        )));

    //map the portfolio using the filter...

    function Portfolio() {

        const imgOverlayID = 'img_overlay_fixed';

        function toggleScrolling(enable) {
            let scrollParam = 'auto';

            if (!enable) {
                scrollParam = 'hidden';
            }

            $('body').css('overflow', scrollParam);
        }

        React.useEffect(() => {

            const $imgOverlay = $('#' + imgOverlayID);

            if (overlayContent == null) {
                setIsZoomed(false);
                $imgOverlay.removeClass('flex');
                $imgOverlay.addClass('hidden');
                toggleScrolling(true);
            } else { //if content
                $imgOverlay.removeClass('hidden');
                $imgOverlay.addClass('flex');
                toggleScrolling(false);
            }

        }, [overlayContent]);

        function clearOverlay() {
            setOverlayContent(null);
        }

        const zoomAtb = "scale-125";
        const zoomIn = "cursor-zoom-in";
        const zoomOut = "cursor-zoom-out";
        const [isZoomed, setIsZoomed] = useState(false);

        function toggleZoom(imgEvent) {

            const $targ = $(imgEvent.target);

            imgEvent.preventDefault();

            if (isZoomed) {
                setIsZoomed(false);
                $targ.removeClass(zoomAtb);
                $targ.addClass(zoomIn);
                $targ.removeClass(zoomOut);
            } else {
                setIsZoomed(true);
                $targ.addClass(zoomAtb);
                $targ.addClass(zoomOut);
                $targ.removeClass(zoomIn);
            }
        }

        return (

            <div id="portfolio">

                <div id={imgOverlayID}
                     className="hidden fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-40">
                    <p onClick={clearOverlay}
                       className="absolute top-20 right-16 lg:right-1/4 text-white cursor-pointer font-bold lg:text-3xl hover:text-crimson transition-all duration-100">X</p>
                    <img onClick={toggleZoom} src={overlayContent} className="w-10/12 h-10/12 lg:w-4/12 lg:h-4/12 z-50 cursor-zoom-in"/>
                </div>

                <div className="overflow-hidden">
                    <p className="text-6xl text-center font-semibold">My Portfolio</p>

                    <PortfolioButtons activeID={filter} setActiveID={setFilter}/>


                    <div
                        className="w-full transition-all duration-300 flex flex-row items-center justify-center flex-wrap mt-24 gap-y-32">
                        {activePortfolio}
                    </div>


                </div>
            </div>


        );
    }

    //set up the styling for how the portfolio item will render => used for all categories.
    function PortfolioItem({portfolioItem, setOverlay}) {

        /*
         {
        title: "Painting of Joan Baez",
        description: "A portrait of Joan Baez",
        year: '2020',
        img: headshot,
        category: "art"
    }
         */

        function imgPop(event) {
            const src = event.target.src; // Get the src from the clicked image
            setOverlayContent(src); // Set the overlay content
        }

        return (

            <div className="dropIn w-full lg:w-4/12 flex flex-col items-center gap-1 h-96">

                {portfolioItem.img === null ? <></> :
                    <img onClick={imgPop} src={portfolioItem.img}
                         className="cursor-pointer min-h-72 min-w-72 max-w-72 max-h-72 " alt=""/>}

                <h1 className="text-black text-2xl text-center w-8/12">{portfolioItem.title}</h1>
                <p className="text-gray-800 text-lg italic text-center w-8/12">{portfolioItem.description}</p>
                <p className="text-gray-600 text-center">{portfolioItem.year}</p>

            </div>
        );
    }


    function PortfolioButtons({activeID, setActiveID}) {
        //const [activeID, setActiveID] = useState("all"); //use the all active

        return (
            <div className="flex flex-row items-center justify-center gap-4 mt-10 flex-wrap">
                <PortfolioButton text="All" id="all" setActiveID={setActiveID} isActive={activeID === 'all'}/>
                <PortfolioButton text="2D Art" id="art" setActiveID={setActiveID} isActive={activeID === 'art'}/>
                <PortfolioButton text="Digital" id="digital" setActiveID={setActiveID}
                                 isActive={activeID === 'digital'}/>
            </div>
        );
    }

    function PortfolioButton({text, id, isActive, setActiveID}) {
        const baseStyling =
            "border-2 w-fit px-4 py-1 border-black rounded-2xl transition-all duration-200 hover:text-white hover:bg-lagoon hover:border-lagoon text-2xl font-semibold";
        const activeStyling = " bg-lagoon border-lagoon text-white";
        const inactiveStyling = " bg-transparent text-gray-800";

        // Combine base styling with either active or inactive styling based on `isActive`
        const bStyling = isActive ? baseStyling + activeStyling : baseStyling + inactiveStyling;

        function whenClicked() {

            setActiveID(id); // Notify parent component of the active button
            setActivePortfolio(filterPortfolioItems(id).map(item =>
                <PortfolioItem portfolioItem={item}/>
            ));
        }

        return (
            <button id={id} className={bStyling} onClick={whenClicked}>
                {text}
            </button>
        );
    }


    return (
        <div className="flex flex-col w-full mt-12">
            <div className="flex flex-col w-full justify-center bg-offwhite">

                <div className="flex flex-col justify-center items-center mb-24">
                    <h1 className="text-3xl md:text-5xl font-bold text-center" id="about">Peyton Hudson's Portfolio</h1>
                    <h2 className="text-md md:text-xl mt-2 text-gray-500">Dual Major In Painting & Drawing and
                        History</h2>

                    <h2 className="text-md md:text-xl mt-2 text-gray-500">UNF 2027</h2>
                </div>

                <div className="flex flex-col  lg:flex-row items-center justify-center gap-24">
                    <div className="lg:w-4/12 flex flex-col items-center justify-center">
                        <img className="rounded-full shadow-lg shadow-t_black w-1/2 lg:w-10/12" src={headshot}/>
                    </div>

                    <div className="lg:w-4/12 px-12 lg:px-0">
                        <p className="text-xl leading-loose">
                            <b>(Something about yourself)</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>


                </div>

            </div>

            <div className="bg-lagoon w-full">

                <img id="experience" className="w-full content-stretch" src={divider_curve} alt="Divider curve"/>


                <h2 className=" text-center text-6xl  mt-12 font-semibold text-offwhite">Experience</h2>

                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:gap-48 mb-6 lg:mb-12">
                    <div className="flex flex-col items-center justify-center gap-4">

                        <div className="mt-12">
                            <h1 className="text-sunshine text-5xl font-semibold text-center mb-8">Working</h1>
                            {workItems}
                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">

                        <div className="mt-12">
                            <h1 className="text-sunshine text-5xl font-semibold text-center mb-8">School</h1>
                            {schoolItems}
                        </div>

                    </div>
                </div>


                <img src={gradient} className="w-full"/>
            </div>

            <Portfolio/>

            <div id="contact" className="bg-lagoon w-full mt-32 flex flex-col items-center gap-6 pb-12">
                <img src={divider_waves} width="100%" alt="Divider waves"/>

                <h1 className="text-sunshine text-center text-5xl font-bold py-4">Get In Touch</h1>

                <p className="lg:w-8/12 w-11/12 text-center text-offwhite text-2xl mb-12">
                    If you're interested in contacting, hiring, or collaborating with me,
                    please don't hesitate to get in touch. You can reach out via phone or email,
                    and I'll be happy to discuss any opportunities. Looking forward to connecting!
                </p>

                <div className="flex flex-col md:flex-row items-center justify-evenly gap-12 lg:gap-24 pb-12 lg:pb-24">
                    <LinkedYellowButton link="tel:9045894772" text="Phone"/>
                    <LinkedYellowButton link="mailto:pmhudsonford@gmail.com" text="Email"/>

                </div>

            </div>

        </div>
    );
}


function App() {
    return (

        <div>

            <Header/>

            <div id="overlay" className="w-full flex flex-grow h-full">
                <Body/>
            </div>


            <Footer/>

        </div>

    )
}

export default App;
