import Steps from './Steps.jsx'

const Recipe = (props) => {
    const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];

    return (
      <>
        <article>
            <h2>La recette de la pâte à crèpes</h2>
            <h3>Ingrédients</h3>
            <ul>
                {ingredients.map((ingredients, i) => <li key={i}>{ingredients}</li>)}
            </ul>
            <Steps />
        </article>
      </>
    )
}

export default Recipe;