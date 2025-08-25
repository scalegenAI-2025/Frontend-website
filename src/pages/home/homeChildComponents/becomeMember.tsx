import React, { useState } from "react";
import { createUseStyles } from "react-jss";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../../../components/footer/footer";
import BlackNavbar from "../../../components/navbar/blackNavbar";
//import Navbar from "../../../components/navbar/navbar";

const useStyles = createUseStyles({
  container: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "100px",
    padding: 20,
    paddingTop: "50px",
    // fontFamily: "Arial, sans-serif",
  },

  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#002c3e", // dark blue text
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  subHeaderI: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  thankyouContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // white card
    padding: "40px 30px",
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: 500,
    margin: "150px auto",
    textAlign: "center",
    borderTop: "6px solid pink", // pink accent
  },
  header1: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader2: {
    fontSize: 16,
    marginBottom: 0,
    color: "#555",
  },
  inputGroup: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    padding: 10,
    fontSize: 14,
    border: "1px solid #ccc",
    borderRadius: 4,
  },
  textarea: {
    padding: 10,
    fontSize: 14,
    minHeight: 80,
    border: "1px solid #ccc",
    borderRadius: 4,
  },
  select: {
    padding: 10,
    fontSize: 14,
    border: "1px solid #ccc",
    borderRadius: 4,
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  button: {
    padding: 12,
    backgroundColor: "#002c3e",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    marginLeft: 10,
    cursor: "pointer",
    fontSize: 16,
    "&:disabled": {
      backgroundColor: "#666",
      cursor: "not-allowed",
    },
  },
  errorMessage: {
    color: "red",
    marginBottom: 15,
    fontWeight: "bold",
  },
});

const PartnerForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    organizationName: "",
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    partnerCategory: "",
    industry: "",
    expertise: "",
    agreeComms: false,
    newsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  // const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const { name, type } = target;

    let value: string | boolean;

    if (target instanceof HTMLInputElement && type === "checkbox") {
      value = target.checked;
    } else {
      value = target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = {
      organization: formData.organizationName,
      location: formData.location,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      partnerCategory: formData.partnerCategory,
      industry: formData.industry,
      offerExpertise: formData.expertise,
      subscribeNewsletter: formData.newsletter,
      receiveCommunication: formData.agreeComms,
    };

    try {
      const response = await fetch(
        "https://backend-1-9qjs.onrender.com/api/member",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Submission failed");
      setSubmitted(true); // ✅ show thank you message
      // toast.success("Membership application submitted successfully!");

      toast.success("Membership application submitted successfully!");

      // Reset form after success
      setFormData({
        organizationName: "",
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        partnerCategory: "",
        industry: "",
        expertise: "",
        agreeComms: false,
        newsletter: false,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Submission failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BlackNavbar />
      {submitted ? ( // ✅ conditional rendering
        <div className={classes.thankyouContainer}>
          <h2 className={classes.header1}>Thank you!</h2>
          <p className={classes.subHeader2}>
            Your membership application has been submitted successfully. 🎉
            We’ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={classes.container} noValidate>
          <div className={classes.header}>Become a Member</div>
          <div className={classes.subHeader}>
            Interested in joining the Scaling GenAI ecosystem? Fill out the form
            below to join our network.
          </div>
          <div className={classes.subHeaderI}>
            <i>All fields are mandatory</i>
          </div>
          {error && (
            <div role="alert" className={classes.errorMessage}>
              {error}
            </div>
          )}

          <div className={classes.inputGroup}>
            <label htmlFor="organizationName" className={classes.label}>
              Organization name
            </label>
            <input
              id="organizationName"
              name="organizationName"
              className={classes.input}
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="location" className={classes.label}>
              Location
            </label>
            <input
              id="location"
              name="location"
              className={classes.input}
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="firstName" className={classes.label}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              className={classes.input}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="lastName" className={classes.label}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              className={classes.input}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="email" className={classes.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={classes.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="phoneNumber" className={classes.label}>
              Phone number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              className={classes.input}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="partnerCategory" className={classes.label}>
              Enterprises category
            </label>
            <select
              id="partnerCategory"
              name="partnerCategory"
              className={classes.select}
              value={formData.partnerCategory}
              onChange={handleChange}
              required
            >
              <option value="">Please Select</option>
              <option value="Academia">Large</option>
              <option value="Startup">Medium</option>
              <option value="Industry">Small</option>
              <option value="Industry">Startup</option>
            </select>
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="industry" className={classes.label}>
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              className={classes.input}
              value={formData.industry}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="expertise" className={classes.label}>
              Describe your Products/Services
            </label>
            <textarea
              id="expertise"
              name="expertise"
              className={classes.textarea}
              value={formData.expertise}
              onChange={handleChange}
            />
          </div>

          <div className={classes.checkboxGroup}>
            <label htmlFor="agreeComms">
              <input
                id="agreeComms"
                type="checkbox"
                name="agreeComms"
                checked={formData.agreeComms}
                onChange={handleChange}
              />{" "}
              I wish to subscribe to the mailing list
            </label>
            <label htmlFor="newsletter">
              <input
                id="newsletter"
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />{" "}
              I would like to sign up for Scaling GenAI newsletter
            </label>
          </div>

          <button type="submit" className={classes.button} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
      <Footer />
    </>
  );
};

export default PartnerForm;
