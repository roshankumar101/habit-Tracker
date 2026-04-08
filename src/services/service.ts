import type { Habit } from "../types/habit"

export const getHabits = (): Habit[] => {
    const stored = localStorage.getItem('habits')
    return stored ? JSON.parse(stored) : []
}

export const saveHabits = (habits: Habit[]): void => {
    localStorage.setItem('habits', JSON.stringify(habits))
}

export const addHabit = (title: string, habits: Habit[]): Habit[] => {
    const newHabit: Habit = {
        id: Date.now(),
        title: title.trim(),
        completed: false,
    }
    const updated = [...habits, newHabit]
    saveHabits(updated)
    return updated
}

export const deleteHabit = (id: number, habits: Habit[]): Habit[] => {
    const updated = habits.filter((h) => h.id !== id)
    saveHabits(updated)
    return updated
}

export const toggleHabit = (id: number, habits: Habit[]): Habit[] => {
    const updated = habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
    )
    saveHabits(updated)
    return updated
}

export const restartDay = (habits: Habit[]): Habit[] => {
    const updated = habits.map((h) => ({ ...h, completed: false }))
    saveHabits(updated)
    return updated
}
