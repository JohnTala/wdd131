
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