let mainString = ''
let defaultValue = 0
document.getElementById('input').value = defaultValue;

let cal = () =>{
    document.getElementById('input').value = eval(mainString);
    mainString = ''
}   

let resetInput = () =>{
    document.getElementById('input').value = defaultValue;
}

let del = () =>{
    if(mainString === '')
    document.getElementById('input').value = defaultValue;
    // return;

    if(mainString.length === 1){
        mainString = ''
    document.getElementById('input').value = defaultValue;
    }

    if(mainString.length>1){
        mainString = mainString.slice(0,mainString.length-1)
        document.getElementById('input').value = mainString; 
    }
}

let bt = document.getElementsByClassName('bt')
for (let x in bt) {
    bt[x].addEventListener('click', (e) => {
        mainString = mainString + e.target.value
        document.getElementById('input').value = mainString;
    })
}

