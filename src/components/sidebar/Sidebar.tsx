import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {
  ChevronLeft,
  ChevronRight,
  GearFill,
  FolderFill,
  PlusLg,
  BootstrapFill
} from 'react-bootstrap-icons';
import './style.scss';
import { Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className={`column-1 ${isOpen ? "column-1--open" : ""}`}>
      <div className='logo'>
        <p className='aqua text-center text-uppercase text-light pt-3 bold'>aquasharp</p>
        <hr className="bg-light m-2" />
        <p className='interface text-justify ml-2 text-light mb-0 pb-0 pt-1 text-uppercase'>interfejs</p>
      </div>
       <div className='menu'>
    <Accordion className="options p-2 pt-0" defaultActiveKey={'0'} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='header-1'><GearFill  className='set-icon align-center mr-3 '/><p className='text-1'>Ustawienia</p></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='header-2'><FolderFill  className='file-icon align-center mr-3 '/><p className='text-1'>Moje akwaria</p></Accordion.Header>
        <Accordion.Body className='bg-light base-size square bg-primary rounded text-center p-1 pt-2'>
          <Nav.Link eventKey="link-1" className='link-text text-dark ml-.5 text-justify'>Akwarium 1</Nav.Link>
          <Nav.Link eventKey="link-2" className='link-text text-dark ml-.5 text-justify'>Akwarium 2</Nav.Link>
          <Nav.Link eventKey="link-3" className='link-text text-dark ml-.5 text-justify'>Akwarium 3</Nav.Link>
          <Nav.Link eventKey="link-4" className='link-text text-dark ml-.5 text-justify'><PlusLg size={15} className='set-icon align-center mr-1 mb-1'/>Dodaj akwarium</Nav.Link>
        </Accordion.Body>
      </Accordion.Item>
       </Accordion>   
       </div>
       <div className='text-center'>
        <hr className="bg-light m-2" />
          <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleLeft} /> 
          </div>  
          </div> 
       </div>
  );
};

export default Sidebar;
