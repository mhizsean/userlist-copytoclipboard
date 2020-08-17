import React, { Component } from 'react';
import loader from '../assets/loader.gif'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userList: [],
          loading: false
        }
        this.getUserList = this.getUserList.bind(this);
      }
       
      getUserList() {
        this.setState({ loading: true });
        fetch('https://reqres.in/api/users')
          .then(res => res.json())
          .then(res => {
            setTimeout(() => {
              this.setState({ loading: false, userList: res.data });
            }, 2000);
          })
      }
      
    render(){
        const { userList, loading } = this.state;
    
        return (
          <div className="container App">
            <h4 className="d-inline-block">Check List</h4>
          <button className="btn btn-info float-right" onClick={this.getUserList} disabled={loading}>{loading ? 'Loading...' : 'Get User List'}</button>
          <div className="clearfix"></div>
     
          <table class="table mt-3">
            <thead class="thead-dark">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </thead>
            <tbody>
              {userList.map(x => <tr>
                <td>{x.first_name}</td>
                <td>{x.last_name}</td>
                <td>{x.email}</td>
                <td><img src={x.avatar} width="50" height="50" /></td>
              </tr>)}
              {userList.length == 0 && <tr>
                <td className="text-center" colSpan="4">
                  {/* <b>Loading...</b> */}
                  <img src={loader} alt="" />
                </td>
              </tr>}
            </tbody>
          </table>
     
          </div>
        );
      }
}

export default User
