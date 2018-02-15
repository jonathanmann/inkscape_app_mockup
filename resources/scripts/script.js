var svgDocument;

function on_load(evt){
   O=evt.target;
   svgDocument=O.ownerDocument;
    svgDocument.getElementById("home").onclick = user_clicked_button;
}

function turn_on(id){
   svgDocument.getElementById(id).setAttribute("visibility","visible");
}

function turn_off(id){
   svgDocument.getElementById(id).setAttribute("visibility","hidden");
}


function user_clicked_button(){
    //turn_on("my_light");
    console.log("event");
}
