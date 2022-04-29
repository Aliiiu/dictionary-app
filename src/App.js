import Header from "./components/Header";
import React, { Fragment, useContext } from "react";
import WordContext from "./store/word-context";

function App() {
  const ctx = useContext(WordContext)
  console.log(ctx.inputValue)
  return (
    <Fragment>
        <Header />
    </Fragment>
  );
}

export default App;
