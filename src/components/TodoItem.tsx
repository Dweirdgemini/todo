import { Trash, Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemprops {
    todo: Todo;
    onCompletedChange:(id:number, completed:boolean) => void;
}

export default function TodoItem({todo, onCompletedChange }: TodoItemprops) {
    return(
        <div className="flex items-center gap-1">
            <label className=" grow flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button>
              <Trash2 size={20}   className="text-gray-500 " />
            </button>
        </div>
    )
}