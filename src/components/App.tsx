import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import "./App.scss";

function App() {
  // const { loading, error, data } = useHttp("https://swapi.dev/api/films/");

  const [loadingVal, setLoadingVal] = useState<any>();
  const [dataVal, setDataVal] = useState<any>();
  const [errorVal, setErrorVal] = useState<any>();
  const { loading, error, data, request } = useHttp();

  useEffect(() => {
    setLoadingVal(loading);
    setDataVal(data);
    setErrorVal(error);
  }, [loading, data, error, request]);

  const addDataHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);

    let _data = { text: e.target[0].value };

    request("https://abeljr-api-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: _data,
    });
  };

  const showDataHandler = (e: any) => {
    e.preventDefault();
    request("https://abeljr-api-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json");
  };

  return (
    <section className="App">
      <div>{JSON.stringify(loadingVal)}</div>
      <div>{JSON.stringify(dataVal)}</div>
      <div>{JSON.stringify(errorVal)}</div>
      <form action="" onSubmit={addDataHandler}>
        <input type="text" />
        <button>Add Task</button>
      </form>
      <button onClick={showDataHandler}>Show Tasks</button>
    </section>
  );
}

export default App;
