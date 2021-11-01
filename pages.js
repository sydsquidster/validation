var pages=["Home" , "About" , "View"];



function createNav(){
    var nav =document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);
    function createButton(pg){
        var butt = document.createElement("button");
        butt.innerHTML=pg;

        butt.addEventListener("click" , function(){
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="Home") {
        homePage()
    }else if(pg==="About") {
        aboutPage()
    } else if(pg==="View"){
        ViewPage()
        }
}


function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="About";
    wrapper.appendChild(header);
    var text = document.createElement("h3");
    text.innerHTML="Sydnee";
    wrapper.appendChild(text);
}


function ViewPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="View Notes";
    wrapper.appendChild(header);


    var note = document.createElement("INPUT");
    note.setAttribute("type" , "text");
    note.placeholder="Note";
    document.body.appendChild(note);

    var importance = document.createElement("INPUT");
    importance.setAttribute("type" , "text");
    importance.placeholder="Importance";
    document.body.appendChild(importance);
    var submitted = document.createElement("h3");
    wrapper.appendChild(submitted);

    //var button = document.createElement("button");
    //button.innerHTML = "Submit Note";
    //button.addEventListener()

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Submit Note";
    document.body.appendChild(btn);
    btn.addEventListener("click" , function(){
        if(note.value.length > 1){
            if(isNaN(Number(importance.value)) === false){
                list.push({grade: importance.value, note: note.value})
                renderList();
            }else if(isNaN(Number(importance.value)) === true){
               submitted.innerHTML = "Type a proper number.";
            }
        }else if (note.value.length <= 1){
            submitted.innerHTML = "Note not long enough.";
        }
    })
    wrapper.appendChild(btn);

    var submittednotes = document.createElement("h4");
    wrapper.appendChild(submittednotes);
    var list=[{grade: "" , note: ""}];

    function renderList(){
        submittednotes.innerHTML = "";
        for (var i=0; i<list.length; i++){
            var ele = document.createElement("div");
            ele.innerHTML = list[i].grade + " " + list[i].note;
            submittednotes.appendChild(ele);
        }
    }



    }


createNav();
createWrapper();
navigate("Home");