import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Image from "./Image";
import Ingredients from "./Ingredients";
import Method from "./Method";

const recipeToDisplay = {
  name: "Cinnamon Teacake",
  img_url: "/teacake.jpg",
  serving: 8,
  ingredients: [
    {
      name: "Cake",
      items: [
        "60g butter, at room temperature",
        "1 egg, at room temperature",
        "1/2 cup caster sugar",
        "1 teaspoon vanilla essence",
        "1 cup self-raising flour",
        "1/2 cup milk",
      ],
    },
    {
      name: "Cinnamon Dusting",
      items: ["1 tablespoon caster sugar", "1 teaspoon cinnamon"],
    },
  ],
  method: [
    "Preheat oven to 180°C (160°C fan-forced). Grease a 20cm round cake pan with butter.",
    "Using an electric mixer, beat butter and sugar in a bowl until pale and creamy (5 minutes). Add vanilla and eggs and beat until smooth (2-3 minutes).",
    "Mix in sifted flour and milk with a spatula, then beat lightly until smooth (2-3 minutes).",
    "Pour mixture into prepared pan; level surface. Bake for 15-20 minutes or until a skewer inserted at centre comes out clean (do not overcook).",
    "Turn onto wire rack. Combine Dusting ingredients and sprinkle over cake. Serve warm with butter.",
  ],
};

function App() {
  return (
    <div>
      <Heading1>{recipeToDisplay.name}</Heading1>
      <Image src={recipeToDisplay.img_url}/>
      <Heading2>Ingredients</Heading2>
      <Ingredients serves={recipeToDisplay.serving} ingredientCollection={recipeToDisplay.ingredients}/>
      <Heading2>Method</Heading2>
      <Method method={recipeToDisplay.method}/>
    </div>
  );
}

export default App;