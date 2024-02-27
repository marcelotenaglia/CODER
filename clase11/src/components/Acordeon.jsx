import { useState } from "react";

function Acordeon({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    //arreglo de elementos renderizados
    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Acordeon;
