const HeaderObjectString = localStorage.getItem('HeaderObject')
const ContentOjectString = localStorage.getItem("ContactObject")
const bodyObjectString = localStorage.getItem("BodyObject")
const footerObjectString = localStorage.getItem("FooterObject")

if(!HeaderObjectString||!ContentOjectString||!bodyObjectString||!footerObjectString){
    window.location = 'template.html';
}

const headerObject = JSON.parse(HeaderObjectString)
const contentObject = JSON.parse(ContentOjectString)
const bodyObject = JSON.parse(bodyObjectString)
const footerObject =JSON.parse(footerObjectString) 


document.querySelector("#title").textContent = headerObject.tabHeader;
document.querySelector("#body").style.color = headerObject.fontColor;
document.querySelector("#body").style.fontFamily = headerObject.fontSelection;
document.querySelector("#jumboTronTop").style.backgroundColor = headerObject.headerbackgroundColor;
document.querySelector("#personalPicture").src = headerObject.personalImage;
document.querySelector("#job").textContent = headerObject.job;
document.querySelector("#name").textContent = headerObject.firstLastNames;
document.querySelector("#location").textContent = headerObject.location;

document.querySelector("#navBar").style.backgroundColor = contentObject.contactbackgroundColorInput;
document.querySelector("#phone").innerContent = contentObject.Phone;
document.querySelector("#email").innerContent = contentObject.Email;
document.querySelector("#linkdenlink").href = contentObject.Linkden;
document.querySelector("#githublink").href = contentObject.GitHub;

document.querySelector("#bodycontainer").style.backgroundColor = bodyObject.BackgroundColor;
document.querySelector("#languages").textContent = bodyObject.languages;
document.querySelector("#education").textContent = bodyObject.education;
document.querySelector("#Experience").textContent = bodyObject.Experience;

document.querySelector("#footer").style.backgroundImage = footerObject.BackgroundColor;
document.querySelector("#info").textContent = footerObject.year;


const store = document.querySelector('html').outerHTML;
localStorage.setItem("Html",JSON.stringify(store));

document.querySelector("hidden").textContent