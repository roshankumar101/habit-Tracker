import { useState } from "react"
import type { Habit } from "../types/habit"
import Navbar from "../components/Navbar"
import HabitList from "../components/HabitList"
import AddHabit from "../components/AddHabit"

const Home = () => {

  const [habits, setHabits] = useState<Habit[]>([])
  const [addBtn, setAddBtn] = useState(false)

  return (
    <div className="w-full h-screen">
      <Navbar /> 

      <div className="w-full grid sm:grid-cols-3 px-10 py-5">

        <div className="sm:col-span-2">
          <h2 className="text-2xl font-bold">Your Habits</h2>
          {habits.map((habit) => {
            return (
              <>
                <HabitList habit={habit} />
              </>
            )
          })}
        </div>

        <div className="sm:col-span-1">
          <button className="bg-amber-500 text-lg font-semibold px-4 py-1 rounded-md" onClick={() => setAddBtn(!addBtn)}>Add</button>
          {addBtn && <AddHabit />}
        </div>
      </div>
    </div>
  )
}

export default Home