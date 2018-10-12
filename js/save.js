const file = localStorage.getItem('Html')
if(file){
    document.querySelector("#past").textContent = file.replace(/\\n/g,'').replace(/\\t/g,'').replace(/\\"/g,'"');
    

    document.querySelector('#press').addEventListener('click', function(event){
        event.preventDefault()

        function sam(){
        localStorage.clear();
        }
    })
}


