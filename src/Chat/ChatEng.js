import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "bffb4349-5ed5-4f21-b42e-944d53984b1d";

const ChatEng = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="olashina"
      userSecret="quadri201"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default ChatEng;
