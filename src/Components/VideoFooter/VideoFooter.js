import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({chanel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{chanel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}

                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" alt="record"
            src="https://pngimg.com/uploads/vinyl/vinyl_PNG21.png"
            />

        </div>
    )
}

export default VideoFooter
