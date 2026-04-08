
const Navbar = () => {
  return (
    <nav className="w-full bg-violet-700 shadow-lg shadow-purple-900/40">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tight text-white">Habit Tracker</h1>
            <p className="text-purple-200 text-xs font-medium">Build better habits, one day at a time</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-full px-4 py-1 text-sm font-semibold text-white border border-white/20">
          {new Date().toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar