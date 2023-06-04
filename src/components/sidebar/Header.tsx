type Props = {
  text: string;
};

const Header = ({ text }: Props) => (
  <div className="sidebar-heading">{text}</div>
);

export default Header;
