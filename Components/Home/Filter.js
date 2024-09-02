import React,{useEffect, useState} from 'react';
import FilterModal from "./FilterModal";
import {useDispatch} from 'react-redux';
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';
const Filter = () => {
    // state for controlllong modalvisibility
    const [isModalOpen, setIsModalOpen]=useState(false);
    //state of storing selected filters
    const [selectedFilters,setSelectedFilters]= useState({}); 
    const dispatch =useDispatch();
    useEffect(()=>{
      dispatch(propertyAction.updateSearchParams(selectedFilters));
      dispatch(getAllProperties());
    },[selectedFilters,dispatch]);

  //Funnction to handle opening the modal/popupWindow
const handleOpenModal = () => {
  setIsModalOpen(true); // sets isModalopen to true to open the modal
  
  };
  //Function gandle closing the modal
  const handleCloseModal = () => {
  setIsModalOpen(false); // sets isModalopen to false to close the moda
  };
  //Function to handle changes in filters
const handleFilterChange = (filterName, value) => {
  //Update the selected filters with the new values 
  setSelectedFilters((prevFilters) => ({
  ...prevFilters, [filterName]:value,
}));
  };
  return (
    <>  
    <span class="material-symbols-outlined filter" onClick={handleOpenModal}>tune</span>
    {isModalOpen  && (<FilterModal
     selectedFilters={selectedFilters}
     onFilterChange = {handleFilterChange}
     onClose = {handleCloseModal}/>
     )}
    </>
  );
};  

export default Filter;