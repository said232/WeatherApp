 let latitude;
 let longitude;
 const notification = document.getElementsByClassName("notification")[0];
function getLocation() {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(onSccess,onError);
    
}

function onSccess(position)
{
    console.log(position);
    
}
function onError(error)
{
const p =document.createElement('p');
    console.log('no what did you do is ',error);
    p.innerHTML=error.message
    notification.style.display='block'
    notification.appendChild(p)
}
getLocation()
