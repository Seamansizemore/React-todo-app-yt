import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });


  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  


      props.omSubmit({
          id: Math.floor(Math.random()* 10000),
          text: input
         });
      setInput('');
  };

return (
    <form onSubmit={handleSubmit} clasName='todo-form'>
      {props.edit ? (
        <>
      <input
        placeholder='Update your item'
        vaule={input}
        name='text'
        ref={inputRef}
        className='todo-input edit'
      />
      <button className={handleSubmit} className='todo-button edit'>
        Update
      </button>
      </>
      ) : (
        <>
        <input
          placeholder='Adda todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          </>
      )}
    </form>
  );
}

export default TodoForm;
