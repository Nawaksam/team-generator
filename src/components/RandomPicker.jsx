import { useState } from "react"
import { shuffle } from "../services/shuffle"

function RandomPicker({ list }) {
  const [number, setNumber] = useState()
  const [randomUsers, setRandomUsers] = useState([])

  const handlePicker = (e) => {
    e.preventDefault()
    const result = shuffle(list.filter((user) => user.isChecked)).slice(
      0,
      number
    )
    if (number === undefined) {
      setRandomUsers([])
    } else {
      setRandomUsers(result)
    }
  }

  return (
    <div className="bg-zinc-700 text-emerald-500 flex flex-col  p-1 rounded-lg">
      <div className="bg-zinc-800 rounded-lg">
        <div className="flex items-center gap-2 m-2 pb-2 border-b-2 border-b-zinc-700">
          <p>Choisis le nombre de victimes:</p>
          <form className="flex gap-2">
            <input
              className=" w-10 text-center bg-zinc-400 text-zinc-950 rounded-lg p-1"
              type="number"
              min="1"
              max={list.filter((user) => user.isChecked).length}
              name="picker"
              onChange={(e) => setNumber(e.target.value)}
            />
            <button
              className="bg-zinc-400 text-zinc-950 hover:bg-emerald-500 rounded-lg p-1"
              type="submit"
              onClick={handlePicker}
            >
              Verdict
            </button>
          </form>
        </div>
      </div>
      {randomUsers ? (
        <ul className="bg-zinc-800 flex flex-wrap">
          {randomUsers.map((user) => (
            <li
              key={user.id}
              className="bg-emerald-500 text-zinc-950 text-center rounded-lg ml-2 mb-2 p-1.5"
            >
              {user.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default RandomPicker
