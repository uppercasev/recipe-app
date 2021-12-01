function Method(props) {
  const listItems = (method) => {
    return method.map((steps) => <li>{steps}</li>);
  };
  return (
    <div>
      <ol>{listItems(props.method)}</ol>
    </div>
  );
}

export default Method;