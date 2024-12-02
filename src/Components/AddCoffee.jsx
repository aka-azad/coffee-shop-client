import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.coffeeName.value,
      supplier: form.supplier.value,
      category: form.category.value,
      chef: form.chef.value,
      taste: form.taste.value,
      details: form.details.value,
      photo: form.photo.value,
    };
    console.log(formData);

    fetch("https://coffee-store-server-iota-one.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: "Success",
            text: "Coffee Added",
            icon: "success",
            confirmButtonText: "cool",
          });
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto my-10 ">
      <Link to={"/"}>Back to Home</Link>
      <h1 className="text-center mb-5 font-bold text-3xl">Add New Coffee</h1>
      <form className="w-full px-52" onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="coffeeName"
                placeholder="Coffee Name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Coffee Supplier"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Coffee Category"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Chef</span>
              </div>
              <input
                type="text"
                name="chef"
                placeholder="Coffee Chef"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Coffee Taste"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <button className="btn btn-primary w-full mt-6" type="submit">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
