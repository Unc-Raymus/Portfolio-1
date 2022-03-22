import Menu from "../Menu"
function MenuApp(props) {
  return props.data.map((item) => <Menu {...item}></Menu>)
}

export default MenuApp