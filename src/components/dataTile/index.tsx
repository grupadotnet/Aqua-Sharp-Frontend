import './DataTile.scss';

type Props = {
  children: string;
  title?: string;
  theme?: 'blue' | 'green' | 'teal' | 'yellow';
};

const DataTile = ({ children, title, theme }: Props) => {
  const tileTheme = theme ?? 'blue';
  const defaultTitle = {
    blue: 'Aktualna temperatura',
    green: 'Aktualne ph wody',
    teal: 'Status światła',
    yellow: 'Status grzałki',
  };
  return (
    <div className={`tile tile-${tileTheme.toLowerCase()}`}>
      <p>{title ?? defaultTitle[tileTheme]}</p>
      <p>{children}</p>
    </div>
  );
};

export default DataTile;
