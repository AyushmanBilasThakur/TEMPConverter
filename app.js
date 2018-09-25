const c = document.getElementById("C");
const f = document.getElementById("F");
const k = document.getElementById("K");
const bodyarr = document.getElementsByTagName("body");
const body = bodyarr[0]

var isBackspace = 0;

c.addEventListener("input",cinp);
k.addEventListener("input",kinp);
f.addEventListener("input",finp);


body.onkeydown = () => {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        isBackspace = 1;
    else
        isBackspace = 0;
}

function cinp(e){
    cel = Number(c.value);
    

    if(cel == 0 && isBackspace == 1){
        empty_evrything();
    }
    
    else
    {
        kel = cel + 273;
        fer = 9 * cel / 5 +32;
        set_everything(cel,fer,kel)
    }
}

function kinp(e){
    kel = Number(k.value);


    if(kel == 0 && isBackspace == 1){
        empty_evrything();
    }
    

    else{
        cel = kel - 273;
        fer =  9 * cel / 5 +32;
        set_everything(cel,fer,kel)
    }
}

function finp(e){
    fer = Number(f.value);


    if(fer == 0 && isBackspace == 1){
        empty_evrything();
    }

    else{
        cel = (fer -32)/9 * 5;
        kel = cel + 273;
        cel = (cel).toFixed(2);
        kel = (kel).toFixed(2);
        set_everything(cel,fer,kel)
    }
}

empty_evrything = () => {
    c.value = "";
    f.value = "";
    k.value = "";
}

set_everything = (cel,fer,kel) => {
    c.value = cel;
    k.value = kel;
    f.value = fer;
}