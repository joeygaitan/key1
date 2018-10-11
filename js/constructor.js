const HeaderObjectString = localStorage.getItem('HeaderObject')


if(!HeaderObjectString){
    window.location = 'template.html'
}

const HeaderObject = JSON.parse(HeaderObjectString)

console.log(HeaderObject)