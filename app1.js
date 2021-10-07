function answer(){

    let answer__1 = document.getElementById("textfield").value;
    document.getElementById("question__1").innerHTML = answer__1;


    if(answer__1 == 70){

        document.getElementById("pflanze").setAttribute("src","bilder/Pflanze2.png");
        document.getElementById("question").innerHTML = "Trägt Brille und kan nicht sehen?";
        document.getElementById("textfield").value= "";
    }

    if(answer__1 == "nase"){

        document.getElementById("pflanze").setAttribute("src","bilder/Pflanze3.png");
        document.getElementById("question").innerHTML = "Wasser mit drei Buchstaben ?";
        document.getElementById("textfield").value= "";
    }

    if(answer__1 == "eis"){

        document.getElementById("pflanze").setAttribute("src","bilder/Pflanze4.png");
        document.getElementById("question").innerHTML = "Haus ohne Holz,Metal,Stein?";
        document.getElementById("textfield").value= "";
    }

    if(answer__1 == "schneckenhaus"){

        document.getElementById("pflanze").setAttribute("src","bilder/Pflanze5.png");
        document.getElementById("question").innerHTML = "Geschafft";
        document.getElementById("textfield").value= "";
    }

    
}