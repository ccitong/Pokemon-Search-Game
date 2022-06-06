import "./PokemonCard.css"

const PokemonCard =(props) =>{
  let isDisplayed = props.itemToShow.isShowing;
  let hidden
  if(isDisplayed == true){
    hidden = ""
  }
  else {
    hidden = "Pokemon-hidden"
  }
  // = (isDisplayed == true ? "" : "Pokemon-hidden")
  console.log(hidden)
  return(
    
    <div className={`PokemonCard ${hidden}`}>
     <h2 className="Center">{props.itemToShow.name}</h2>
      {
        <img className = "image" src = {require(`../assets/${props.itemToShow.image}`)}/>
      }
      <h3 className="Center">Attack Power {props.itemToShow.power}</h3>
    </div>
  )
}

export default PokemonCard