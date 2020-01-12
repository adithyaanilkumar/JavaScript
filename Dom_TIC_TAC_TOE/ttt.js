var restart= document.querySelector("#bb")
var square = document.querySelector('td')
function clearboard(){
    for (var i=0; i < square.length; i++)
        {
            square[i].textContent='x';
        }
}
restart.addEventListener('click',clearboard);