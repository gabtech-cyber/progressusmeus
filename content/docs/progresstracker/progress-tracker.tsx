'client'; // Marks this as a client component in Next.js since it uses state/event listeners

import { useState } from 'react';

export function ProgressTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'HTML & Accessibility Foundations', completed: true },
    { id: 2, text: 'Computer Hardware & Networking', completed: true },
    { id: 3, text: 'Professional Dev Toolchain', completed: true },
    { id: 4, text: 'CSS Masterclass & Layouts', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const percentage = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="my-6 p-6 rounded-xl border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm not-prose">
      <h3 className="text-lg font-semibold mb-1">Progressus Meus</h3>
      <div className="flex justify-between text-sm text-fd-muted-foreground mb-3">
        <span>{completedCount} of {tasks.length} completed</span>
        <span>{percentage}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-fd-secondary h-2 rounded-full overflow-hidden mb-5">
        <div 
          className="bg-blue-600 h-full transition-all duration-300" 
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Task List */}
      <ul className="space-y-3">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 rounded border-fd-border text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className={`text-sm ${task.completed ? 'line-through text-fd-muted-foreground opacity-70' : 'text-fd-foreground'}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}