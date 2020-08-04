import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
