import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <label htmlFor="inputHabitName" className="hidden">습관 이름</label>
      <input
        ref={inputRef}
        type="text"
        id="inputHabitName"
        className="add-input"
        name="inputHabitName"
        placeholder="Habit"
      />
      <button type="submit" className="add-button">Add</button>
    </form >
  );
});

export default HabitAddForm;