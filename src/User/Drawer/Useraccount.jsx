// import React from 'react';
import Headerdealer from '../../component/Headerdealer';
import Header from '../../component/Header';
 
import React, { useState, useEffect } from 'react';
const Useraccount = () => {
  const [userDetails, setItems] = useState([]);
 
    useEffect(() => {
        fetch('https://django-djreact-app-d5af3d4e3559.herokuapp.com/GetUserDetails/')  // Adjust the URL if necessary
            .then(response => response.json())
            .then(data =>
              {
                console.log(data);
                setItems(data);
              }
            )
            .catch(error => console.error('Error fetching details:', error));
    }, []);
  return (
  <>
  <Header/>
  <div>
            <h1>Item Details</h1>
            {userDetails ? (
                <div style={styles.details}>
                    <p><strong>Name:</strong> {userDetails.User_Name}</p>
                    <p><strong>Email Address:</strong> {userDetails.Email}</p> {/* Assuming the email field exists */}
                    <p><strong>Contact Number:</strong> {userDetails.Phone_Number}</p> {/* Assuming the contact number field exists */}
                    <p><strong>Address:</strong> {userDetails.Address}</p> {/* Assuming the address field exists */}
                   
                    <p><strong>Nationality:</strong> {userDetails.Nationality}</p> {/* Assuming the nationality field exists */}
                </div>
            ) : (
                <p>No User Details found.</p>
            )}
        </div>
  </>
  );
};
 
 
const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  details: {
    marginBottom: '20px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px'
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white'
  }
};
 
export default Useraccount;