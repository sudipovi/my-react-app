import "./App.css";
import Countries from "./components/Countries/countries";
import { Suspense } from "react";

// http://localhost:5173/

const countriesPromise = fetch(
  `https://openapi.programming-hero.com/api/all`
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Ovi, Paru er jamai</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
