


import { useContext, useState } from "react";
import { authContext } from "../context/authcontext";

const SignupForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
// const [signup, submitting] = useContext(authContext)                                                                                                                                                                                                                                              
  const [loading, setLoadding] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const reviewpassword = () => {
    setshowPassword((prev) => !prev);
  };

  const handelesubmit = async (e) => {
    e.preventDefault();
    setLoadding(true);

    try {
      const response = await fetch(`http://localhost:4005/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      const data = await response.json();
      console.log("Signup response:", data);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoadding(false);
    }
  };

  // Internal styles
  const styles = {
    form: {
      maxWidth: "400px",
      margin: "100px auto ",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    passwordWrapper: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "0 10px",
      backgroundColor: "#fff",
    },
    passwordInput: {
      flex: 1,
      padding: "10px",
      fontSize: "16px",
      border: "none",
      outline: "none",
    },
    showBtn: {
      cursor: "pointer",
      color: "#007BFF",
      fontWeight: "bold",
      marginLeft: "10px",
      userSelect: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      backgroundColor: "#051b0ac8",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <form style={styles.form} onSubmit={handelesubmit}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInput}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInput}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <div style={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handleInput}
            style={styles.passwordInput}
          />
          <span onClick={reviewpassword} style={styles.showBtn}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      </div>

      <div style={styles.formGroup}>
        <button type="submit" style={styles.button}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
