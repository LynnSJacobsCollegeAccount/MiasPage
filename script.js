alert("Welcome to my page");

function hideSection(section){
    var x = document.getElementById(section);
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("bioButton").innerHTML ="Hide Bio";
    }
    else{
        x.style.display = "none";
        document.getElementById("bioButton").innerHTML ="Show Bio";
    }
}

function resize(picture){

    var x = document.getElementById(picture);

    x.style.height = "600px";
    x.style.width = "600px";
}

function normal(picture){

    var x = document.getElementById(picture);

    x.style.height = "300px";
    x.style.width = "300px";
}
