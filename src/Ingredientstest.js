const recipeToDisplay = {
    name: "Cinnamon Teacake",
    serving: 8,
    ingredients: [
        {
            name: "Cake",
            items: ["60g butter, at room temperature", "1 egg, at room temperature", "1/2 cup caster sugar", "1 teaspoon vanilla essence", "1 cup self-raising flour", "1/2 cup milk"]
        },
        {
            name: "Cinnamon Dusting",
            items: ["1 tablespoon caster sugar", "1 teaspoon cinnamon"]
        }
    ]
}

function createList(recipeToDisplay) {
    const listItems = (key) => {
        return recipeToDisplay.ingredients[key].items.map((ingredient) => 
            <li>{ingredient}</li>
        )
    }
    return (
        <div>
            <b>{recipeToDisplay.ingredients[key].name}</b>
            <ul>
            {listItems}
            </ul>
        </div>
    )    
}

function Ingredientstest() {
     return (
        <div>
            <p>Serves {recipeToDisplay.serving}</p>
            {createList()}
        </div>
    )
}

export default Ingredientstest;