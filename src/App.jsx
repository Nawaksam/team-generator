import { useState } from "react"

import List from "./components/List"
import RandomPicker from "./components/RandomPicker"
import RandomTeam from "./components/RandomTeam"
import list from "./data/list.json"

function App() {
  const [users, setUsers] = useState(list)

  return (
    <div className="h-screen flex flex-col">
      <h1 className=" bg-zinc-800 text-emerald-500 py-4 text-center text-4xl">
        Team Generator
      </h1>
      <div className="bg-zinc-700 flex  flex-row flex-grow p-4 gap-4">
        <List onChange={setUsers} list={users} />
        <div className=" bg-zinc-800 flex-grow flex flex-col gap-4 p-3 rounded-lg">
          <RandomPicker list={users} />
          <RandomTeam list={users} />
        </div>
      </div>
      <div className=" bg-zinc-800 text-emerald-500 py-4 flex justify-between px-5">
        <div>GitHub</div>
        <div>#CodeBakery</div>
        <div>🄯Nawaksam</div>
      </div>
    </div>
  )
}

export default App
