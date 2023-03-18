import './DataTile.scss';

type Props = {
  children: string;
  title?: string;
  theme: 'blue' | 'green' | 'teal' | 'yellow';
};

const DataTile = ({ children, title, theme }: Props) => {
  const tileTheme = theme;
  return (
    <div className={`tile tile-${tileTheme}`}>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default DataTile;
