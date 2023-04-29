import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




  
  const UploadButton = () => (
    <div className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
       <FontAwesomeIcon icon={faDownload} />
       Pobierz Konfigurację
    </div>
    
  );
  
  export default UploadButton;
  