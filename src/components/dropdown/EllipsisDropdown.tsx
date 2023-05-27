import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownToggleProps } from 'react-bootstrap/esm/DropdownToggle';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  header: string;
  items: { label: string; value: string }[];
  onClick: (code: string) => void;
};

type CustomToggleProps = DropdownToggleProps & {
  onClick: () => void;
};

const CustomToggle = React.forwardRef<HTMLButtonElement, CustomToggleProps>(
  ({ onClick }: CustomToggleProps, ref) => (
    <button
      className="border-0 bg-transparent"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </button>
  )
);
CustomToggle.displayName = 'CustomToggle';

const EllipsisDropdown = ({ header, items, onClick }: Props) => (
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} />
    <Dropdown.Menu>
      <Dropdown.Header>{header}</Dropdown.Header>
      {items.map((item, i) => (
        <Dropdown.Item key={i} onClick={() => onClick(item.value)}>
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default EllipsisDropdown;
