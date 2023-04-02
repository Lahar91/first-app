import axios from "axios";

axios.defaults.baseURL = "http://localhost:9999/api/";

const API = {
    getAllEmployee: () => {
        return axios.get( "employee", {
            method: "GET",
            dataType: "json",
        } );
    },

    getById: ( id ) => {
        return axios.get( "employee/" + id, {
            method: "GET",
            dataType: "json",
        } );
    },

    saveEmployee: ( fullname, email ) => {
        return axios.post( "employee", {
            fullname: fullname,
            email: email
        } );

    },
    updateEmployee: ( id, fullname, email ) => {
        return axios.put( "employee/" + id, {
            fullname: fullname,
            email: email
        } );
    },

    putEmployee: ( id, data ) => {
        return axios.put( "employee/" + id, data );
    },

    deleteEmployee: ( id ) => {
        return axios.delete( "employee/delete/" + id );
    }
}


export default API;