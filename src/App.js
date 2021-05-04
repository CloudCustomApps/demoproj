import React from 'react';
import './App.css';
import {CustomCard, StickyFooter, SignIn, CustomModal} from "../node_modules/designops/dist/index.js";
import {IMAGE} from './Constants';
import { useState } from 'react';
import {TextField} from '@material-ui/core';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalHeader, setModalHeader] = useState('Heading');
  const [subHeader, setSubHeader] = useState('This is a media card. You can use this section to describe the content.');
  const [hideCancel, sethideCancel] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const handleSuccess=()=>setOpenModal(false);
  const handleClose=()=>setOpenModal(false);
  const viewAction = (header, subHeader) => {
    setModalHeader(header);
    setSubHeader(subHeader);
    sethideCancel(true);
    setOpenModal(true);
    setIsEdit(false);
  };

  const editAction = () => {
    setOpenModal(true);
    setIsEdit(true);
    sethideCancel(false);
  }
  const headingHandler=(e)=>{
    const {value} = e.target
    setModalHeader(value)
  }
  
  const cardRows = (init, total) => {
    let rows = [];
    for(let i=init; i<total; i++){
      rows.push(
      <CustomCard 
        viewAction={viewAction} 
        editAction={editAction}
        cardHeading={`Heading ${i}`}
        cardSubHeading={`I am a Card ${i}`}
        img={IMAGE}
        cardClasses='cardClass'/>);
    }
    return rows;
  }

  return (
    <div>
      {/* component 1 */}
      <div className='container'>    
        {cardRows(1,6)}
      </div>   
      {/* component 2*/}
       <CustomModal 
        isOpen={openModal} 
        size="sm" 
        handleSuccess={handleSuccess} 
        handleClose={handleClose}
        hideLetfBtn={hideCancel}
        title={modalHeader}>
        <p>{subHeader}</p>
        {isEdit && <form>
          <TextField id="outlined-basic" label="Heading" variant="outlined" type="text" fullWidth onChange={headingHandler}/>
          <TextField id="outlined-basic" label="SubHeading" variant="outlined" type="text" fullWidth/>
        </form>}
      </CustomModal>

      {/* component 3*/}
      <SignIn/>

      {/* component 4 */}
      <div className="bottom">
        <StickyFooter copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
          footerText='Creative agency making happier humans.' position={'left'}/>
      </div>
      

    </div>
  );
}

export default App;
