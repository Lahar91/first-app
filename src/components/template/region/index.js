import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button} from '../../atom/button';

function Region(props){
    let style = {
        "borderRadius" : "12%"
    }

    return (
        <div className="container">
        <h2>Welcome</h2>
        <h3>Region Page</h3>
        <Button mode="btn btn-primary" {...style} id="btnAdd">add Region</Button>
        <p>Data region </p>
        <table id="myTable" className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((data, index) => {
                return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>Edit | Delete</td>
                </tr>
                )
            })}
          </tbody>
        </table>
{/*         
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Region Form</h3>
        </div>
        <div className="modal-body">
          <form id="formSubmit">
            <div className="form-group" hidden>
              <label htmlfor="id" className="col-form-label">ID</label>
              <input type="text" className="form-control" id="id"></input>
            </div>
            <div className="form-group">
              <label for="name" className="col-form-label">Region Name</label>
              <input type="text" className="form-control" id="name" placeholder="Insert Region Name" required></input>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" id="submit">Save changes</button>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div> */}
      </div>
    )
}

export default Region;