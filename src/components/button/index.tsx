
function Button(props: any) {
    const buttonType: 'OK' | 'Cancel' | 'Action' = props.type;
    const textValue: string = props.value;

    switch (buttonType) {
        case 'OK':
            return (
                <button className="button button-ok">{textValue}</button>
              );
            break;
        case 'Cancel':
            return (
                <button className="button button-cancel">{textValue}</button>
              );
            break;
        default:
            return (
                <button className="button button-action">{textValue}</button>
              );
            break;
    }
}

export default Button;
