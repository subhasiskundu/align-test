import React, { useState } from 'react'

function YoutubeVideo() {
    const [play, setPlay] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    const url = play
        ? `https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1`
        : `https://www.youtube.com/embed/EngW7tLk6R8`;

    return (
        <>
            {play === true && <div className="video-container">
                <iframe
                    width="100%"
                    height="100%"
                    src={url}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            }
            {isOverlay === true && <div className="videooverlay">
                <button className="playButton" onClick={() => { setPlay(true); setIsOverlay(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512"><title>ionicons-v5-c</title><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" /></svg>
                </button>
            </div>
            }
        </>
    )
}

export default YoutubeVideo
