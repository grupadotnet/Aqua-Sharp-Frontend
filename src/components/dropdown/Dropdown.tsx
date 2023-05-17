import { Dropdown as DropdownComponent, DropdownButton } from 'react-bootstrap';

type Props = {
  title: string;
  items: { label: string; value: string }[];
  onClick: (code: string) => void;
};

const Dropdown = ({ items, title, onClick }: Props) => (
  <DropdownButton title={title}>
    {items.map((item, i) => (
      <DropdownComponent.Item key={i} onClick={() => onClick(item.value)}>
        {item.label}
      </DropdownComponent.Item>
    ))}
  </DropdownButton>
);

export default Dropdown;
