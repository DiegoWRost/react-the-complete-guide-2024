import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data";

const menuButtons = ["Components", "JSX", "Props", "State"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

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
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} key={conceptItem.title} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {menuButtons.map((buttonName) => (
              <TabButton
                isSelected={selectedTopic === buttonName.toLowerCase()}
                onSelect={() => handleSelect(buttonName.toLowerCase())}
              >
                {buttonName}
              </TabButton>
            ))}
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
