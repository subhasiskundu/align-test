import React from 'react'
import ExpandCollapse from '../libs/ExpandCollapse';
import YoutubeVideo from './YoutubeVideo';

function VideoContainer() {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="video-container">
                    <YoutubeVideo />
                </div>
                <p className="tag">PRERECORDED</p>
                <h2>Innovating the GP new patient consultation</h2>
                <ExpandCollapse
                    wordLenth={Number(0)}
                    expandTitle="View transcript"
                    collapseTitle="View transcript"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofLorem ipsum dolor sit amet.." />
            </div>
            <div className="card">
                <div className="video-container">
                    <YoutubeVideo />
                </div>
                <p className="tag">PRERECORDED</p>
                <h2>Full arch scanning basis</h2>
                <ExpandCollapse
                    wordLenth={Number(0)}
                    expandTitle="View transcript"
                    collapseTitle="View transcript"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofLorem ipsum dolor sit amet.." />
            </div>
            <div className="card">
                <div className="video-container">
                    <YoutubeVideo />
                </div>
                <p className="tag">PRERECORDED</p>
                <h2>invisalign Outcome Simulator Aug. 11, 2020-12:30PM EDT</h2>
                <ExpandCollapse
                    wordLenth={Number(0)}
                    expandTitle="View transcript"
                    collapseTitle="View transcript"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofLorem ipsum dolor sit amet.." />
            </div>
        </div>
    )
}

export default VideoContainer;
