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
  return (
    <div>
      {/* component 1 */}
      <div class='container'>
      <CustomCard 
        viewAction={viewAction} 
        editAction={editAction}
        cardHeading='Heading 1'
        cardSubHeading='I am a Card 1'
        img={IMAGE}
        cardClasses='cardClass'/>
      <CustomCard 
        viewAction={viewAction} 
        cardHeading='Heading 2'
        cardSubHeading='I am a Card 2'
        img={IMAGE}
        cardClasses='cardClass'/>
        <CustomCard 
        viewAction={viewAction} 
        cardHeading='Heading 1'
        cardSubHeading='I am a Card 1'
        img={IMAGE}
        cardClasses='cardClass'/>
        <CustomCard 
        viewAction={viewAction} 
        cardHeading='Heading 1'
        cardSubHeading='I am a Card 1'
        img={IMAGE}
        cardClasses='cardClass'/>
        <CustomCard 
        viewAction={viewAction} 
        cardHeading='Heading 1'
        cardSubHeading='I am a Card 1'
        img={IMAGE}
        cardClasses='cardClass'/>
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
      <StickyFooter/>

    </div>
  );
}

export default App;
