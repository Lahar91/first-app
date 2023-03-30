import 'bootstrap/dist/css/bootstrap.min.css';

export function Button(props) {
    let {mode, id, onclick, disable, ...rest} = props; // destraktering
    return(
        <button 
        type="button" 
        className={mode} 
        id={id}
        onClick={onclick}
        style={{...rest}}
        disabled={disable}
        // data-bs-toggle="modal" 
        // data-bs-target="#exampleModal"
        >
            {props.children}
        </button>
    )
}