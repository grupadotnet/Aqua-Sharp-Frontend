import React from 'react';

interface TileProps {
  title: string;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ title, children }) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Tile;
