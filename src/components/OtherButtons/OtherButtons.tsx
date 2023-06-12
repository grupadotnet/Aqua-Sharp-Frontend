import { faUpload} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



type Props = {
    variant: string;
  };
  
  const OtherButton = ({variant}:Props) => {
    if(variant=="upload")
    return(
        <div className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
       <FontAwesomeIcon icon={faUpload} />
       Importuj Konfigurację
        </div>
    );
    if(variant=="download")
    return(
        <div className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
       <FontAwesomeIcon icon={faDownload} />
       Pobierz Konfigurację
        </div>
    );
    
    
  };
  
  export default OtherButton;