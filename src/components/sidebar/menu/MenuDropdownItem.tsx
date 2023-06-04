type Props = {
  text: string;
  href: string;
};

const MenuDropdownItem = ({ text, href }: Props) => (
  <a className="collapse-item text-first-upper" href={href}>
    {text}
  </a>
);

export default MenuDropdownItem;
