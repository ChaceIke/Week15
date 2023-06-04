import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Customer from './Customer';
import AddCustomer from './add-customer';
// First I import react and axios
// Then I import my Customer and AddCustomer comonents
const CustomerList = () => {
    // Here I set the customers state to an empty array
    const [customers, setCustomers] = useState([]);

    // This is a function to add a customer to the database.
    // It uses axios to send a post request to reqes with the entry as the object we're posting.
    // If that works, it'll log out the data and add the customers to the customers state (which is an array)
    // If it doesn't work, it'll print the error and it won't add the customer to the list
    const handleCustomerSubmit = (customer) => {
        axios
            .post('https://reqres.in/api/users', customer)
            .then((response) => {
                console.log(response.data);
                setCustomers([...customers, customer]);
            })
            .catch((error) => {
                console.error('You got an error', error);
            }
        )
    }

    // This is a function to delete a customer from the database.
    // It uses axios to send a delete request with the customer itself.
    // It will log out success if it works.
    const handleDeleteCustomer = (customer) => {
        axios
        .delete(`https://reqres.in/api/users/${customer}`)
        .then((response) => {
            console.log('Success! You deleted a customer from the database!')
        })
        .catch((error) => {
            console.error('An error occurred again lol', error);
        });
    };

    // Upon startup, the useEffect function runs which uses axios to send a get request for every user on page 2 of the database.
    // If it works, it will call the setCustomers function with the new data.
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(response => {
        setCustomers(response.data.data)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

  }, []);

  // Next I return what I would like the app to look like.
  // After the jumbotron component, I create a table component.
  // The table body is composed of each customer component that is rendered out.
  // When I map through the customers array, I give each customer component the customer prop with (with the data), but also the handleDeleteCustomer function.
  // Finally I place the AddCustomer component at the body.
  return (
    <div className='container'>
        <div className='row'>
            <div className="jumbotron jumbotron-fluid text-white col-lg-3 col-md-4 col-sm-6 mb-4">
                <div>
                    <h1>Our Customers</h1>
                    <p>Here is a list of our valued customers</p>
                </div>
            </div>

            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody  className='border border-success'>
                    {customers.map((customer, index) => (
                        <Customer key={customer.id} customer={customer} index={index} onDelete={handleDeleteCustomer}/>
                    ))}
                </tbody>
            </table>
            <AddCustomer onSubmit={handleCustomerSubmit}/>
        </div>
    </div>
  );
};


export default CustomerList;