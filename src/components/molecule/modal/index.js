import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import API from '../../../services/employee'

function ModalView ( { show, hide, empById, methodReq } ) {
    let [ fullname, setFullname ] = useState( "" );
    let [ email, setEmail ] = useState( "" );
    const [ closeModalAfterInsert, setCloseModalAfterInsert ] = useState( true );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( methodReq === "post" )
        {
            API.saveEmployee( fullname, email )
                .then( ( res ) => {
                    setCloseModalAfterInsert( false );
                    setFullname( "" );
                    setEmail( "" );
                    Swal.fire( {
                        icon: "success",
                        title: "Berhasil!",
                        text: "Data berhasil ditambahkan!",
                    } );
                } )
                .catch( ( err ) => {
                    console.log( err );
                } );
            window.location.reload();
        } else if ( methodReq === "put" )
        {

            API.updateEmployee( empById.data.id, fullname === "" ? empById.data.fullname : fullname, email === "" ? empById.data.email : email ).then( ( res ) => {


                setCloseModalAfterInsert( false );
                setFullname( "" );
                setEmail( "" );
                Swal.fire( {
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil diubah!",
                } );
            } );
            window.location.reload();
        }
    };

    return (
        <Modal show={ closeModalAfterInsert ? show : closeModalAfterInsert } onHide={ hide }>
            <Modal.Header closeButton>
                <Modal.Title>Manage data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { empById && empById ? (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert your fullname"
                                name="fullname"
                                defaultValue={ empById.data.fullname }
                                // value={empById.data.fullname}
                                onChange={ ( e ) => fullname == e.target.value ? setFullname( empById.data.fullname ) : setFullname( e.target.value ) }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insert your email"
                                name="email"
                                defaultValue={ empById.data.email }
                                // value={empById.data.email || ""}
                                onChange={ ( e ) => email == e.target.value ? setEmail( empById.data.email ) : setEmail( e.target.value ) }
                            />
                        </Form.Group>
                    </Form>
                ) : (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert your fullname"
                                name="fullname"
                                defaultValue={ fullname }
                                value={ fullname }
                                onChange={ ( e ) => fullname == e.target.value ? console.log( e.target.value ) : setFullname( e.target.value ) }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insert your email"
                                name="email"
                                value={ email }
                                onChange={ ( e ) => email == e.target.value ? setEmail( e.target.value ) : setEmail( e.target.value ) }
                            />
                        </Form.Group>
                    </Form>
                ) }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={ handleSubmit } type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalView;