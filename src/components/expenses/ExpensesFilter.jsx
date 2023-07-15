import React from "react";
import "./ExpensesFilter.css";
import Button from "../UI/button/Button";

const ExpensesFilter = ({ selectedYear, onSelectedYearChange }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select style={{backgroundColor:"#510674", color:"white"}}>
          <option>
            <Button>По возрастанию</Button>
          </option>
          <option>
            <Button>По убыванию</Button>
          </option>
        </select>
        <Button>По новизне</Button>
        <Button>По названию</Button>
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
