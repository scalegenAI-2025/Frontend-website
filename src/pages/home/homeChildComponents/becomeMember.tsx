import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../components/navbar/navbar";

const useStyles = createUseStyles({
  container: {
    maxWidth: 800,
    margin: "auto",
    padding: 20,
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
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
      const response = await fetch("http://localhost:9000/api/member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Submission failed");

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
      <Navbar />

      <form onSubmit={handleSubmit} className={classes.container} noValidate>
        <div className={classes.header}>Become a Member</div>
        <div className={classes.subHeader}>
          Interested in becoming a member of AI Sweden? We're looking to
          collaborate with organizations that are eager to innovate and
          contribute to the AI ecosystem in Sweden. Fill out the form below to
          join our network.
        </div>

        {error && (
          <div role="alert" className={classes.errorMessage}>
            {error}
          </div>
        )}

        <div className={classes.inputGroup}>
          <label htmlFor="organizationName" className={classes.label}>
            Organization name*
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
            Location (head office in Sweden)*
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
            First Name*
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
            Last Name*
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
            Email*
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
            Partner category*
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
            <option value="Academia">Academia</option>
            <option value="Startup">Startup</option>
            <option value="Industry">Industry</option>
          </select>
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="industry" className={classes.label}>
            Industry (optional)
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
            Offer/expertise
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
            I agree to receive communication regarding my interest
          </label>
          <label htmlFor="newsletter">
            <input
              id="newsletter"
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />{" "}
            I would like to sign up for AI Sweden’s newsletter
          </label>
        </div>

        <button type="submit" className={classes.button} disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default PartnerForm;
