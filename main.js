class Pokemon{
    constructor (id,nombre,tipo,vida,poder,defensa,velocidad){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.vida=vida;
        this.poder=poder;
        this.defensa=defensa;
        this.velocidad=velocidad;
    
    }
}

let arrayPokes = [
    new Pokemon(0,"Charmander","Fuego",45,70,30,43),
    new Pokemon(1,"Squirtle","Agua",60,50,40,35),
    new Pokemon(2,"Bulbasaur","Planta",50,65,35,40),
    new Pokemon(3,"Eevee","Normal",20,35,40,55),
    new Pokemon(4,"Onix","Roca",70,30,70,20),
    new Pokemon(5,"Machamp","Lucha",50,70,35,50),
    new Pokemon(6,"Gengar","Fantasma",45,80,20,70),
    new Pokemon(7,"Mewtwo","Psiquico",90,120,70,100),
    new Pokemon(8,"Electabuzz","Electrico",45,70,30,45),
    new Pokemon(9,"Digglet","Tierra",45,60,80,30), 
    new Pokemon(10,"Pidgeoto","Volador",50,70,30,75),

]

class TiposPoke{
    constructor(tipo){
        this.tipo=tipo
    }
}

function cardOfPokemon(pokemon){
    const container =document.createElement("div");
    container.className = "pokemon-card"
    container.id = "card-" +pokemon.id
    container.textContent= pokemon.name

    const image = document.createElement("img");
    image.src = `../imagenes/${pokemon.image}`

    const button = document.createElement("button");
    button.id = "btn-poke"+ pokemon.id

    container.append(image,button)

    return container
}