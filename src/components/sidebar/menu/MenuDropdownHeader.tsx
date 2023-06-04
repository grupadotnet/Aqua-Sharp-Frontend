type Props = {
  text: string;
};

const MenuDropdownHeader = ({ text }: Props) => (
  <h6 className="collapse-header">{text}</h6>
);

export default MenuDropdownHeader;
