import React from "react";
import "./styles.css";

function Filter(props) {
  return (
    <div class="form-floating course-filter">
    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>{props.opt1}</option>
    <option value="1">{props.opt2}</option>
    <option value="2">{props.opt3}</option>
    </select>
    <label for="floatingSelect">{props.label}</label>
    </div>
  );
}

export default Filter;
