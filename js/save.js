const file = localStorage.getItem('Html')

if(!file){

}else{
    document.querySelector("past").innerContent = file;

    document.querySelector('press').addEventListener('click', function(event){
        event.preventDefault()

        function sam(){
        localStorage.clear();
        }
    })
}


