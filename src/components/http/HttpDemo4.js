import axios from "axios";
import React, { Component } from "react";

export default class HttpDemo4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  getUsers = async function(){
    try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({users: response.data})
    }catch(err){
        console.log(err);
    }
  }
  componentDidMount(){
    this.getUsers();
  }
  render() {
    return (
      <>
        <h3 className="text-center">Axios in Class Component</h3>

        <table className="table table-striped table-bordered table-hover">
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
