import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const menuButtons = ["Components", "JSX", "Props", "State"];

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <Section title="Examples" id="examples">
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
    </Section>
  );
}