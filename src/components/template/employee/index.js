import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import ModalView from '../../molecule/modal';
import axios from "axios";
import { useState, useEffect } from "react";
import API from "../../../services/employee"
import Swal from "sweetalert2";


function Employee ( props ) {
  let style = {
    "borderRadius": "12px"
  }
  const [ alldataEmployee, setallEmployee ] = useState( null );
  const [ methodReq, setMethodReq ] = useState( "" );
  const [ empById, setEmployeeById ] = useState( null );

  const [ showModal, setShowModal ] = useState( false );
  const handleClose = () => { setShowModal( false ); window.location.reload(); };
  const handleShow = () => {
    setShowModal( true );
    setMethodReq( "post" );
  };
  useEffect( () => {
    getAllEmployee();
  }, [] );

  const getAllEmployee = async () => {
    const response = await API.getAllEmployee();
    setallEmployee( response.data );
  };
  const handleDelete = ( id ) => {
    Swal.fire( {
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    } ).then( ( result ) => {
      if ( result.isConfirmed )
      {
        API.deleteEmployee( id ).then( ( res ) => {
          Swal.fire( {
            icon: "success",
            title: "Berhasil!",
            text: "Data berhasil dihapus!",
          } ).then( () => {
            window.location.reload();
          } )
        } );
      }
    } );
  };


  return (
    <div className="container">
      <h2>Welcome</h2>
      <h3>Employee Page</h3>
      <Button className="btn btn-success" { ...style } onClick={ handleShow }>
        Add new data
      </Button>
      <p>Data Employee </p>
      <table id="myTable" className="display table md-data-table">
        <thead>
          <tr>
            <th>Nomor</th>
            <th hidden>ID</th>
            <th>fullname</th>
            <th>email</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          { alldataEmployee &&
            alldataEmployee.data.map( ( item, index ) => {
              return (
                <tr key={ index }>
                  <td>{ index + 1 }</td>
                  <td hidden>{ item.id }</td>
                  <td>{ item.fullname }</td>
                  <td>{ item.email }</td>
                  <td>
                    <Button
                      type='button'
                      className="btn btn-primary"
                      onClick={ () => {
                        setShowModal( true );
                        setMethodReq( "put" );
                        axios
                          .get( `http://localhost:9999/api/employee/${ item.id }`, {
                            responseType: "json",
                          } )
                          .then( ( res ) => {
                            setEmployeeById( res.data );
                          } )
                          .catch( ( err ) => {
                            console.log( err );
                          } );
                      } }
                    >
                      Edit
                    </Button>
                    <Button className="btn btn-danger" onClick={ () => handleDelete( item.id ) }>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            } ) }
        </tbody>
      </table>
      <ModalView
        show={ showModal }
        hide={ handleClose }
        empById={ empById }
        methodReq={ methodReq }
      />
    </div>
  )
}

export default Employee;