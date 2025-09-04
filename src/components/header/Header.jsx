import React, { useState, useEffect, useRef, useContext } from "react";
import LanguageContext from "../LanguageContext";
import { NavLink } from "react-router-dom";

const colors = ['blue', 'black', 'green', 'red'];
const MIN_SIZE = 10;
const MAX_SIZE = 80;

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: 'blue',
      size: 30
    };

    console.log('creating');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  onClick = () => {
    const newColorIndex = Math.floor(Math.random() * colors.length);
    this.setState({
      currentColor: colors[newColorIndex]
    })
  }

  sizeLess = () => {
    const { size } = this.state;
    if (size <= MIN_SIZE) {
      return;
    }

    this.setState({
      size: size - 1
    });
  }

  sizeMore = () => {
    const { size } = this.state;
    if (size >= MAX_SIZE) {
      return;
    }

    this.setState({
      size: size + 1
    });
  }

  render() {
    console.log('render');
    const { title } = this.props;
    const { currentColor, size } = this.state;
    return <div>
      <button onClick={this.sizeLess}>-</button>
      <h1 style={{ color: currentColor, fontSize: size + 'px' }} onClick={this.onClick}>{title}</h1>
      <button onClick={this.sizeMore}>+</button>
    </div>
  }

  componentDidMount() {
    console.log('did mount');
    fetch
  }

  componentDidUpdate() {
    console.log('did update');
  }
}

export default ({ title }) => {
  console.log('render header');
  const [size, setSize] = useState(30);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [headerHeight, setHeaderHeight] = useState();
  const onClick = () => {
    const newColorIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[newColorIndex]);
  }

  const testRef = useRef(10);

  const sizeLess = () => {
    if (size > MIN_SIZE) {
      testRef.current--;
      setSize(size - 1);
    }
  }

  const sizeMore = () => {
    if (size < MAX_SIZE) {
      testRef.current++;
      setSize(size + 1);
    }
  }

  const currentTree = useContext(LanguageContext);
  return <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/todos'>Todo list</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contacts'>Contacts</NavLink>
  </div>
}