import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || isNaN(amount) || amount <= 0) {
      alert("Please enter valid data.");
      return;
    }

    const newExpense = {
      description,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);

    setDescription("");
    setAmount("");
  };

  return (
    <div id="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="amount">Amount ($):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
