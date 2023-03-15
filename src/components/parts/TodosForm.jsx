const TodosForm = ({ handleSubmit, handleChange, text }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        className="input"
        placeholder="Enter your todo"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodosForm;
