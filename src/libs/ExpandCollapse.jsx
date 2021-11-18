import React, { useState } from 'react';

function ExpandCollapse(props) {
    const { text, expandTitle, collapseTitle } = props;

    const [showMore, setShowMore] = useState(false)

    if (text && text.length !== null && text.length <= props.wordLenth) return props.text;
    if (text && text.length && text.length !== null && text.length > props.wordLenth && showMore) {
        return (
            <div className="details-container">
                <button className="expand-collapse-btn" onClick={() => setShowMore(false)}>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                    </span>
                    {expandTitle}
                </button>
               <div className="text-container">{text}</div>
            </div>
        );
    }
    if (text && text.length !== null && text.length > props.wordLenth) {
        return (
            <div className="details-container">
                <button className="expand-collapse-btn" onClick={() => setShowMore(true)}>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                    </span>

                    {collapseTitle}
                </button>
            </div>
        );
    }
}

export default ExpandCollapse
