import React, {useRef, useState} from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import './Video.css';

function Video({url, likes, shares, messages, chanel, description, song}) {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null)

    const handelVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play()
            setPlaying(true);
        }
        //if video is playing 
        //stops..

        //otherwise if  its not playing
        //playing
    }

    return (
        <div className="video">
            <video className="videoPlayer"
            onClick={handelVideoPress}
            ref={videoRef}
            loop
            src={url}>
            </video>

            <VideoFooter chanel={chanel} description={description}
            song={song}
            />
            <VideoSidebar likes={likes} shares={shares}
            messages={messages} />

        </div>
    )
}

export default Video
