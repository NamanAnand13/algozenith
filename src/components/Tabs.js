// Tabs.js
import React, { useState } from 'react';
import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Learning Material');

    return (
        <div className="tabsHeader">
            <div className="tabs">
                <button
                    className={activeTab === 'Mentor Sessions' ? 'active' : ''}
                    onClick={() => setActiveTab('Mentor Sessions')}
                >
                    <span className='logo'><HiOutlineCalendar /></span>
                    Mentor Sessions
                </button>
                <button
                    className={activeTab === 'Learning Material' ? 'active' : ''}
                    onClick={() => setActiveTab('Learning Material')}
                >
                    <span className='logo'><HiOutlineBriefcase /></span>
                    Learning Material
                </button>
            </div>
            <button className="howItWorks">
                <HiOutlineInformationCircle font-size='large' /> <span>How it works</span>
            </button>
        </div>
    );
};

export default Tabs;
