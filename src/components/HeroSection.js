import React from 'react'
import Tabs from './Tabs';
import ChapterList from './ChapterList';
import Content from './Content';

const HeroSection = () => {
    return (
        <div className='HeroSection'>
            <Tabs></Tabs>
            <div className="learning-content">
                <ChapterList />
                <Content />
            </div>
        </div>
    )
}

export default HeroSection