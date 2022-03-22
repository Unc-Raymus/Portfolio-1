import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
    let menuItems = this.props.menuItems.map((item) => <MenuItem {...item}></MenuItem>)
    return (
      <div className="menu"><h1>{this.props.menuName} Menu</h1>
        <div className="menuItems">
          {menuItems}
        </div>
      </div>
      )
    }
  }