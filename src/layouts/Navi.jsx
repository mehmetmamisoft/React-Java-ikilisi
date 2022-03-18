import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  //baştaki state yanındaki state değiştiren method
  //destructed yapıyık
  //setis state değiştircez isauthenticated değişsin
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  //handle çıkış yap oluyor burda
  //state navide kullan ama altcomponentden çağırmak lazum fonk ile
  function handleSignOut() {
    setIsAuthenticated(false)
  }

   //handle giriş yap oluyor burda
  //state navide kullan ama altcomponentden çağırmak lazum fonk ile
  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" active />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />             
            {isAuthenticated ? <SignedIn signedOut={handleSignOut} bisey="1" />
             : <SignedOut signedIn={handleSignIn} ikincibisey="2" />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
