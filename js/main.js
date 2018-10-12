//accessed variables.
//local storage json.stringaffy storting a

//  this display all the html of the page 
//  document.querySelector('html').outerHTML

var headerObject = {
    tabHeader: "header",
    fontColor: "green",
    fontSelection: "times new roman",
    personalImage: "",
    headerbackgroundColor: "red",
    job: "full stack",
    firstLastNames: "Joey Gaitan",
    location: "Seattle",
}

var contentObject ={
    contactbackgroundColorInput: "black",
    Phone: "123",
    Email: "joeygaitan707@gmail.com",
    Linkden: "google.com",
    GitHub: "github.com"
}

var bodyObject = {
    BackgroundColor: "black",
    languages: "javascript",
    education: "oxford",
    Experience: "Beating boxing off broadway"
}

var footerObject = {
    BackgroundColor: "black",
    year: "2018"
}

 document.querySelector('form').addEventListener('submit', function(event){
     event.preventDefault()
    
     //headerObject
     headerObject.tabHeader = event.target.headerTab.value;
     headerObject.fontColor = event.target.HeaderFontColor.value;
     headerObject.fontSelection = event.target.HeaderFont.value;
     headerObject.headerbackgroundColor = event.target.HeaderBackgroundColorInput.value;
     headerObject.personalImage = event.target.PersonalImage.value;
     headerObject.job = event.target.Job.value;
     headerObject.firstLastNames = event.target.Name.value;
     headerObject.location = event.target.Place.value;

    //contentObject
    contentObject.contactbackgroundColorInput = event.target.ContentBackgroundColor.value;
    contentObject.Phone = event.target.PhoneNumber.value;
    contentObject.Email = event.target.emailInput.value;
    contentObject.Linkden = event.target.GitHubInput.value;
    contentObject.GitHub = event.target.LinkdenInput.value;

    //bodyObject
    bodyObject.BackgroundColor = event.target.bodyBackgroundColor.value;
    bodyObject.languages = event.target.LanguagesInput.value;
    bodyObject.education = event.target.EducationInput.value;
    bodyObject.Experience = event.target.ExperienceInput.value;

    //footerObject
    footerObject.BackgroundColor = event.target.footerBackgroundInput.value;
    footerObject.year = event.target.footerCopyRight.value;

     localStorage.setItem('HeaderObject', JSON.stringify(headerObject))
     localStorage.setItem('ContactObject',JSON.stringify(contentObject))
     localStorage.setItem("BodyObject", JSON.stringify(bodyObject))
     localStorage.setItem("FooterObject", JSON.stringify(footerObject))


     window.location = 'constructor.html'
 })