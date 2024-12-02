import { useState } from "react";
import { useLoaderData } from "react-router";

const EditUserInfo = () => {
  const user = useLoaderData();
  const [name, setName] = useState(user.name);
  const [auth, setAuth] = useState(user?.auth || "");
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user?.role || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !auth || !email || !role) {
      setError("All fields are required.");
      return;
    }

    const updatedUser = { name, auth, email, role };
    console.log(updatedUser);
    fetch(`https://coffee-store-server-iota-one.vercel.app/user/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Edit User Info</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Authentication</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={auth}
            onChange={(e) => setAuth(e.target.value)}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <button className="btn btn-primary">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserInfo;
