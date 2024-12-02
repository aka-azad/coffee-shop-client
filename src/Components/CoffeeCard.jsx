import PropTypes from "prop-types";
import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {
  const handleDeleteCoffee = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-iota-one.vercel.app/coffee/${coffee._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            console.log(data);
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl flex-row">
      <figure>
        <img
          className="w-52 h-full rounded-lg object-cover"
          src={coffee.photo}
          alt={coffee.name}
        />
      </figure>
      <div className="card-body flex-row">
        <div className="flex-grow">
          <h2 className="card-title">{coffee.name}</h2>
          <p>Chef: {coffee.chef}</p>
        </div>
        {/* <p>Price: {coffee.price}</p> */}
        <div className="card-actions flex-col content-center justify-center flex-nowrap">
          <Link className="btn btn-outline">View</Link>
          <Link to={`/updateCoffee/${coffee._id}`} className="btn btn-outline">
            Edit
          </Link>
          <button
            onClick={handleDeleteCoffee}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default CoffeeCard;
