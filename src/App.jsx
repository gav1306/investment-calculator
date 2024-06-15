import UserInputs from "./components/Inputs";
import Header from "./components/header";
import Results from "./components/results";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
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
