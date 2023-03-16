import './DataTile.scss';

type Props = {
  children: string;
  title?: string;
  theme?: 'blue' | 'green' | 'teal' | 'yellow';
};

const DataTile = (props: Props) => {
  const tileTheme = props.theme ?? 'blue';
  const defaultTitle = {
    blue: 'Aktualna temperatura',
    green: 'Aktualne ph wody',
    teal: 'Status światła',
    yellow: 'Status grzałki',
  };
  return (
    <div className={`tile tile-${tileTheme.toLowerCase()}`}>
      <p>{props.title ?? defaultTitle[tileTheme]}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default DataTile;
