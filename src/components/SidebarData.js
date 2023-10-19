
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faFile,faGroupArrowsRotate,faMessage} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt,faHireAHelper } from '@fortawesome/free-brands-svg-icons';

export const SidebarData = [
    {
        title: 'Home',
        path : '/',
        icon : <FontAwesomeIcon icon={faHouse} />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path : '/Reports',
        icon : <FontAwesomeIcon icon={faFile} />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path : '/product',
        icon : <FontAwesomeIcon icon={faProductHunt} />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path : '/team',
        icon : <FontAwesomeIcon icon={faGroupArrowsRotate} />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path : '/messages',
        icon : <FontAwesomeIcon icon={faMessage} />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path : '/help',
        icon : <FontAwesomeIcon icon={faHireAHelper} />,
        cName: 'nav-text'
    },

];