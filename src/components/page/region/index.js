import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Region from '../../template/region';
import {data} from "../../../statis/data.js";


function RegionPage(){
    return (
        <Region data={data}/>
    )
}

export default RegionPage;