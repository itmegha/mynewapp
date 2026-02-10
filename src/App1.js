import React from 'react';
import { personsData } from './Data';// Adjust path if needed

const App1 = () => {
  // Function to calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn't occurred yet this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div>
      <h2>Person Details</h2>
      <ul>
        {personsData.map((person, index) => (
          <li key={index}>
            <strong>Name:</strong> {person.name} <br />
            <strong>Date of Birth:</strong> {person.dateOfBirth} <br />
            <strong>Age:</strong> {calculateAge(person.dateOfBirth)} years
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;