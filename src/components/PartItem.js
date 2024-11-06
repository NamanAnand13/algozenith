import React from "react";
import { HiOutlineChevronDown, HiOutlineClock } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";

const PartItem = ({ partNumber, title, time, difficulty, resources, completion, items }) => {
    return (
        <div className="part-item">
            <div className="part-item-container">
                <div className="part-item-header">
                    <div className="part-title"><span className="part-number">PART {partNumber}</span> <span>{title}</span></div>
                    <div className="info">
                        <span className="info-container"><span className="infoIcon"><HiOutlineClock /></span> {time}</span>
                        <span className="info-container"><span className="infoIcon"><HiOutlineChartBar /></span> {difficulty}</span>
                        <span className="info-container"><span className="infoIcon"><HiOutlineDocumentDuplicate /></span> {resources}</span>
                        <span className="info-container arrow">{partNumber == 1 ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span>
                    </div>
                </div>
                <div className="completion">{completion}% Completed</div>
            </div>

            <div className="progress-indicator">
                <div className="progress-bar" style={{ width: `${completion}%` }}></div>
            </div>

            <ul className="part-content-list">
                {items.map((item, index) => (
                    <li key={index} className="part-content-item">
                        <div className="icon">{item.icon} <span className="item-title">{item.title}</span></div>
                        <span className="item-duration"><HiOutlineClock />{item.duration}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartItem;