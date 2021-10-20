import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {

    state={
        pageNumber:1,
    };

    handleNext=()=>{
        this.setState.pageNumber+1;
    }
    handlePrev=()=>{
        this.setState.pageNumber-1;
    }
    render() {
        return (
            <div>
                <Pagination userPerPage={3}
                userCount={this.props.users.length}
                handleNext={}
                handlePrev={}
                pageNumber={this.state.pageNumber}/>
                
                <ul className="users">
                    {this.props.users.map(user=>(
                        <User key={user.id} name={user.name} age={user.age}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;