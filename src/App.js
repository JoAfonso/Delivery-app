import React from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meal/>
      </main>
    </div>
  );
}

export default App;
