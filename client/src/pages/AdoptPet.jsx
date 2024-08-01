import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Auth from "../utils/auth";
import { ADD_PET } from "../utils/mutations";
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';

const AdoptPet = () => {
  const [formState, setFormState] = useState({
    petName: '',
    type: "", // Default to 'Dog' or any other default option
 
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);
  const navigate = useNavigate(); // Initialize navigate

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Convert string inputs to correct data types
    const variables = {
      petName: formState.petName,
      type: formState.type,
      isClean: formState.isClean === 'true',
      playedWith: formState.playedWith === 'true',
      hunger: parseInt(formState.hunger, 10),
    };

    try {
      const { data } = await addPet({
        variables,
      });
      Auth.login(data.addPet.token);
      navigate('/'); // Navigate back to the home page after successful adoption
    } catch (e) {
      console.error(e);
    }
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const combinedStyle = { height: '100vh', padding: '8em 0em' };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Grid textAlign='center' style={combinedStyle} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='paw' /> Adopt a Pet
            </Header>
            <Form size='large' onSubmit={handleFormSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='paw'
                  iconPosition='left'
                  placeholder='Pet Name'
                  name='petName'
                  value={formState.petName}
                  onChange={handleChange}
                />
                <Form.Field>
                  <select name='type' fluid icon="paw" iconPosition="left" placeholder="Pet Type" value={formState.type} onChange={handleChange}>
                    <option value='Dog'>Dog</option>
                    <option value='Cat'>Cat</option>
                    <option value='Bird'>Bird</option>
                    <option value='Fish'>Fish</option>
                    <option value='Rabbit'>Rabbit</option>
                    <option value='Hamster'>Hamster</option>
                  </select>
                </Form.Field>
                <Form.Input
                  fluid
                  icon='check'
                  iconPosition='left'
                  placeholder='Is Clean (true/false)'
                  name='isClean'
                  value={formState.isClean}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon='heart'
                  iconPosition='left'
                  placeholder='Played With (true/false)'
                  name='playedWith'
                  value={formState.playedWith}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon='food'
                  iconPosition='left'
                  placeholder='Hunger Level'
                  name='hunger'
                  value={formState.hunger}
                  onChange={handleChange}
                />
                <Button color='teal' fluid size='large' type='submit'>
                  Adopt
                </Button>
              </Segment>
            </Form>
            {error && <Message negative>{error.message}</Message>}
          </Grid.Column>
        </Grid>
      ) : (
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Message info style={{ textAlign: 'center' }}>
            Don't be gone too long, your pet needs you!!
          </Message>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='Large' href='/' >Go to Login Page</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )}
    </div>
  );
};

export default AdoptPet;
