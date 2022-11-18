import React from "react";

const RestaurantDetails = ({ restaurant }) => {
  return (
    <div className="mx-6 flex flex-col justify-center items-center">
      <span className="font-bold text-3xl text-text1">{restaurant.name}</span>
      <span className="font-semibold text-xl text-center text-text1 mt-6">
        {restaurant.description}
      </span>
      <span className="font-medium text-lg text-center text-text1 mt-6">
        {restaurant.irlAddress}
      </span>
    </div>
  );
};

export default RestaurantDetails;
