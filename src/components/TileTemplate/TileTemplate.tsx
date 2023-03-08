import React from 'react';
import './TileTemplate.scss';

interface TileTemplateProps {
  title: string;
  children: React.ReactNode;
}

const TileTemplate: React.FC<TileTemplateProps> = (props) => {
  const { title, children } = props;

  return (
    <div className="tile-template">
      <div className="tile-template-header">{title}</div>
      <div className="tile-template-body">{children}</div>
    </div>
  );
};

export default TileTemplate;