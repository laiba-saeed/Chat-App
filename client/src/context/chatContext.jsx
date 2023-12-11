import { createContext, useState, useEffect } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setuserChatsError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setuserChatsError(null);

        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

        setIsUserChatsLoading(false);

        if (response?.error) {
          return setuserChatsError(response);
        }

        setUserChats(response);
      }
    };

    getUserChats();
  }, [user?._id]);

  return (
    <ChatContext.Provider
      value={{ userChats, isUserChatsLoading, userChatsError }}
    >
      {children}
    </ChatContext.Provider>
  );
};