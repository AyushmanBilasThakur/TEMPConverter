const c = document.getElementById("C");
const f = document.getElementById("F");
const k = document.getElementById("K");
const degc = "o"

c.addEventListener("input",cinp);
k.addEventListener("input",kinp);
f.addEventListener("input",finp)

function cinp(e){
    cel = Number(c.value);
    kel = cel + 273;
    fer = 9 * cel / 5 +32;
    k.value = kel;
    f.value = fer;
}

function kinp(e){
    kel = Number(k.value);
    cel = kel - 273;
    fer =  9 * cel / 5 +32;
    
    c.value = cel;
    k.value = kel;
    f.value = fer;
}

function finp(e){
    fer = Number(f.value);
    cel = (fer -32)/9 * 5;
    kel = cel + 273;
    cel = (cel).toFixed(2);
    kel = (kel).toFixed(2);
    c.value = cel;
    k.value = kel;
    f.value = fer;
}