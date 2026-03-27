import { useState } from "react"
import type { Habit } from "../types/habit"
const AddHabit = () => {

    const [title, setTitle] = useState<Habit['title']>('')

    return (
        <div>
            <form action="">
                <input type="text" placeholder="Enter Your New Habit" name="title" className="bg-gray-400 border border-gray-300 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button>Cancel</button>
                <button onClick={() => { }}>Save</button>
            </form>
        </div>
    )
}

export default AddHabit