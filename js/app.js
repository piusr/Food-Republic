/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

//An Array of our Links
const links = ['Home', 'About', 'Team', 'Contact us']

//Objects of links
const linksObject = [
    {
        "name": "Home",
        "section": "#section1",
        "class": "one"
    },
    {
        "name": "About",
        "section": "#section2",
        "class": "two"
    },
    {
        "name": "Team",
        "section": "#section3",
        "class": "three"
    },
    {
        "name": "Contact us",
        "section": "#section4",
        "class": "four"
    },
]

//The ul element
const ul = document.querySelector("#navbar__list");

/**
 * **************************
 * 
 * @description Function To Create Dynamic Link items
 * 
 * *************************
 */


createLinks = linksObject => {
      
    //We loop through the links object and assign classes to each link
    for (let link of linksObject) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.section}"  class="menu__link ${link.class}">${link.name}</a>`;
        ul.appendChild(li);
    }
}
createLinks(linksObject);




    /**
     * **************************
     * 
     * @description Function To Scroll To Each Section
     * 
     * *************************
     */

     const jumpToSection = (links) => {
         for (let link of links){
             const linkRef = document.querySelector(`.${link.class}`) //Refference to each link
             const sec = document.querySelector(link.section) //Refference to each section

             //Add event listener to each link
             
             linkRef.addEventListener('click', e => {
                e.preventDefault();
                removeClass('menu__link','activeLink')
                removeClass('active', 'active')
                sec.classList.add("active")
                linkRef.classList.add("activeLink")
                sec.scrollIntoView({ behavior: "smooth" })
             });      
         }
/**
 * @description We listen for a mouse scroll event so if a link is not clicked
 * the class still attaches to the section
 * 
 */
            //We get all the sections of our website
        const secs = document.querySelectorAll("section");
    
        //We loop through each section.
        secs.forEach( sec => {
           
            //We attach event listener to the window so that on scroll and we get to a particular section we can attach active class
             window.addEventListener("scroll", () => {
               
            if(sec.getBoundingClientRect().top < window.innerHeight){
               
                sec.classList.add("active");
              
            } else {
                sec.classList.remove("active");
            }
        })
           
        });


     }

     const removeClass = (byClassName, className) => {
        const active = document.getElementsByClassName(byClassName);
        [...active].forEach(e => e.classList.remove(className));
     }

     //Invoke function jumpToSection
     jumpToSection(linksObject);

    

 

    /**
     * **************************
     * 
     *@description Function To Scroll Back to Top
     * 
     * *************************
     */
    function backTop() {

        const btnTop = document.querySelector("#btnTop");

        // When the user scrolls down 1350px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }

           
        };


        /**
         * **************************
         * 
         * @description Event Listener to Back To Top button
         * 
         * *************************
         */

        btnTop.addEventListener('click', () => {


            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    backTop();
    

    //Function to get year

    function getYear(){
        const dtPosition = document.querySelector('#date');
        const dt = new Date();

      
        
        dtPosition.innerHTML = ` &copy All Rights Reserved  ${dt.getFullYear()}`;
        
    }
    getYear();

