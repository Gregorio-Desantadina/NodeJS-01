let personas = ["Pepe", "bob", "oo", "Abdala", "Name"];
EsElegante(personas);

function EsElegante(personas){
    for(let i = 0; i < personas.length; i++){
        if(personas[i].charAt(0) === personas[i].charAt(personas[i].length - 1)){
            console.log("El nombre", personas[i], "es elegante.");
        } else {
            console.log("El nombre", personas[i], "no es elegante.");
        }
    }
}