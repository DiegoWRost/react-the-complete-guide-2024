import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";

const menuButtons = ["Components", "JSX", "Props", "State"];

function App() {
  const handleSelect = () => {
    console.log("Hello world - selected!");
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
            {menuButtons.map((button) => (
              <TabButton onSelect={handleSelect}>{button}</TabButton>
            ))}
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
