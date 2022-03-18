import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://www.gazeteilksayfa.com/d/gallery/331_1.jpg"
        />
        <Dropdown pointing="top right" text="Mehmet">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item onClick={props.signedOut}  text="Çıkış Yap" icon="sign-out"/>

             
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
