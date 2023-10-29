import logo from './logo.svg';
import './App.css';
import Agecaluclator from './Agecaluclator'; 
import Ageresult from './Ageresult';
import { useState } from 'react';
import {
  differenceInYears,
} from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);

    setAge({
      years: ageYears,
    });
  };

  return (
    <section className='old'>
      <div>
        <h1>
          Age Calculator
        </h1>
        <h3>Enter your date of birth</h3>
        <Agecaluclator calculateAge={calculateAge} />
        {age && <Ageresult age={age} />}
      </div>
    </section>
  );
}

export default App;
/*import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import Age from './Age';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
        <Form>
          Age Teller Application
          <h2>Input Your Birthday!</h2>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <Button className='button' onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {this.state.showStats ? (
            <div className='fade age-stats'>
              <Age date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

export default App;*/