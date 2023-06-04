import { Dropdown } from 'react-bootstrap';

import CustomToggle from './Toggle';

type Props = {
  header: string;
  items: { label: string; value: string }[];
  onClick: (code: string) => void;
};

const EllipsisDropdown = ({ header, items, onClick }: Props) => (
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} />
    <Dropdown.Menu>
      <Dropdown.Header>{header}</Dropdown.Header>
      {items.map((item, i) => (
        <Dropdown.Item
          key={i}
          onClick={() => onClick(item.value)}
          className="text-first-upper"
        >
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default EllipsisDropdown;
