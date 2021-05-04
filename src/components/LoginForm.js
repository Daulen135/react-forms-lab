import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
username: '',
password: ''

    };
  }

handlePassword = event => {
  this.setState ({
    password: event.target.value
  })
}

handleUserName = event => {
  this.setState ({
    username: event.target.value
  })
}

handleClick = event =>{
  event.preventDefault()
  if (this.state.username.length&& this.state.password.length >= 1){ 
  this.props.handleLogin(this.state)
  }
}






  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value ={this.state.username} onChange={this.handleUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange ={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
