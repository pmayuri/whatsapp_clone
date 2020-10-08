import { Avatar } from '@material-ui/core';
import React ,{useEffect,useState}from 'react';
import "./SidebarChat.css";

function SidebarChat({id,name, addNewChat}) {
    const [seed,setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

const createChat = () => {
   const roomName = prompt ("please enter name for chat room");

if (roomName) {
    // do some clever database stuff ...
}

};

    return !addNewChat ? (
        <div className="sidebarChat">
         <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
       <div className="sidebarChat__info">
           <h2>{ name}</h2>
           <p> last message...</p>
       </div>
       </div>
    ):(


        <div onClick={createChat}
        className="sidebar">
            <h2>Add new Chat</h2>
        </div>
        );
}

export default SidebarChat ;
