import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";

const menuButtons = ["Components", "JSX", "Props", "State"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept {...concept} key={index} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {menuButtons.map((buttonName) => (
              <TabButton onSelect={() => handleSelect(buttonName)}>
                {buttonName}
              </TabButton>
            ))}
          </menu>

          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
