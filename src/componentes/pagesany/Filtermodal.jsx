// CustomModal.js
import React from 'react';
import AllCollapseExample from '../Saidbar';

const CustomModal = ({ isOpen, closeModal }) => {
    return (
        <div className={`modalyangi ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                < div style={{borderBottom:"1px solid silver",width:"100%",paddingBottom:"20px"}} className="close" onClick={closeModal}> <div className='colla' style={{marginLeft:"413px",background:"white",boxShadow: "0px 4px 10px 0px #0000002B",padding:"5px 10px",borderRadius:"10px"}}>&times;</div> </ div>
                 <AllCollapseExample/>
            </div>
        </div>
    );
};

export default CustomModal;
