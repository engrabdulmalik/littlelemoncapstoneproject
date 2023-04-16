import React from "react";
import "../../../../src/css/table.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [isEmailFocus, setIsEmailFocus] = useState(true);
  const [ip_email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [ip_date, setDate] = useState("");
  const [valDate, setValDate] = useState(false);
  const [isDateFocus, setIsDateFocus] = useState(true);
  const [guestNumber, setguestNumber] = useState("");
  const [isGuest, setisGuest] = useState("false");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);
    const isDate = Date.parse(e.target.value) > 0 ? true : false;
    setValDate(isDate);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const onCHange_name = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const focusName = () => {
    setIsNameFocus(false);
  };

  const focusEmail = () => {
    setIsEmailFocus(false);
  };

  const focusDate = () => {
    setIsDateFocus(false);
  };

  const onChange_email = (e) => {
    setEmail(e.target.value);
    const isEmail =
      e.target.value.length > 9 &&
      e.target.value.indexOf("@") > 1 &&
      e.target.value.indexOf(".com") > 1
        ? true
        : false;
    setIsEmail(isEmail);
  };

  // const dateChangeHandler = (e) => {
  //   setDate(e.target.value);
  //   const isDate = Date.parse(e.target.value) > 0 ? true : false;
  //   setValDate(isDate);
  // };
  const guestHandler = (e) => {
    setguestNumber(e.target.value);
    const isGuest = e.target.value > 0 && e.target.value < 11 ? true : false;
    setisGuest(isGuest);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>BOOK NOW</h1>
      <section id="res_main">
        <article>
          <form
            style={{
              display: "grid",
              // maxWidth: "400vw",
              gap: "1rem",
              // width: "35vw",
            }}
            onSubmit={handleSubmit}
          >
            <br></br>
            <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
              {" "}
              Name:{" "}
            </label>

            <div>
              <input
                type="text"
                id="res-name"
                className="res_ip"
                onChange={onCHange_name}
                onBlur={focusName}
                value={name}
              />
              {!isName && !isNameFocus && (
                <p className="error_msg"> * Required Full Name</p>
              )}
            </div>

            <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
              {" "}
              Email:{" "}
            </label>

            <div>
              <input
                type="email"
                id="res-email"
                className="res_ip"
                onChange={onChange_email}
                onBlur={focusEmail}
                value={ip_email}
              />
              {!isEmail && !isEmailFocus && (
                <p className="error_msg">
                  {" "}
                  * Email field is Invalid or Incomplete
                </p>
              )}
            </div>

            <label htmlFor="res-date" style={{ fontWeight: "bold" }}>
              {" "}
              Date:{" "}
            </label>

            <div>
              <input
                type="date"
                id="res-date"
                className="res_ip"
                onChange={handleDateChange}
                onBlur={focusDate}
                value={ip_date}
              />
              {!valDate && !isDateFocus && (
                <p className="error_msg"> * Date is Invalid</p>
              )}
            </div>

            <label htmlFor="res-time" style={{ fontWeight: "bold" }}>
              Choose time:
            </label>
            <select
              id="res-time "
              style={{
                display: "grid",
                // maxWidth: "400vw",
                gap: "1rem",
                width: "35vw",
                height: "3.7rem",
                borderRadius: "16px",
                border: "3px solid black",
              }}
              disabled={!valDate}
            >
              {finalTime}
            </select>

            <label htmlFor="guests" style={{ fontWeight: "bold" }}>
              Number of guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              className="res_ip"
              value={guestNumber}
              onChange={guestHandler}
            ></input>
            {!isGuest && (
              <p className="error_msg">
                {" "}
                * Guest No. should be less than or equal to 10
              </p>
            )}

            <label htmlFor="occasion" style={{ fontWeight: "bold" }}>
              Occasion
            </label>
            <select
              id="occasion"
              style={{
                display: "grid",
                // maxWidth: "400vw",
                gap: "1rem",
                width: "35vw",
                height: "3.7rem",
                borderRadius: "16px",
                border: "3px solid black",
              }}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <br></br>
            <Link className="action-button" to="/confirmation">
              Book Table
            </Link>
            <br></br>
          </form>
        </article>
      </section>
      <br></br>
      <small>
        <p>
          Note: You cannot edit your reservation after submission. Please
          double-check your answer before submitting your reservation request.
        </p>
      </small>
      <br></br>
    </>
  );
}
