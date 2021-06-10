import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

function UserList() {

    const { users, removeUser } = useContext(GlobalContext);

    return (
        <ListGroup className="mt-3">
            {users.length > 0 ? (
                <>
                    {users.map(user => (
                        <ListGroupItem className="d-flex" key={user.id}>
                            <strong>{user.name}</strong>
                            <div className="ml-auto userblock">
                                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
                                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h4 className="text-center">No user</h4>
            )}
        </ListGroup>
    )
}

export default UserList
