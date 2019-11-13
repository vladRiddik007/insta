import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg"
        alt="man"
        name="Jysen"
        min/>
      <Palette />
    </div>
  );
};

export default Profile;
