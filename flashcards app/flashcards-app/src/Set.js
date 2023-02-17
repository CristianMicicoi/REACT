function Set({ test, onAdd }) {
  return (
    <div>
      <h2>hello {test}</h2>
      <button onClick={() => onAdd('Gyuri')}>Add</button>
    </div>
  );
}

export default Set;
