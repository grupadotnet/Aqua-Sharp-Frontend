import './Button.scss';

interface IButton {
  type: 'OK' | 'Cancel' | 'Action',
  children?: string,
}

function Button(props: IButton) {
    switch (props.type) {
        case 'OK':
            return (
                <button className="button button-ok">{props.children ?? 'Zatwierdź'}</button>
              );
            break;
        case 'Cancel':
            return (
                <button className="button button-cancel">{props.children ?? 'Anuluj'}</button>
              );
            break;
        default:
            return (
                <button className="button button-action">{props.children ?? ''}</button>
              );
            break;
    }
}

export default Button;
