import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const initialVal = {
    username: "",
    email: "",
    contactNumber: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialVal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const valChangeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setFormErrors(formValidate(formState));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      const mailTemp = `Message recieved: <br> Name: ${formState.username} <br> Email: ${formState.email} <br> Phone Number: ${formState.contactNumber} <br> Message: ${formState.message}`;

      if (window.Email) {
        window.Email.send({
          Host: "smtp.elasticemail.com",
          Username: "rahuljeena16@gmail.com",
          Password: "6F890A6ABCE47C2327993FB4F9DF92310DD5",
          To: "rahuljeena16@gmail.com",
          From: "rahuljeena16@gmail.com",
          Subject: "Project AutoMail ",
          Body: mailTemp,
        }).then(() => alert("Email Sent"));
      }
    }
    // const config = {
    //   Host: "smtp.elasticemail.com",
    //   Username: "rahuljeena16@gmail.com",
    //   Password: "6F890A6ABCE47C2327993FB4F9DF92310DD5",
    //   To: "rahuljeena16@gmail.com",
    //   From: formState.email,
    //   Subject: "Recieved",
    //   Body: formState.message,

    // };

    // console.log(config)

    // if(window.Email){
    //   window.Email.send(config).then(() => alert("email sent successfully"));
    // }
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);

      console.log(formState);
      console.log("Success");
    }
  }, [formErrors]);

  const formValidate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const numberRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (values.username == "") {
      errors.username = "Username is Required";
    }
    if (values.email == "") {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Mail Format";
    }
    if (values.contactNumber == "") {
      errors.contactNumber = "Contact Number is Required";
    } else if (
      !numberRegex.test(values.contactNumber) ||
      values.contactNumber.length > 10
    ) {
      errors.contactNumber = "Invalid Phone Number";
    }
    if (values.message == "") {
      errors.message = "Message is Required";
    }

    return errors;
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.box1}>
        <div className={styles.emailContainer}>
          <IoMailOutline className={styles.renderIcon} />
          <h3>Email</h3>
          <h5>rahul@gmail.com</h5>
        </div>
        <div className={styles.addressContainer}>
          <FaMapLocationDot className={styles.renderIcon} />
          <h3>Address</h3>
          <h5>A-3</h5>

          <h5>Sector-8, Rohini</h5>

          <h5>Delhi-110085</h5>
        </div>
        <div className={styles.contactContainer}>
          <MdOutlineAddIcCall className={styles.renderIcon} />
          <h3>Contact</h3>
          <h5>+91 8130902286</h5>
        </div>
      </div>

      <div className={styles.box2}>
        <form action="" onSubmit={formSubmitHandler}>
          <div className={styles.row1}>
            <div className={styles.inpBox}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="username"
                value={formState.username}
                id="idName"
                onChange={valChangeHandler}
              />
              <div className={styles.error}>{formErrors.username}</div>
            </div>
            <div className={styles.inpBox}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                id="idEmail"
                onChange={valChangeHandler}
              />
              <div className={styles.error}>{formErrors.email}</div>
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.inpBox}>
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formState.contactNumber}
                id="idNumber"
                onChange={valChangeHandler}
              />
              <div className={styles.error}>{formErrors.contactNumber}</div>
            </div>

            <div className={styles.inpBox}>
              <label htmlFor="">Type of Service</label>
              <select
                placeholder="Select an Option"
                name="service"
                id="idService"
                defaultValue={"defaultVal"}
              >
                <option value="defaultVal" disabled>
                  Choose an option
                </option>
                <option value="" name="Optn1" id="idOptn1">
                  Opt1
                </option>
                <option value="" name="Optn2" id="idOptn2">
                  Opt2
                </option>
                <option value="" name="Optn3" id="idOptn3">
                  Opt3
                </option>
              </select>
              <div className={styles.error}>Select Value!</div>
            </div>
          </div>

          <div className={styles.inpBox}>
            <label htmlFor="">Message</label>
            <textarea
              rows="8"
              type="text"
              value={formState.message}
              onChange={valChangeHandler}
              name="message"
              id="idMessage"
            />
            {/* <div className={styles.error}> {formErrors.message}</div> */}
          </div>

          <button className={styles.buttonBox} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
