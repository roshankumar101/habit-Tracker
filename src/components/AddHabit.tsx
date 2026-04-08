import { useState } from "react"

interface AddHabitProps {
    onAdd: (title: string) => void
    onCancel: () => void
}

const AddHabit = ({ onAdd, onCancel }: AddHabitProps) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title.trim()) return
        onAdd(title)
        setTitle('')
    }

    return (
        <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4">
            <p className="text-sm font-semibold text-purple-300 mb-3">New Habit</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="e.g. Read 20min about published Research Paper"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
                    autoFocus
                />
                <div className="flex gap-2 justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-1 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-1 rounded-xl text-sm font-semibold bg-violet-600 text-white hover:bg-violet-700 transition shadow-md"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddHabit
