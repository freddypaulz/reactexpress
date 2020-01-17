import React, { Component } from 'react';

export default class Customers extends Component {
   constructor() {
      super();
      this.state = {
         customers: []
      };
   }
   componentDidMount() {
      fetch('/api/customers')
         .then(res => res.json())
         .then(customers =>
            this.setState({ customers }, () => {
               console.log(customers);
            })
         );
   }
   render() {
      let id = 0;
      return (
         <h1>
            {this.state.customers.map(customers => (
               <li key={id++}>{customers.data}</li>
            ))}
         </h1>
      );
   }
}
