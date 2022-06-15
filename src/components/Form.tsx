import { useRef, useState } from "react";

function Form() {
  const fnameInput = useRef<any>(null);
  const lnameInput = useRef<any>(null);
  const emailInput = useRef<any>(null);
  const passwordInput = useRef<any>(null);

  const [isFnameEmpty, setIsFnameEmpty] = useState(false);
  const [isLnameEmpty, setIsLnameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const checkFnameEmpty = () => {
    fnameInput.current.value === ""
      ? setIsFnameEmpty(true)
      : setIsFnameEmpty(false);
  };
  const checkLnameEmpty = () => {
    lnameInput.current.value === ""
      ? setIsLnameEmpty(true)
      : setIsLnameEmpty(false);
  };
  const checkEmailEmpty = () => {
    emailInput.current.value === ""
      ? setIsEmailEmpty(true)
      : setIsEmailEmpty(false);
  };
  const checkEmailValidity = () => {
    emailRegex.test(emailInput.current.value)
      ? setIsEmailValid(false)
      : setIsEmailValid(true);
  };
  const checkPasswordEmpty = () => {
    passwordInput.current.value === ""
      ? setIsPasswordEmpty(true)
      : setIsPasswordEmpty(false);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    checkFnameEmpty();
    checkLnameEmpty();
    checkEmailEmpty();
    checkEmailValidity();
    checkPasswordEmpty();
  };

  return (
    <div className="form" onSubmit={onSubmitHandler}>
      <div className="form-promo">
        <span>Try it free 7 days </span>
        then
        <br /> $20/mo. thereafter
      </div>
      <form action="#" className="form-main">
        <div
          className={`form-main__input-wrapper ${
            isFnameEmpty ? "form-main__input-wrapper--error" : ""
          }`}
        >
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            ref={fnameInput}
            onChange={checkFnameEmpty}
          />
          <span>First Name cannot be empty</span>
        </div>
        <div
          className={`form-main__input-wrapper ${
            isLnameEmpty ? "form-main__input-wrapper--error" : ""
          }`}
        >
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            ref={lnameInput}
            onChange={checkLnameEmpty}
          />
          <span>Last Name cannot be empty</span>
        </div>
        <div
          className={`form-main__input-wrapper ${
            isEmailValid || isEmailEmpty
              ? "form-main__input-wrapper--error"
              : ""
          }`}
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            ref={emailInput}
            onChange={() => {
              checkEmailEmpty(), checkEmailValidity();
            }}
          />
          {isEmailEmpty ? (
            <span>Email cannot be empty</span>
          ) : isEmailValid ? (
            <span>Looks like this is not an email</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div
          className={`form-main__input-wrapper ${
            isPasswordEmpty ? "form-main__input-wrapper--error" : ""
          }`}
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordInput}
            onChange={checkPasswordEmpty}
          />
          <span>Password cannot be empty</span>
        </div>
        <button type="submit" className="form-main__button">
          CLAIM YOUR FREE TRIAL
        </button>
        <span className="form-main__terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#">Terms and Services</a>
        </span>
      </form>
    </div>
  );
}

export default Form;
