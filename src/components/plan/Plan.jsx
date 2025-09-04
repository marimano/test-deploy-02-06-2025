import React, { useContext, useState } from "react";
import './plan.styles.css';
import isCoolContext from "../isCoolContext";
import LanguageContext from "../LanguageContext";
import { useNavigate } from "react-router-dom";

const ACTIVE_ITEM_KEY = 'activeItem';

class Plan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: localStorage.getItem(ACTIVE_ITEM_KEY)
    }
  }

  makeActive = (newActiveItem) => {
    localStorage.setItem(ACTIVE_ITEM_KEY, newActiveItem);
    this.setState({ activeItem: newActiveItem });
  }

  render() {
    const { list } = this.props;
    const { activeItem } = this.state;

    return <ul className="plan">
      {list.map(item => {
        return <li
          key={item}
          className={activeItem === item ? 'active' : ''}
          onClick={() => this.makeActive(item)}
        >
          {item}
        </li>
      })}
    </ul>
  }
}

export default ({ list }) => {
  const [activeItem, setActiveItem] = useState(localStorage.getItem(ACTIVE_ITEM_KEY));

  const makeActive = (newActiveItem) => {
    localStorage.setItem(ACTIVE_ITEM_KEY, newActiveItem);
    setActiveItem(newActiveItem);
  }

  return <div>
    <ul className="plan">
      {list.map(item => {
        return <li
          key={item}
          className={activeItem === item ? 'active' : ''}
          onClick={() => makeActive(item)}
        >
          {item}
        </li>
      })}
    </ul>
    <Description/>
  </div>
}

const Description = () => {
  const isCool = useContext(isCoolContext);
  const currentTree = useContext(LanguageContext);
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about', { replace: true });
  }

  return <div>
    {currentTree.coolPlan(isCool)}
    <button onClick={goToAbout}>Go to about</button>
  </div>
}