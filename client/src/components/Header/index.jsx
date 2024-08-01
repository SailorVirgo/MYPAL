
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Icon,
  HeaderContent,
  Menu,
  Container,
  Dropdown,
} from "semantic-ui-react";
import Auth from "../../utils/auth";


const mainHeader = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const goToAdoptPet = (event) => {
    event.preventDefault();
    navigate('/AdoptPet'); // Ensure the correct route for the AdoptPet component
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu color="teal" fixed="top" inverted>
          <Container>

            <Menu.Item as='a' header>
              <Icon name='paw' />

              Pet Adoption Application
            </Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>
            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/adoptpet">Adopt a Pet</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/petcare">Pet Care</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/petstatus">Pet Status</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/achievements">Achievements</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      ) : (

        <Menu color='teal' fixed='top' inverted>
       <Container>
       <Menu.Item as='a' header>
       <Icon name='paw'/>
        Pet Adoption Application
       </Menu.Item>           
       </Container>
       </Menu>
       
       

      )}
    </div>
  );
};
export default mainHeader;
