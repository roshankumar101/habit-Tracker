import type { Habit } from "../types/habit"

interface HabitListProps {
  habit: Habit
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const HabitList = ({ habit, onToggle, onDelete }: HabitListProps) => {
  return (
    <div className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200
      ${habit.completed
        ? 'bg-green-900/20 border-green-500/20'
        : 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/8'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => onToggle(habit.id)}
          className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
            ${habit.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-500 hover:border-purple-400'
            }`}
          aria-label="Toggle habit"
        >
          {habit.completed && (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className={`text-sm font-medium truncate transition-colors ${habit.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
          {habit.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(habit.id)}
        className="shrink-0 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all p-1 rounded-lg hover:bg-red-400/10"
        aria-label="Delete habit"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default HabitList