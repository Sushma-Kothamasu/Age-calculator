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
