import React from "react";

const RestaurantDetails = props => {
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = props.data;

  return (
    <div style={{ border: "1px solid black", marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20
        }}
      >
        <div style={{ flex: 1 }}>
          <img width="150px" src={src} alt={name} />
        </div>
        <div style={{ textAlign: "left", paddingLeft: 10, flex: 2 }}>
          <h4> {name} </h4>
          <p> {cuisine.join(", ")} </p>
          <p> Cost for two: ₹{costForTwo} </p>
          <p>
            {" "}
            Min: ₹{minOrder} - Upto {deliveryTime} min{" "}
          </p>
          {cash && card ? (
            <p> Accepts : "Cash and Card" </p>
          ) : card ? (
            <p> Accepts : "Card" </p>
          ) : (
            <p> Accepts : "Cash" </p>
          )}
        </div>
        <div style={{ textAlign: "right", flex: 0.7 }}>
          <div> {rating} </div>
          <div> {votes} votes </div>
          <div> {reviews} reviews</div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid black",
          textAlign: "right",
          padding: 15
        }}
      >
        Order Online >
      </div>
    </div>
  );
};

export default RestaurantDetails;
