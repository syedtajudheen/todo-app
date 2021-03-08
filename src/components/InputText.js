import React from "react";

export const InputText = ({ onSubmit, placeholder }) => {
  const [value, setInput] = React.useState('');

  const onHandleKeyDown = (e) => {
    if (e.key === 'Enter' && value) {
      onSubmit(value);
      setInput('');
    }
  }

  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={e => setInput(e.target.value)}
      onKeyDown={onHandleKeyDown}
    />
  );
}; 
