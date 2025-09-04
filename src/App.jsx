import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Plan from "./components/plan/Plan";
import './app.styles.css';
import LanguageContext from "./components/LanguageContext";
import { languages } from "./components/Translates";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHeader3Shown: true,
      planList: null
    }
  }

  componentDidMount() {
    fetch('/data.json')
      .then(resp => resp.json())
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 3000);
        });
      })
      .then(data => {
        this.setState({
          planList: data.plan
        });
      });
  }
  
  onClick() {
    //console.log('Hello block');
  }

  onChange(event) {
    console.log('User typed: ' + event.target.value);
  }

  onUserFinished(event) {
    console.log('Final text is: ' + event.target.value);
  }

  toggleHeader3 = () => {
    this.setState({
      isHeader3Shown: !this.state.isHeader3Shown
    });
  }

  render() {
    const title = 'Hello react';
    const { planList, isHeader3Shown } = this.state;
    return <div className="block" onClick={this.onClick}>
      <Header title={title + '1'} />
      <Header title={title + '2'} />
      {isHeader3Shown && <Header title={title + '3'} />}
      <button onClick={this.toggleHeader3}>Toggle 3rd header</button>
      <p>React is cool</p>
      <input onChange={this.onChange} onBlur={this.onUserFinished}/>
      {planList ? <Plan list={planList} /> : 'Loading...'}
    </div>
  }
}

export default () => {
  const [isHeader3Shown, setIsHeader3Shown] = useState(true);
  const [planList, setPlanList] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  useEffect(() => {
    fetch('data.json')
      .then(resp => resp.json())
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 3000);
        });
      })
      .then(data => {
        setPlanList(data.plan);
      });
  }, []);

  const onClick = () => {
    //console.log('Hello block');
  }

  const onChange = (event) => {
    console.log('User typed: ' + event.target.value);
  }

  const onUserFinished = (event) => {
    console.log('Final text is: ' + event.target.value);
  }

  const toggleHeader3 = () => {
    setIsHeader3Shown(!isHeader3Shown);
  }

  const onLanguageChanged = e => {
    const language = languages.find(l => l.id === e.target.value);
    setCurrentLanguage(language);
  };

  return <div>
    <LanguageContext.Provider value={currentLanguage.tree}>
      <Header />
      <select value={currentLanguage.id} onChange={onLanguageChanged}>
        {languages.map(language => {
          return <option key={language.id} value={language.id}>{language.title}</option>
        })}
      </select>
      <Routes>
        <Route path='/' element={
            <div className="block" onClick={onClick}>
              <p>{currentLanguage.tree.reactIsCool}</p>
              <input onChange={onChange} onBlur={onUserFinished}/>        
              <ErrorBoundary>
                {planList ? <Plan list={planList} /> : currentLanguage.tree.loading}
              </ErrorBoundary>
            </div>
        } />
        <Route path='/about' element={<div>
          {currentLanguage.tree.aboutPage}
          <nav>
            <Link to='/about/company'>About company</Link>
            <Link to='/about/product'>About product</Link>
          </nav>
          <Outlet/>
        </div>}>
          <Route index={true} element={<div>{currentLanguage.tree.readAboutUs}</div>}/>
          <Route path="company" element={<div>{currentLanguage.tree.ourCompanyIsGreat}</div>}/>
          <Route path="product" element={<div>{currentLanguage.tree.ourProductIsGreat}</div>}/>
        </Route>
        <Route path="/contacts" element={<div>{currentLanguage.tree.dniproUkraine}</div>} />
        <Route path='*' element={<div>{currentLanguage.tree.oopsNoSuchPage}</div>}/>
      </Routes>
    </LanguageContext.Provider>
  </div>
  
  
/*  */
}