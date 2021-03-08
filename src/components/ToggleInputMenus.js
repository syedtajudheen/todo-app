
import React from "react";
import { BsPlus } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

export const ToggleInputMenus = ({ isSearchEnabled, onToggleMenu }) => (
  <div className='action-items'>
    <BsPlus size={24} color={!isSearchEnabled ? '#000' : '#A2A89C'} onClick={() => onToggleMenu(false)} />
    <MdSearch size={24} color={isSearchEnabled ? '#000' : '#A2A89C'} onClick={() => onToggleMenu(true)} />
    <div className='vertical-divder' />
    <span className='todo-counts'>3 items left</span>
  </div>
);
