class Telefilm {
    title : string;
    description: string;
    characters: Character[];
    
    constructor( title: string,  description: string,  characters: Character[]) {
       this.title= title;
       this.description= description;
       this.characters= characters;
    }
    
     toString() : string{
         var characterStr="";
         this.characters.forEach((cha) =>{ characterStr+= cha.toString() + "<br/>";});
         
         return "<b>"+this.title +" "+this.description+"</b><br/>" +characterStr;
    }
}

class  Character{
    
    name: string;
    surname: string;
    
    constructor(name: string, surname: string){
        this.name=name;
        this.surname=surname;
        
    }
    
    toString() : string{
        return this.name +" "+ this.surname;
    }
}

var listCharacter:Array<Character> = [
    new Character("John","Dorian"),
    new Character("Elliot","Reid"),
    new Character("Carla","Espinosa")
];

var telefilm= new Telefilm("Scrubs","Medical situations", listCharacter);




document.body.innerHTML = telefilm.toString();
