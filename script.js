const ingresotexto =document.getElementById("ingresotexto");
const bntEncriptar =document.getElementById("bntEncriptar");
const bntDesencriptar =document.getElementById("bntDesencriptar");
const bntCopiar =document.getElementById("bntCopiar");
const mensajefinal =document.getElementById("mensajefinal");
const Muñeco =document.getElementById("Muñeco");
const rightinfo =document.getElementById("rigthinfo");
const right =document.getElementById("right");


//e-enter
//o-ober
//i-imes
//a-ai
//u-ufat

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor;
    Muñeco.classList.add("oculto");
    ingresotexto.value = "";
    rightinfo.style.display = "none";
    bntCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
}
const reset = () => {
    mensajefinal.innerHTML ="";
    Muñeco.classList.remove("oculto");
    rightinfo.style.display = "block";
    bntCopiar.style.display = "none";
    right.classList.renove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresotexto.focus();
}

bntEncriptar.addEventListener("click",() => {
    const texto =ingresotexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(newText) {
         for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])) {
                newText =newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                 };
             };
             return newText;
         };
    }
    //const textoEncriptado = encriptar (texto)

    remplace(encriptar(texto));  
});
bntDesencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase();
        if (texto != "") { 
            function desencriptar(newText) {
                 for (let i = 0; i < remplazar.length; i++) {
                     if(newText.includes(remplazar[i][1])) {
                        newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };   
            };
            return newText;
        };
    }
    remplace(desencriptar(texto));
   
});

bntCopiar.addEventListener("click", () => {
    let texto = mensajefinal;
   // navigator.clipboard.writeText(texto.value);
   texto.select();
   document.execCommand('copy')
    reset();
})