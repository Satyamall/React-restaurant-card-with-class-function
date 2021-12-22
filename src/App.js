import React from "react";
import "./styles.css";
import data from "./data.json";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: 0,
      paymentMethod: "all",
      sortMethod: null
      // show res which are greater than filterRating
    };
  }
  handleRating = (rating) => {
    this.setState({
      filterRating: rating
    });
  };
  handlePayment = (payment) => {
    this.setState({
      paymentMethod: payment
    });
  };
  handleSort = (order) => {
    this.setState({
      sortMethod: order
    });
  };
  render() {
    const { filterRating, paymentMethod, sortMethod } = this.state;
    return (
      <div className="App">
        <h1>Details</h1>
        <div>
          Ratings
          {[4, 3, 2, 1, 0].map((rating) => (
            <button key={rating} onClick={() => this.handleRating(rating)}>
              {rating === 0 ? "All" : rating}
            </button>
          ))}
        </div>
        <div>
          Payment methods
          {["all", "card", "cash"].map((method) => (
            <button key={method} onClick={() => this.handlePayment(method)}>
              {method}
            </button>
          ))}
        </div>
        <div>
          Cost
          {["asc", "desc"].map((order) => (
            <button key={order} onClick={() => this.handleSort(order)}>
              {order}
            </button>
          ))}
        </div>
        {/* <img src="https://i.imgur.com/lMeVwr7.png" alt="img" /> */}
        {data
          .filter(({ rating, payment_methods }) => {
            const { cash, card } = payment_methods;
            let paymentCondition = true;
            if (paymentMethod === "cash") {
              paymentCondition = cash ? true : false;
            } else if (paymentMethod === "card") {
              paymentCondition = card ? true : false;
            }
            return rating >= filterRating && paymentCondition;
          })
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "asc") {
              return a.costForTwo - b.costForTwo;
            }
            if (sortMethod === "desc") {
              return b.costForTwo - a.costForTwo;
            }
          })
          .map((item) => (
            <RestaurantDetails data={item} key={item.id} />
          ))}
      </div>
    );
  }
}
