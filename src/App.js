import React from 'react';
import './App.css';
import {CustomCard, StickyFooter, SignIn, CustomModal} from "../node_modules/designops/dist/index.js";
import "../node_modules/designops/dist/designops.css";
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
    <div className="bg-gray-200">
      <div className="wrapper">

      {/* component 1 */}
        <h1 className="text-primary">I am h1 component</h1>
        <h2 className="text-red-400">I am h2 component</h2>
        <h3 className="text-blue-500">I am h3 component</h3>
        <h4 className="text-green-600"> I am h4 component</h4>
        <h5 className="text-indigo-700">I am h5 component</h5>
        <h6 className="text-yellow-900">I am h6 component</h6>
      
      {/* component 2 */}
        <div className='container'>    
          {cardRows(1,6)}
        </div>

      {/* component 3 */}
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

      {/* component 4 */}
        <SignIn/>

        <div className="seperator"></div>
      {/* component 5 */}
        <div className="bottom bg-primary">
          {/* <StickyFooter copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
            footerText='Creative agency making happier humans.' position={'left'}/> */}
            <StickyFooter copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
            position={'left'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
