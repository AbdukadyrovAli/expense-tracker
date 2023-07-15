import React, { useState } from "react";
import "./ExpensesFilter.css";
import Button from "../UI/button/Button";

const ExpensesFilter = ({
  renderedExpenses,
  expenses,
  setExpenses,
  selectedYear,
  onSelectedYearChange,
}) => {
  const [sortedExpenses, setSortedExpenses] = useState("");

  const onSelectedButtonChange = (e) => {
    setSortedExpenses(e.target.value);

    if (sortedExpenses === "vniz") {
      setExpenses([
        ...expenses.sort((a, b) => {
          return a.amount - b.amount;
        }),
      ]);
    } else {
      setExpenses([
        ...expenses.sort((a, b) => {
          return b.amount - a.amount;
        }),
      ]);
    }
    console.log(renderedExpenses);
  };

  const alfva = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return a.title.localeCompare(b.title);
      }),
    ]);
  };
  const newww = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select
          style={{ backgroundColor: "#510674", color: "white" }}
          onChange={onSelectedButtonChange}
          value={sortedExpenses}
          id="filter"
        >
          <option value="vniz">По возрастанию</option>
          <option value="verx">По убыванию</option>
        </select>
        <Button onClick={newww}>По новизне</Button>
        <Button onClick={alfva}>По названию</Button>
        <label htmlFor="filter">Filter by year:</label>

        <select
          id="filter"
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
