const file = localStorage.getItem('Html')


if(file){
    console.log("I am in here")
    let editedHtml = file.replace(/\\n/g,'').replace(/\\t/g,'').replace(/\\"/g,'"');
    
    console.log(editedHtml)
    
    let holder = document.querySelector("#past")
    let clipboardButton = document.createElement('BUTTON')
    let p = document.createElement('P')
    clipboardButton.setAttribute('onClick', 'Clipboard()')
    clipboardButton.setAttribute("type", "button")
    clipboardButton.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    clipboardButton.innerHTML = 'Display to Copy'

    holder.appendChild(clipboardButton)

    function Clipboard(){
        let title = document.querySelector('.titleButton')
        title.innerHTML = 'Save HTML to copy'
        
        p.innerText = file.replace(/\\n/g,'').replace(/\\t/g,'').replace(/\\"/g,'"');
        holder.appendChild(p)
        
        holder.select();
        holder.setSelectionRange(0,99999);

        document.execCommand('copy');

        alert("Copied to clipboard");
    }
    
    

    let remover = document.querySelector('.remover')
    let button = document.createElement("BUTTON")

    button.setAttribute("onclick","formBuilder()")
    button.setAttribute("type", "button")
    button.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    button.innerHTML = 'erase or review your last portfolio'
    remover.appendChild(button)

    function formBuilder(){
        if (confirm("click okay to remove it")) {
            document.querySelector("#past").textContent = ''
            document.querySelector('.remover')
            localStorage.clear();
            remover.parentNode.removeChild(remover)
        } else {

        }
    }
}


