import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const usersList = useLoaderData();
  const [users, setUsers] = useState(usersList);

  const handleRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-store-server-iota-one.vercel.app/user/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                setUsers(users.filter((user) => user._id !== id));
              }
              console.log(data);
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="table border-2 w-full">
          <thead>
            <tr className="*:text-center *:border">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last Sign In</th>
              <th>Authorization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="*:border">
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.creationTime || "Unknown"}</td>
                <td>{user?.lastSignInTime || "Unknown"}</td>
                <td>{user?.auth || "Unauthorized"}</td>
                <td>
                  <button
                    onClick={() => handleRemoveUser(user._id)}
                    className="btn btn-circle"
                  >
                    {"X"}
                  </button>
                  <Link
                    to={`/user/edit/${user._id}`}
                    className="btn btn-circle"
                  >
                    {"E"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
