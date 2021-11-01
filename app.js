var responseDiv= document.body.querySelector(".response");



document.body.querySelector(".button").addEventListener("click", function (){
    var textValue = document.body.querySelector(".input").value;
    if(textValue==="coolStudent123"){
        window.location.href="menu.html"
    }else{
        responseDiv.innerHTML="Wrong Username"
    }
})




