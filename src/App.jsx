import Profile from "./components/Profile"
import data from "../data.json"
import Card from "./components/Card";
import { useState } from "react";
function App() {

  const[time, setTime] = useState("daily")

   return (
    <div className="app">

      <Profile time={time} setTime={setTime} />

      {
        data.map((item,i) => {
          return <Card key={i} item={item} time={time} />
        })
      }
    </div>
  )
}

export default App
