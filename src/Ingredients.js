let ingredients = {
    serving: 8,
    main: ["60g butter, at room temperature", "1 egg, at room temperature", "1/2 cup caster sugar", "1 teaspoon vanilla essence", "1 cup self-raising flour", "1/2 cup milk"],
    secondary: ["1 tablespoon caster sugar", "1 teaspoon cinnamon"],
    secondaryHeading: "Cinnamon Dusting"
}

function Ingredients() {
    const listItems = (key) => {
        return ingredients[key].map((ingredient) =>
            <li>{ingredient}</li>
        )
    }
    return (
        <div>
            <p>Serves {ingredients.serving}</p>
            <ul>
            {listItems("main")}
            </ul>
            <b>{ingredients.secondaryHeading}</b>
            {ingredients.secondary?.length &&
                 <ul>
                 {listItems("secondary")}
                 </ul>
            }
        </div>
    )
}

export default Ingredients;