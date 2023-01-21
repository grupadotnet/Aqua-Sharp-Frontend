import './Button.scss';

interface IButton {
  type?: 'OK' | 'Cancel' | 'Action';
  children?: string;
}

export const Button = (props: IButton) => {
  const buttonType = props.type ?? 'Action';
  const defaultChildren = {
    OK: 'Zatwierdź',
    Cancel: 'Anuluj',
    Action: '',
  };
  return (
    <button className={`button button-${buttonType.toLowerCase()}`}>
      {props.children ?? defaultChildren[buttonType]}
    </button>
  );
};

export default Button;
