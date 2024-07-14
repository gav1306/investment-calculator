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
  const [isNotNegative, setIsNotNegative] = useState(true);

  function handleChange(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
    if (newValue <= 0) {
      setIsNotNegative(false);
    } else {
      setIsNotNegative(true);
    }
  }

  return (
    <>
      <Header />
      <UserInputs onChange={handleChange} input={input} />
      <Results input={input} notNegative={isNotNegative} />
    </>
  );
};

export default App;
