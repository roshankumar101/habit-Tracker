import { useState, useEffect } from "react"
import AddHabit from "./AddHabit"
import HabitList from "./HabitList"
import type { Habit } from "../types/habit"
import { getHabits, addHabit, deleteHabit, toggleHabit, restartDay } from "../services/service"

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

    const handleRestart = () => {
        setHabits(restartDay(habits))
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
                <div className="flex items-center gap-2">
                    {total > 0 && completed > 0 && (
                        <button
                            onClick={handleRestart}
                            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-400 border border-white/10 hover:text-white hover:border-white/20 transition"
                            title="Untick all and start fresh"
                        >
                            ↺ Restart Day
                        </button>
                    )}
                    <button
                        onClick={() => setShowAdd(!showAdd)}
                        className="px-5 py-2 rounded-xl font-semibold text-sm bg-violet-600 text-white hover:bg-violet-700 transition shadow-lg shadow-purple-900/30"
                    >
                        {showAdd ? '× Close' : '+ Add Habit'}
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            {total > 0 && (
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>Today's progress</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                            className="bg-violet-500 h-2 rounded-full transition-all duration-500"
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
                    <p className="text-green-400 font-semibold">All done for today! Great job 🎉</p>
                </div>
            )}
        </main>
    )
}

export default Tracker
