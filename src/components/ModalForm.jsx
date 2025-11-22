import { useEffect, useRef, useState } from "react";

const ModalForm = ({ isOpen, onClose, initialTitle, onFormSubmit }) => {
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef(null);

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle]);

  // Focus on the Input When the Modal is Open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 0);
  }, [isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    // .trim() -> Remove the empty spaces
    const trimmed = title.trim();
    // trimmed = A Todo Item
    if(!trimmed) return;
    // else
    onFormSubmit(trimmed);
    setTitle('');
  }

  // isOpen = false
  if( ! isOpen ) return;

  
  // Keyboard er Escape a click korle Modal Close hobe (Mandatory)
  // onBlur (Optional)

  // // else
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {/* Edit / Add */}
          {initialTitle ? 'Edit' : 'Add'} Todo
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter title"
          />
          <div className="flex justify-end gap-x-4">
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              
            >
              {initialTitle ? 'Update' : 'Add'} Form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalForm;