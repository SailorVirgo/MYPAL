import React , { useState } from 'react'
import { Header, Icon, HeaderContent, Menu, Container, Dropdown } from 'semantic-ui-react'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';


const mainHeader = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  const goToHome = (event) => {
    event.preventDefault();
    navigate('/Home'); // Ensure the correct route for the AdoptPet component
  };
  const goToAdoptPet = (event) => {
    event.preventDefault();
    navigate('/AdoptPet'); // Ensure the correct route for the AdoptPet component
  };
  const goToPetCare = (event) => {
    event.preventDefault();
    navigate('/PetCare'); // Ensure the correct route for the AdoptPet component
  };
  const goToPetStatus = (event) => {
    event.preventDefault();
    navigate('/PetStatus'); // Ensure the correct route for the AdoptPet component
  };
  const goToAchievements = (event) => {
    event.preventDefault();
    navigate('/Achievements'); // Ensure the correct route for the AdoptPet component
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu color='teal' fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Icon name='paw' />
              Pet Adoption Application
            </Menu.Item>
            <Menu.Item as='a' onClick={goToHome}>Home</Menu.Item>
            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={goToAdoptPet}>Adopt a Pet</Dropdown.Item>
                <Dropdown.Item onClick={goToPetCare}>Pet Care</Dropdown.Item>
                <Dropdown.Item onClick={goToPetStatus}>Pet Status</Dropdown.Item>
                <Dropdown.Item onClick={goToAchievements}>Achievements</Dropdown.Item>
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
