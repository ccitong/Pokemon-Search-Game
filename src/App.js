import './App.css';
import HeaderComponent from './components/HeaderComponent';
import PokemonCard from './components/PokemonCard';
import {useState} from "react"
function App() {
  // list of pokemon
  const pokemonList = [
    {
        id:69,
        name:"Bellsprout",
        type:"grass",        
        image:"bellsprout.png",
        attack:25,
        isOnTeam:false
    },
    {
        id:1, 
        name:"Bulbasaur",
        type:"grass",
        image:"bulbasaur.png",
        attack:100,
        isOnTeam:false
    },
    {
        id:4,
        name:"Charmander",
        type:"fire",
        image:"charmander.png",
        attack:45,
        isOnTeam:false
    },
    {
        id:132,
        name:"Ditto",
        type:"normal",
        image:"ditto.png",
        attack:40,
        isOnTeam:false
    },
    {
        id:133,
        name:"Eevee",
        type:"normal",
        image:"eevee.png",
        attack:30,
        isOnTeam:false
    },
    {
        id:52,
        name:"Meowth",
        type:"normal",
        image:"meowth.png",
        attack:80,
        isOnTeam:false
    },
    {
        id:25,
        name:"Pikachu",
        type:"electric",
        image:"pikachu.png",
        attack:10,
        isOnTeam:false
    },
    {
        id:54,
        name:"Psyduck",
        type:"water",
        image:"psyduck.png",
        attack:85,
        isOnTeam:false
    },
    {
        id:7,
        name:"Squirtle",
        type:"water",
        image:"squirtle.png",
        attack:90,
        isOnTeam:false
    }    
  ]

  const [textBoxContents, setTextBoxContents] = useState("")
  const [isDisplayed, setIsDisplayed] = useState(pokemonList)
  //const [isDisplayed, setIsDisplayed] = useState(false)

  const textBoxValueChanged =(evt)=>{
    console.log(`Value of Text box changed ${evt.target.value}`)
    setTextBoxContents(evt.target.value)
  }
  const detectEnter =(evt) =>{
    console.log(textBoxContents)
    if(evt.key === "Enter" && textBoxContents === "" ){
      for(let i=0;i<pokemonList.length;i++){
          pokemonList[i].isOnTeam = true
          // setIsDisplayed(pokemonList)
      }
      setIsDisplayed(pokemonList)
    }
    else if (evt.key === "Enter" &&  textBoxContents !== ""){
      console.log("The user pressed Enter")
      for(let i=0;i<pokemonList.length;i++){
        if (pokemonList[i].name.toLowerCase().includes(textBoxContents.toLowerCase()) === true){
          console.log(textBoxContents)
          console.log(pokemonList[i])
          pokemonList[i].isOnTeam = true
        }
        else{
          pokemonList[i].isOnTeam = false
        }
      }
      setIsDisplayed(pokemonList)
    }
  }

  return (    
    <div className="App">       
      <main>
        
        <HeaderComponent numPokemon = {pokemonList.length}/>
        <input type="text" placeholder="Enter a search term" onChange={textBoxValueChanged} onKeyDown={detectEnter}/>
        <div className= "App-search-results"> 
          {
            pokemonList.map((currItem,index)=>{
              return  <PokemonCard itemToShow = {{name: pokemonList[index].name, isShowing: isDisplayed[index].isOnTeam, content: textBoxContents,power: pokemonList[index].attack, image: pokemonList[index].image}}/>
            })
          }
        </div>
      </main>      
    </div>
  );
}

export default App;
