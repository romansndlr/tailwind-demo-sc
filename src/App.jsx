import clsx from "clsx";
import React from "react";
import { useState } from "react";

const Title = ({ someAttribute, children }) => (
  <div style={{ background: `rgb(${someAttribute} 10 10)` }}>{children}</div>
);

const StyledOl = ({ listLength, children }) => {
  return React.createElement(
    listLength > 5 ? "ol" : "ul",
    {
      id: "fly-high",
      className: clsx(
        `border-2 border-solid`,
        listLength > 10 ? "border-[red]" : "border-[blue]"
      ),
    },
    children
  );
};

function App() {
  const [animalsList, setAnimalsList] = useState(["Tiger", "Wolf"]);

  const verticalScrollableTableNode = document.getElementById("fly-high");

  const onAddAnimal = (animal) => {
    setAnimalsList((animals) => [...animals, animal]);
  };

  return (
    <div>
      <Title someAttribute={verticalScrollableTableNode?.clientHeight}>
        Hello World, this is my first styled component!
      </Title>
      <input
        className="border border-gray-400"
        onChange={(e) => onAddAnimal(e.target.value)}
      />
      <StyledOl listLength={animalsList.length}>
        {animalsList.map((a) => (
          <li>{a}</li>
        ))}
      </StyledOl>
    </div>
  );
}

export default App;
