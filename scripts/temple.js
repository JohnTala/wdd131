const myDate=new Date();
const myName='Saidi Talatala';
const icon="🌺";
const myCountry="South Africa";
let year = myDate.getFullYear();
const currentYear=document.querySelector("#currentyear");
currentYear.innerHTML=`&copy; ${year} ${icon} ${myName} ${icon} ${myCountry}`;

const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric', 
    hour12: false
 }).format(myDate);

const lastModifiedDate=document.querySelector('#lastModified');
// const today = new Date();
  lastModifiedDate.innerHTML=`<span>Last modification : ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(myDate)} ${formattedTime}:${myDate.getSeconds()}</span>`;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});



