import 'bootstrap';

export function Input ( props ) {
    let { id, name, mode, type, ...rest } = props;
    return (
        <input
            name={ name }
            id={ id }
            className={ mode }
            type={ type } value="" > { props.children } </input>

    )
}