import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#FF4500",

    padding: 40,

    position: "relative",
  },
  hireButton: {
    position: "absolute",
    top: 20,
    right: 40,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: 25,
    fontSize: 16,
    cursor: "pointer",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  title: {
    fontSize: "35px",
    fontWeight: 400,
    color: "#000",
    marginBottom: 20,
    letterSpacing: "-0.5px",
  },
  separator: {
    width: "100%",
    height: "1.3px",
    backgroundColor: "#000",
    marginBottom: 60,
  },
  mainContent: {
    display: "flex",
    alignItems: "flex-start",
    gap: 120,
    maxWidth: 1400,

    "@media (max-width: 700px)": {
      flexDirection: "column",
      gap: 20,
    },
  },
  leftSection: {
    flex: 1,
    maxWidth: 500,

    "@media (max-width: 700px)": {
      maxWidth: "100%",
    },
  },
  subtitle: {
    fontSize: "50px",
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    "@media (max-width: 700px)": {
      fontSize: 40,
    },
  },
  formSection: {
    flex: 1,
    maxWidth: 600,
    "@media (max-width: 700px)": {
      maxWidth: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  inputRow: {
    display: "flex",
    gap: 20,
    flexWrap: "nowrap",
  },
  input: {
    flex: 1,
    padding: "12px 20px",
    border: "1.3px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    outline: "none",
    "&:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    "&::placeholder": {
      color: "#000", // <-- black placeholder
    },
  },
  fullWidthInput: {
    flex: 1,
    padding: "12px 20px",
    border: "1.3px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    outline: "none",
    width: "100%",
    "&:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    "&::placeholder": {
      color: "#000", // <-- black placeholder
    },
  },
  textarea: {
    extend: "input",
    minHeight: 120,
    resize: "vertical",
    color: "#000",
    fontFamily: "inherit",
    "&::placeholder": {
      color: "#000", // <-- black placeholder
    },
  },

  submitButton: {
    alignSelf: "flex-end",
    padding: "12px 32px",
    border: "2px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    cursor: "pointer",
    fontWeight: 500,
    marginTop: 20,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#000",
      color: "#FF4500",
    },
    "@media (max-width: 700px)": {
      alignSelf: "center",
    },
  },
});

const ContactUs = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    moreDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Contact us</h1>
      <div className={classes.separator}></div>

      <div className={classes.mainContent}>
        <div className={classes.leftSection}>
          <h2 className={classes.subtitle}>We'd love to hear from you.</h2>
        </div>

        <div className={classes.formSection}>
          <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
            <div className={classes.inputRow}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={classes.input}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={classes.input}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={classes.fullWidthInput}
            />

            <div className={classes.inputRow}>
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleInputChange}
                className={classes.input}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleInputChange}
                className={classes.input}
              />
            </div>

            <textarea
              name="moreDetails"
              placeholder="More Details"
              value={formData.moreDetails}
              onChange={handleInputChange}
              className={classes.textarea}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className={classes.submitButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
