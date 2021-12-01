import Heading from "./Heading";

function App() {
  return (
    <div>
     <Heading />
     <img src="./cake.jpg" height="40px" alt="cake"/>
     <h2>Ingredients</h2>
     <p>Serves 8</p>
     <ul>
      <li>60g butter, at room temperature</li>
      <li>1 egg, at room temperature</li>
      <li>1/2 cup caster sugar</li>
      <li>1 teaspoon vanilla essence</li>
      <li>1 cup self-raising flour</li>
      <li>1/2 cup milk</li>
      <br></br>
      <b>Cinnamon Dusting</b>
      <li>1 tablespoon caster sugar</li>
      <li>1 teaspoon cinnamon</li>
     </ul>
     <h2>Method</h2>
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
