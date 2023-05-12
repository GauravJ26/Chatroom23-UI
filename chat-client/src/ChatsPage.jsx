import "./App.css";
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'; 

const ChatsPage = (props) => {

 const chatProps = useMultiChatLogic( 
   '9931d631-00b2-49b4-940f-22f43235d8bf',
    props.user.username,
    props.user.secret
 );
  return <div className="chatbox">
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} 
    style={{height:'100%'}} />
    </div>
};
  export default ChatsPage;


  