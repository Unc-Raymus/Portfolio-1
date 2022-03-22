import React from "react"
import AddToCartButton from "../AddToCartButton"
//import useContext from "react"

export default class MenuItem extends React.Component {
  //state.itemShown displays menu items in name or fully renders them based on status
  constructor(props) {
    super(props);
    this.state = {
      itemShown: false
    }
  }
  
  render() {
    return (
      <div className="menu-item" id={`menu-item-${this.props.itemId}`}>
        {!this.state.itemShown ?
        <div>
          <p>{this.props.itemName}</p>
          <button onClick={() => this.setState({itemShown: true})}>
          show details
          </button>
          </div>
        :
        //this.props.itemPrice is converted to an int and passed to
        //AddToCartButton so its unique value is added to the cart totall
        //onClick
        <div>
          <h2>{this.props.itemName}</h2>
          <span>${this.props.itemPrice}</span>
          <p>{this.props.itemDescription}</p>
          <AddToCartButton price={parseInt(this.props.itemPrice)}></AddToCartButton>
          <button onClick={() => this.setState({itemShown: false})}>
          hide details
          </button>
        </div>
        }
      </div>
    );
  }
}