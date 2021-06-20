function changeBgrnd(){
    document.getElementById('changeButton').style.backgroundColor = 'green';
    document.body.style.backgroundColor = 'white';
    return true;
}
document.getElementById('changeButton').addEventListener('click', changeBgrnd);