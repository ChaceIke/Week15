import React from 'react';

const Customer = ({ customer, onDelete }) => {

  return (
    <tr key={customer.id}>
      <th scope="row">{customer.id}</th>
      <td>{customer.first_name}</td>
      <td>{customer.last_name}</td>
      <td>{customer.email}</td>
      <td><button className='btn btn-danger' onClick={() => onDelete(customer)}>Delete</button></td>
    </tr>
    )
}

export default Customer;