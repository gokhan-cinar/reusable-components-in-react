import React, {Component} from 'react';
import LoaderHOC from "./LoaderHOC";

class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <div>
                    {
                        this.props.users.map(user =>
                            <p key={user.id}>{user.name}</p>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default LoaderHOC(Users, 'users');
