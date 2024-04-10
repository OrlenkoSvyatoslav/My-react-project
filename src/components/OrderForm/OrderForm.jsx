import { FaTshirt } from "react-icons/fa";
import css from "./OrderForm.module.css";
import { useState } from "react";
const initialValue = {
  size: "md",
  color: "blue",
};

export default function OrderForm() {
  // const handleSize = (event) => {
  //   setValues({
  //     ...values,
  //     size: event.target.value,
  //   });
  // };
  // const handleColor = (event) => {
  //   setValues({
  //     ...values,
  //     color: event.target.value,
  //   });
  // };
  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ initialValue });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handleSubmit}
    >
      <FaTshirt size="160" color={values.color} />

      <div className={css.group}>
        <label>Size</label>
        <select
          name="size"
          value={values.size}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label>Color</label>
        <select
          name="color"
          value={values.color}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
