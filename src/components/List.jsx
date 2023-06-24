import { useEffect, useState } from "react"

function List({ onChange, list }) {
  const handleUsers = (e) => {
    const { name, checked } = e.target
    if (name === "crew") {
      onChange(
        list.map((user) => {
          return { ...user, isChecked: checked }
        })
      )
    } else {
      onChange(
        list.map((user) =>
          user.name === name ? { ...user, isChecked: checked } : user
        )
      )
    }
  }

  return (
    <div className="bg-zinc-800 text-emerald-500 p-4 h-max select-none rounded-lg">
      <form>
        <div className="flex gap-2 border-b-2 border-b-emerald-700 mb-2">
          <input
            type="checkbox"
            id="crew"
            name="crew"
            checked={list.filter((user) => user?.isChecked !== true).length < 1}
            onChange={handleUsers}
          />
          <label className="text-xl" htmlFor="crew">
            Crew
          </label>
        </div>
        <div className="border-b-2 border-b-emerald-700">
          {list.map((user) => (
            <div className="flex gap-3 my-1" key={user.id}>
              <input
                type="checkbox"
                id={user.name}
                name={user.name}
                checked={user?.isChecked}
                onChange={handleUsers}
              />
              <label htmlFor={user.name}>{user.name}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default List
