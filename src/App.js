import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Image from "./Image";
import Ingredients from "./Ingredients";
// import Ingredientstest from "./Ingredientstest";

function App() {
    return (
        <div>
        <Heading1>Cinnamon Teacake</Heading1>
        <Image />
        <Heading2>Ingredients</Heading2>
        <Ingredients/>
        {/* <Ingredientstest/> */}
        <Heading2>Method</Heading2>
        <ol>
          <li>Preheat oven to 180°C (160°C fan-forced). Grease a 20cm round cake pan with butter.</li>
          <li>Using an electric mixer, beat butter and sugar in a bowl until pale and creamy (5 minutes). Add vanilla and eggs and beat until smooth (2-3 minutes).</li>
          <li>Mix in sifted flour and milk with a spatula, then beat lightly until smooth (2-3 minutes).</li>
          <li>Pour mixture into prepared pan; level surface. Bake for 15-20 minutes or until a skewer inserted at centre comes out clean (do not overcook).</li>
          <li>Turn onto wire rack. Combine <b>Dusting</b> ingredients and sprinkle over cake. Serve warm with butter.</li>
        </ol>
        </div>
    );
}

export default App;
