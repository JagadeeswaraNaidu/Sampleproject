import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === "testuser" && form.password === "Test123") {
      navigate("/list");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;