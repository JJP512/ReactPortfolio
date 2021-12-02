import React, { useState } from "react";
// import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery"
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "about me", description: ""},
    {
      name: 'portfolio',
      description: 'A collection of projects that display my knowledge of development languages.',
    },
    { name: 'resume', description: 'A link to my professional Resume.' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
