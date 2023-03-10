import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItomForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amoutInputRef = useRef();

  
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amoutInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountIsValid(false);

      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amoutInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please enter a valid amout (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
