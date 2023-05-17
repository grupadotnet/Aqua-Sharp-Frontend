import { Button as ButtonComponent } from 'react-bootstrap';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = React.ComponentProps<typeof ButtonComponent> & {
  variant: Theme;
  icon: IconProp;
};

const CircularButton = ({ icon, variant }: Props) => (
  <ButtonComponent variant={variant} className="btn-circle">
    <FontAwesomeIcon icon={icon} />
  </ButtonComponent>
);

export default CircularButton;
