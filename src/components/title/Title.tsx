import React from 'react';

type Props = {
  title: React.ReactNode;
};

const Title = ({ title }: Props) => <h3 className="mb-4">{title}</h3>;

export default Title;
