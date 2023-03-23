import {Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown]=useState(false);

    const showCardHandler = ()=>{
        setCartIsShown(true);
    }
    const hideCardHandler=()=>{
        setCartIsShown(false);
    }
  return (
    <Fragment>
        {cartIsShown && <Cart onClose={hideCardHandler}/>}
   <Header onShowCart={showCardHandler}/>
        <main>
            <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
