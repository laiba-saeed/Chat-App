import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import { ChatContext } from "../context/chatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../components/chat/userChat";
import PotentialChats from "../components/chat/potentialChats";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);
  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="message-box flex-grow-0 pe-3" gap={3}>
            {/* {isUserChatsLoading && <p>Loading chats...</p>} */}
            {userChats?.map((chat, index) => {
              return (
                <div key={index}>
                  <UserChat chat={chat} user={user}></UserChat>
                </div>
              );
            })}
          </Stack>
          <p>Chatbox</p>
        </Stack>
      )}
    </Container>
  );
};

export default Chat;
