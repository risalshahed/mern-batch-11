import { useState } from 'react';
import './App.css'
import ModalForm from './components/ModalForm';
import TodoList from './components/TodoList';

function App() {
  /* 
    todos -> All Todo List
    isModalOpen
    editingTodo
  */

  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setIsEditingTodo] = useState(null);

  const openAdd = () => {
    setIsEditingTodo(null);
    setIsModalOpen(true);
  }

  // Handle the Todo ADDING
  const handleAddTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      // title: title,
      // Shorthand Property
      title,
      createdAt: Date.now()   // Not Necessary in this Project
    }
    // [].push(newTodo)
    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);
    // Close the Modal
    setIsModalOpen(false);
  }

  const openEdit = todo => {
    setIsEditingTodo(todo);
    setIsModalOpen(true);
  }

  const handleEditTodo = title => {
    setTodos(prevTodos => prevTodos.map(todo =>
      todo.id === editingTodo.id ? { ...todo, title } : todo
    ))
    setIsEditingTodo(null);
    setIsModalOpen(false);
  }

  // console.log({todos})

  const handleDeleteTodo = todo => {
    const isConfirmed = window.confirm('Are you sure you wanna delete this todo item?')

    if(isConfirmed) {
      setTodos(prevTodos => prevTodos.filter(
        t => t.id !== todo.id
      ));
    }
  }

  const handleFormSubmit = title => {
    editingTodo
    ?
    handleEditTodo(title)
    :
    handleAddTodo(title)
  }

  /* 
    Null Coalescing Operator (Check in src/rough.js file)
  */

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='max-w-3xl mx-auto'>
        {/* Title & Submit Button */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold my-5'>
            Todo Application
          </h1>
          <button
            onClick={openAdd}
            className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 my-5 rounded-xl'
          >
            Add a Todo
          </button>
        </div>
        {/* END of Title & Submit Button */}

        {/* Todo List */}
        <TodoList
          todos={todos}
          onEdit={openEdit}
          onDelete={handleDeleteTodo}
        />

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialTitle={editingTodo?.title ?? ""}
          onFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  )
}

export default App;