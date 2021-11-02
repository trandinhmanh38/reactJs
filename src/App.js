import './App.css';
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Counter from "./components/Counter/Counter";
import Checkbox from "./components/Checkbox/Checkbox";
import PokemonPage from "./pages/PokemonOage/PokemonPage";
import Register from "./pages/Register/Register";
import { useState } from "react";
import MyHero from "./pages/MyHero/MyHero";
import LoginPage from "./pages/LoginPage/LoginPage";
const OPTIONS = {
    WELCOME: 'welcome',
    COUNTER: 'counter',
    CHECKBOX: 'checkbox',
    POKEMON: 'pokemon',
    REGISTER: 'register',
    LOGIN: 'login',
    MYHERO: 'myhero'
}
const App =() =>{
    const [optionSelected, setOptionSelected] = useState(OPTIONS.WELCOME);
    console.log('option selected = ', optionSelected);
    const handleOptionChange = (evt) => {
        setOptionSelected(evt.target.value);
    }
     const getPage = () =>{
        switch (optionSelected){
             case OPTIONS.WELCOME:
                return <WelcomePage/>;
             case OPTIONS.COUNTER:
                return <Counter/>;
            case OPTIONS.CHECKBOX:
                return <Checkbox/>;
            case OPTIONS.POKEMON:
                return <PokemonPage/>;
            case OPTIONS.REGISTER:
                return <Register/>;
            case OPTIONS.LOGIN:
                return <LoginPage/>;
            case OPTIONS.MYHERO:
                return <MyHero/>;
             default:
                 return <div>Not yet implement</div>;
         }
     }
  return (
      <div className="app__container">
          <select
          value={ optionSelected }
          onChange={ handleOptionChange }
          >
              <option value={ OPTIONS.WELCOME }>Welcome</option>
              <option value={ OPTIONS.COUNTER }>Counter</option>
              <option value={ OPTIONS.CHECKBOX }>CheckBox</option>
              <option value={ OPTIONS.POKEMON }>Pokemon</option>
              <option value={ OPTIONS.MYHERO}>My Hero</option>
              <option value={ OPTIONS.REGISTER }>Register</option>
              <option value={ OPTIONS.LOGIN}>Login</option>
          </select>
          <div>Option selected: {optionSelected}</div>
          {getPage()}
      </div>
  )
};
export default App;