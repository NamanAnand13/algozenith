import React from 'react'
import PartItem from './PartItem';
import { HiOutlinePlay } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

const Content = () => {
    return (
        <div className="content-body">
            <div className="content-list">
                <PartItem
                    partNumber="1"
                    title="Lorem Ipsum Dolor Sit Amet"
                    time="02:00:00"
                    difficulty="Medium"
                    resources="5"
                    completion={45}
                    items={[
                        { icon: <HiOutlinePlay />, title: "Video 1", duration: "10:00" },
                        { icon: <HiOutlineQuestionMarkCircle />, title: "Article 1", duration: "10:00" },
                        { icon: <HiOutlineQuestionMarkCircle />, title: "Quiz 1", duration: "10:00" },
                        { icon: <HiOutlineCode />, title: "Coding Exercise 1", duration: "10:00" },
                        { icon: <HiOutlineDocumentDuplicate />, title: "Combined Resource 1", duration: "10:00" },
                    ]}
                />
                <PartItem
                    partNumber="2"
                    title="Lorem Ipsum Dolor Sit Amet"
                    time="02:00:00"
                    difficulty="Medium"
                    resources="12"
                    completion={20}
                    items={[]}
                />
                <PartItem
                    partNumber="3"
                    title="Lorem Ipsum Dolor Sit Amet"
                    time="02:00:00"
                    difficulty="Medium"
                    resources="12"
                    completion={0}
                    items={[]}
                />
            </div>
        </div>
    );
};

export default Content