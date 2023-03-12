import './DataTile.scss';

interface IDataTile {
  children?: string;
  title?: string;
  theme?: 'blue' | 'green' | 'teal' | 'yellow';
}

const DataTile = (props: IDataTile) => {
  const tileTheme = props.theme ?? 'blue';
  const defaultTitle = {
    blue: 'Aktualna temperatura',
    green: 'Aktualne ph wody',
    teal: 'Status światła',
    yellow: 'Status grzałki',
  };
  return (
    <div className='tile-border'>
      <div className={`tile tile-${tileTheme.toLowerCase()}`}>
        <p>{props.title ?? defaultTitle[tileTheme]}</p>
        <p>{props.children ?? '???'}</p>
      </div>
    </div>
    
  );
};

export default DataTile;
