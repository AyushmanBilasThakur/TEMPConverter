const c = document.getElementById("C");
const f = document.getElementById("F");
const k = document.getElementById("K");

c.addEventListener("input",cinp);
k.addEventListener("input",kinp);
f.addEventListener("input",finp)

function cinp(e){
    cel = Number(c.value);
    
    if(cel == ""){
        empty_evrything();
    }
    else{
        kel = cel + 273;
        fer = 9 * cel / 5 +32;
        set_everything(cel,fer,kel)
    }
}

function kinp(e){
    kel = Number(k.value);

    if(kel == ""){
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

    if(fer == ""){
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

