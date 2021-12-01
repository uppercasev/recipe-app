function createIngList(object) {
  const listItems = () => {
    return object.items.map((ingredient) => <li>{ingredient}</li>);
  };
  return (
    <div>
      <b>{object.name}</b>
      <ul>{listItems()}</ul>
    </div>
  );
}

function Ingredients(props) {
  return (
    <div>
      <p>Serves {props.serves}</p>
      {props.ingredientCollection.map((list) => createIngList(list))}
    </div>
  );
}

export default Ingredients;