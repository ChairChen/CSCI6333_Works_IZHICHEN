// Requirements:
// Create a Component which performs CRUD operations with the API with Axios:  API Endpoint: https://jsonplaceholder.typicode.com/

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../../context/ToastContext";
import axios from "axios";
import { Form, Button, Container, Table, Modal, Row, Col} from "react-bootstrap";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const CenteredModal = ({ show, onHide, user, onSave, mode, onDelete }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: user || {}
    });

    const ErrorMessage = ({name}) => (
        errors[name] && <p style={{ color: 'var(--bs-red)' }}>{errors[name].message}</p>
    );
    
    const onSubmitEdit = (data) => {
        onSave({ ...user, ...data });
        onHide();
    };

    const onSubmitDelete = () => {
        onDelete(user);
        onHide();
    };

    if (!user) return null;

    const isEditMode = mode === 'edit';
    const isDeleteMode = mode === 'delete';
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={isEditMode ? "lg" : "md"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {isEditMode ? `Edit User: ${user.name}` : `Confirm Deletion`}
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {isEditMode && (
                        <Form id="editUserForm" onSubmit={handleSubmit(onSubmitEdit)}>
                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formBasicName">
                                <Form.Label column sm={2}>Name</Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        type="text"
                                        name="name" 
                                        placeholder="Enter Name"
                                        {...register("name", {
                                            maxLength: { value: 100, message: "Name must be under 100 characters."}
                                            ,required: "Name is required for this form."
                                        })}
                                    />
                                    <ErrorMessage name="name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}  className="mb-3" controlId="formBasicEmail">
                                <Form.Label column sm={2}>Email</Form.Label>
                                <Col sm={8}>
                                    <Form.Control 
                                        type="text"
                                        name="email" 
                                        placeholder="Enter Email"
                                        {...register("email", {
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                                ,message: "Please enter a valid email address."
                                            }
                                            ,required: "Email is required for this form."
                                        })}
                                    />
                                    <ErrorMessage name="email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}  className="mb-3" controlId="formBasicPhone">
                                <Form.Label column sm={2}>Phone</Form.Label>
                                <Col sm={8}>
                                    <Form.Control 
                                        type="text"
                                        name="phone" 
                                        placeholder="Enter Phone"
                                        {...register("phone", {
                                            pattern: {
                                                value: /^[0-9\s\-()+]{7,20}$/,
                                                message: "Please enter a valid phone number.",
                                            }
                                            ,required: "Phone is required for this form."
                                        })}
                                    />
                                    <ErrorMessage name="phone" />
                                </Col>
                            </Form.Group>
                        </Form>
                    )}
                    {isDeleteMode && (
                        <div>
                            <p>Confirm to delete user <strong>{user.name}</strong> (ID: {user.id})?</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    {isEditMode && (
                        <Button 
                            title="Save changes to the user" 
                            variant="primary"
                            form="editUserForm" 
                            type="submit" 
                        >
                            Save Changes
                        </Button>
                    )}

                    {isDeleteMode && (
                        <Button
                            title="Delete the user"
                            variant="danger"
                            onClick={onSubmitDelete}>
                            Delete
                        </Button>
                    )}

                    <Button title="Cancel/Close Modal" variant="secondary" onClick={onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    );
};

export default function CRUD() {
    const { addToast } = useToast();
    const [users, setUsers] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [modalState, setModalState] = useState({ user: null, mode: null });

    const handleHideModal = () => { setModalState({ user: null, mode: null }); };
    const handleEditClick = (user) => { setModalState({ user, mode: 'edit' }); };
    const handleDeleteClick = (user) => { setModalState({ user, mode: 'delete' }); };

    const {
        register
        ,handleSubmit
        ,reset
        ,formState: { errors }
    } = useForm();

    const ErrorMessage = ({name}) => (
        errors[name] && <p style={{ color: 'var(--bs-red)' }}>{errors[name].message}</p>
    );
    
    const getUsers = useCallback(() => {
        axios.get(API_BASE_URL)
            .then((response) => setUsers(response.data.slice(0, 10)))
            .catch((error) => {
                console.error(error);
                addToast(`Error fetching users data: ${error.message}`, 'danger');
            });
    }, [setUsers, addToast]);

    const createUser = (user) => {
        setIsCreating(true);
        axios.post(API_BASE_URL, user)
            .then((response) => {
                const newUser = {
                    ...user
                    ,id: response.data.id
                };
                setUsers(prevUsers => [newUser, ...prevUsers]);
                console.log('User Created', response.data);
                addToast(`User ${newUser.name} (ID: ${newUser.id}) created successfully.`, 'success');
            })
            .catch((error) => {
                console.error(error);
                addToast(`Error creating user: ${error.message}`, 'danger');
            })
            .finally(() => { setIsCreating(false); });
    };

    const updateUser = (updatedUser) => {
        // only have 10 records from the API
        if (updatedUser.id > 10) {
            setUsers(prevUsers => (
                prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user)
            ));
            console.log(`Fake User (ID: ${updatedUser.id}) Updated locally.`);
            addToast(`Fake User ${updatedUser.name} (ID: ${updatedUser.id}) local updated successfully.`, 'warning');
            return null;
        }

        axios.put(`${API_BASE_URL}/${updatedUser.id}`, updatedUser)
            .then((response) => {
                setUsers(prevUsers => (
                    prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user)
                ));
                console.log('User Updated', response.data);
                addToast(`User ${updatedUser.name} (ID: ${updatedUser.id}) updated successfully.`, 'success');
            })
            .catch((error) => {
                console.error(error);
                addToast(`Error updating user ID ${updatedUser.id} : ${error.message}`, 'danger');
            }
            );
    };

    const deleteUser = (deletedUser) => {
        // use modal for delete confirmation here...
        axios.delete(`${API_BASE_URL}/${deletedUser.id}`)
            .then((response) => {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== deletedUser.id));
                console.log('User Deleted', response.data);
                addToast(`User ${deletedUser.name} (ID: ${deletedUser.id}) deleted successfully.`, 'success');
            })
            .catch((error) => {
                console.error(error);
                addToast(`Error deleting user ID ${deletedUser.id} : ${error.message}`, 'danger');
            });
    };

    const onSubmit = (data) => {
        // event.preventDefault();
        // console.log(event);
        createUser(data);
        reset();
    };

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    
    return (
        <Container>
            <h1 className="mb-4">CRUD Page (User JSONPlaceholder + Bootstrap)</h1>

            <div className="d-flex flex-column flex-lg-row gap-4">
                <div className="border rounded p-4 flex-fill">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="mb-4">Create New User</h3>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="formBasicName">
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    name="name" 
                                    placeholder="Enter Name"
                                    {...register("name", {
                                        maxLength: { value: 100, message: "Name must be under 100 characters."}
                                        ,required: "Name is required for this form."
                                    })}
                                />
                                <ErrorMessage name="name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}  className="mb-3" controlId="formBasicEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                    type="text"
                                    name="email" 
                                    placeholder="Enter Email"
                                    {...register("email", {
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                            ,message: "Please enter a valid email address."
                                        }
                                        ,required: "Email is required for this form."
                                    })}
                                />
                                <ErrorMessage name="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}  className="mb-3" controlId="formBasicPhone">
                            <Form.Label column sm={2}>Phone</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                    type="text"
                                    name="phone" 
                                    placeholder="Enter Phone"
                                    {...register("phone", {
                                        pattern: {
                                            value: /^[0-9\s\-()+]{7,20}$/,
                                            message: "Please enter a valid phone number.",
                                        }
                                        ,required: "Phone is required for this form."
                                    })}
                                />
                                <ErrorMessage name="phone" />
                            </Col>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" title="create user" disabled={isCreating}>
                            {isCreating ? 'Creating...' : 'Create User'}
                        </Button>
                    </Form>
                </div>

                <div className="border rounded p-4 flex-fill">
                    <Table striped bordered hover responsive>
                        <caption className="caption-top h3 mb-4">Users List</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(users.length === 0) ?
                            <tr>
                                <td colSpan={5} className="text-center">No Users Data</td>
                            </tr>
                            : users.map((value) => (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            title="Edit User"
                                            onClick={() => { handleEditClick(value); }}
                                            className="me-2"
                                        >Edit</Button>
                                        <Button
                                            size="sm"
                                            title="Delete User"
                                            variant="danger"
                                            onClick={() => { handleDeleteClick(value); }}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>

            <CenteredModal
                show={!!modalState.user}
                onHide={handleHideModal}
                user={modalState.user}
                mode={modalState.mode}
                onSave={updateUser}
                onDelete={deleteUser}
            />
        </Container>
    );
}
