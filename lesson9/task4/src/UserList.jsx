import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const users = this.props.users;
    const resultUsersList = (
      this.state.value === ''
        ? users
        : users.filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()))
    ).map(user => <User key={user.id} name={user.name} age={user.age} />);
    return (
      <>
        <Filter
          filterText={this.state.value}
          count={resultUsersList.length}
          onChange={this.handleChange}
        />
        <ul className="users">{resultUsersList}</ul>
      </>
    );
  }
}

export default UsersList;