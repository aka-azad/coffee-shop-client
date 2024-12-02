import { useLoaderData } from "react-router";

const User = () => {
  const profile = useLoaderData();
  console.log(profile);
  return (
    <div>
      <p>{profile.name}</p>
    </div>
  );
};

export default User;
