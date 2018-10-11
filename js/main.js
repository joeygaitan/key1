//accessed variables.
//local storage json.stringaffy storting a

//  this display all the html of the page 
//  document.querySelector('html').outerHTML

var HeaderObject = {
    tabHeader: "header",
    fontColor: "green",
    fontSelection: "times new roman",
    BackgroundBannerImage: "url('images/wallpaper.jpg')",
    PersonalImage: "images/Happy.gif",
    Job: "full stack",
    firstLastNames: "Joey Gaitan",
    location: "Seattle",
}

var contentOject ={
    fontColor: "green",
    fontSelection: "times new roman",
    BackgroundColor: "black",
    Phone: "123",
    Email: "joeygaitan707@gmail.com",
    linkden: "google.com",
    gitHub: "github.com"
}

var bodyObject = {
    fontColor: "green",
    fontSelection: "times new roman",
    BackgroundColor: "black",
    languages: "javascript",
    education: "oxford",
    Experience: "Beating boxing off broadway"
}

var footerObject = {
    fontColor: "green",
    fontSelection: "times new roman",
    BackgroundColor: "black",
    year: "2018"
}

//  this display all the html of the page 
//  document.querySelector('html').outerHTML

//header tag change

document.querySelector("#HeaderTab").addEventListener("change",function(event){

   document.querySelector("title").textContent = event.target.value;
   localStorage.setItem("headerTab", document.querySelector("title").textContent);
 })
 
 document.querySelector("#HeaderFontColor").addEventListener("change",function(event){
    
    document.querySelector("HeaderFontColor").textContent = event.target.value;
 })

document.querySelector("#HeaderFont").addEventListener("change",function(event){
    
   document.querySelector("HeaderFont").textContent = event.target.value;

})
//personal image
document.querySelector("#PersonalImage").addEventListener("change",function(event){
    
    document.querySelector("personalImage").textContent = event.target.value;
 })

document.querySelector("#Job").addEventListener("change",function(event){
    
    document.querySelector("Job").textContent = event.target.value;
 })

 document.querySelector("#Name").addEventListener("change",function(event){
    
    document.querySelector("Name").textContent = event.target.value;
 })

 document.querySelector("#Location").addEventListener("change",function(event){
    
    document.querySelector("Location").textContent = event.target.value;
 })

 document.querySelector("#BannerImage").addEventListener("change",function(event){
    
    document.querySelector("BannerImage").textContent = event.target.value;
 })

 //information changer portion



 //body information changer portion



 //footer portion




 // form handling

 document.querySelector('form').addEventListener('submit', function(event){
     event.preventDefault()

     HeaderObject.tabHeader = event.target.HeaderTab.value

     localStorage.setItem('HeaderObject', JSON.stringify(HeaderObject))




     window.location = 'constructor.html'
 })