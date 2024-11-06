// ChapterList.js
import React, { useState } from 'react';
import { HiOutlineClock } from "react-icons/hi";

const ChapterList = () => {
    const chapters = [
        { title: 'Chapter 1', duration: '05:00:00' },
        { title: 'Chapter 2' },
        { title: 'Chapter 3' },
        { title: 'Chapter 4' },
        { title: 'Chapter 5' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="chapter-list">
            {chapters.map((chapter, index) => (
                <div key={index}
                    className={`chapter-item ${index === activeIndex ? 'activeChapter' : ''}`}
                    onClick={() => setActiveIndex(index)}>
                    <span>{chapter.title}</span>
                    {chapter.duration && <span className='duration'><span><HiOutlineClock /></span> {chapter.duration}</span>}
                </div>
            ))}
        </div>
    );
};

export default ChapterList;
