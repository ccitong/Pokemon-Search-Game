import "./HeaderComponent.css"

const HeaderComponent =(props) =>{


  return(
    <div className="HeaderComponent">
      <h1>Pokemon Search App</h1>
      <p>Use the controls to search for pokemon name or by type.</p>
      <p>There are a total of {props.numPokemon} pokemon in the database</p>
    </div>
  )
}

export default HeaderComponent