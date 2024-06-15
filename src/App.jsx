import UserInputs from "./components/Inputs";
import Header from "./components/header";
import Results from "./components/results";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState({
    initialInvestment: " ",
    annualInvestment: " ",
    expectedReturn: " ",
    duration: " ",
  });

  function handleChange(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = input.duration >= 1;
  return (
    <>
      <Header />
      <UserInputs onChange={handleChange} input={input} />

      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero </p>
      )}
      {inputIsValid && <Results input={input} />}
    </>
  );
};

export default App;
