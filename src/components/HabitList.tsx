import type { Habit } from "../types/habit"

const HabitList = ({habit}: {habit: Habit}) => {
  return (
    <div className="sm:col-span-2 flex flex-col items-start">
      <div className="flex flex-row gap-3 ">
        <input type="checkbox" className="outline-none text-green-600 p-1" />
        <div>{habit.title}</div>
      </div>
    </div>
  )
}

export default HabitList