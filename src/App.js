import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.compoent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
        {/* <Homepage /> */}
        {/* 
            component là component mà ta muốn render
            path là đường dẫn cần xác định để render component.
            exact là true hoặc false, path phải chính xác với chuỗi string.
          */}
      </div>
    );
  }
}

export default App;
