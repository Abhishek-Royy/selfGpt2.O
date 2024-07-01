import { createContext, useState } from "react";
import run from "../config/selfgpt";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(function () {
      setresultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setresultData("");
    setloading(true);
    setshowResult(true);
    setrecentPrompt(input);

    const response = await run(input);
    let responseArray = response.split("**");
    let newResponseArray;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponseArray += responseArray[i];
      } else {
        newResponseArray += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponseArray.split("*").join("</br>");

    // setresultData(newResponse2);

    let anotherNewResponseArray = newResponse2.split(" ");
    for (let i = 0; i < anotherNewResponseArray.length; i++) {
      const nextword = anotherNewResponseArray[i];
      delayPara(i, nextword + " ");
    }

    setloading(false);
    setinput("");
  };

  //   onSent("What is react js");

  const contextValue = {
    prevPrompts,
    setprevPrompts,
    onSent,
    recentPrompt,
    setrecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
