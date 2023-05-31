import React from 'react';
import { DropdownToggleProps } from 'react-bootstrap/esm/DropdownToggle';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default CustomToggle;
