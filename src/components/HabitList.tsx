import type { Habit } from "../types/habit"
import { Trash,  CheckCheck } from 'lucide-react';

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
        : 'bg-white/5 border-white/10 hover:border-purple-500/30'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => onToggle(habit.id)}
          className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all
            ${habit.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-500 text-transparent hover:border-purple-400'
            }`}
          aria-label="Toggle habit"
        >
          <CheckCheck size={14} />
        </button>
        <span className={`text-sm font-medium truncate transition-colors ${habit.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
          {habit.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(habit.id)}
        className="shrink-0 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all px-2 py-0.5 rounded text-sm"
        aria-label="Delete habit"
        title="Remove"
      >
        <Trash size={15} />
      </button>
    </div>
  )
}

export default HabitList

