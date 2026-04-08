import { useState, useEffect } from "react"
import AddHabit from "./AddHabit"
import HabitList from "./HabitList"
import type { Habit } from "../types/habit"
import { getHabits, addHabit, deleteHabit, toggleHabit } from "../services/service"

const Tracker = () => {
    const [habits, setHabits] = useState<Habit[]>([])
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        setHabits(getHabits())
    }, [])

    const handleAdd = (title: string) => {
        setHabits(addHabit(title, habits))
        setShowAdd(false)
    }

    const handleDelete = (id: number) => {
        setHabits(deleteHabit(id, habits))
    }

    const handleToggle = (id: number) => {
        setHabits(toggleHabit(id, habits))
    }

    const completed = habits.filter(h => h.completed).length
    const total = habits.length
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0

    return (
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">

            {/* Stats Row */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-white">My Habits</h2>
                    <p className="text-gray-400 text-sm mt-0.5">
                        {total === 0 ? 'No habits yet — add one below!' : `${completed} of ${total} done today`}
                    </p>
                </div>
                <button
                    onClick={() => setShowAdd(!showAdd)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-linear-to-r from-violet-600 to-purple-500 text-white hover:opacity-90 transition shadow-lg shadow-purple-900/30"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={showAdd ? "M6 18L18 6M6 6l12 12" : "M12 4v16m8-8H4"} />
                    </svg>
                    {showAdd ? 'Close' : 'Add Habit'}
                </button>
            </div>

            {/* Progress Bar */}
            {total > 0 && (
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>Progress</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                            className="bg-linear-to-r from-violet-500 to-green-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Add Form */}
            {showAdd && (
                <AddHabit onAdd={handleAdd} onCancel={() => setShowAdd(false)} />
            )}

            {/* Habit List */}
            <div className="mt-4 flex flex-col gap-2">
                {habits.length === 0 && !showAdd ? (
                    <div className="text-center py-16">
                        <div className="text-5xl mb-4">🌱</div>
                        <p className="text-gray-400 font-medium">Start your journey</p>
                        <p className="text-gray-600 text-sm mt-1">Add your first habit above</p>
                    </div>
                ) : (
                    habits.map((habit) => (
                        <HabitList
                            key={habit.id}
                            habit={habit}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>

            {/* Completion Banner */}
            {total > 0 && completed === total && (
                <div className="mt-6 text-center p-4 bg-green-900/30 border border-green-500/20 rounded-2xl">
                    <p className="text-green-400 font-semibold">🎉 All habits completed! Amazing work!</p>
                </div>
            )}
        </main>
    )
}

export default Tracker