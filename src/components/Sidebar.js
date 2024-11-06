import React from 'react';
import logo from '../assets/images/logo.png';
import { IoMenu } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            
            <div className='logoContainer'><span><IoMenu /></span> <img src={logo} alt = "AlgoZenith"></img> </div>
            <nav>
                <ul class = "sideBarList">
                    <li><span className='sidebarLogo'><HiOutlineViewGrid /></span> <span>Dashboard</span></li>
                    <li><span className='sidebarLogo'><HiOutlineLightBulb /></span> <span>Learn</span></li>
                    <li><span className='sidebarLogo'><HiOutlineUserGroup /></span> <span>Forums</span></li>
                    <li className="active"><span className='sidebarLogo'><HiOutlineClipboard /></span> <span>Upskill</span></li>
                    <li><span className='sidebarLogo'><HiOutlineChartBar /></span> <span>Contest</span></li>
                    <li><span className='sidebarLogo'><HiOutlineStar /></span> <span>Leaderboard</span></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
