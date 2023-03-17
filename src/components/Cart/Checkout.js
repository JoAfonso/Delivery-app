import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputValidaty, setFormInputValidaty] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  // Helpers functions para validação
  const isEmpty = (value) => value.trim() === "";
  const isEightChars = (value) => value.trim().length === 8;
  //

  // Usando UseRef para manipular validar somente ao final
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  //

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    // validação simples de cada input
    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityisValid = !isEmpty(enteredCity);
    const postalCodeIsValid = isEightChars(enteredPostalCode);

    setFormInputValidaty({
      name: nameIsValid,
      street: streetIsValid,
      city: cityisValid,
      postalCode: postalCodeIsValid
    })

    // validação total
    const formIsValid =
      nameIsValid && streetIsValid && cityisValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClassNames = `${styles.control} ${formInputValidaty.name ? "" : styles.invalid}`
  const streetControlClassNames = `${styles.control} ${formInputValidaty.street ? "" : styles.invalid}`
  const postalControlClassNames = `${styles.control} ${formInputValidaty.postalCode ? "" : styles.invalid}`
  const cityControlClassNames = `${styles.control} ${formInputValidaty.city ? "" : styles.invalid}`
  

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClassNames}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidaty.name && <p>Please enter you name</p>}
      </div>
      <div className={streetControlClassNames}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidaty.street && <p>Please enter you street</p>}

      </div>
      <div className={postalControlClassNames}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidaty.postalCode && <p>Please enter you postal code</p>}

      </div>
      <div className={cityControlClassNames}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidaty.city && <p>Please enter you city</p>}

      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
