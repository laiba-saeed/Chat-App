import { useState, useCallback, useEffect } from "react";
import { baseUrl, getRequest } from "../utils/services";

const useFetchRecipientUser = (chat, user) => {
  const [userData, setUser] = useState(null);
  const recipientId = chat?.members.find((id) => {
    return id !== user?._id;
  });

  const fetchUser = useCallback(async () => {
    try {
      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
      if (response) {
        setUser(response);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, [recipientId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return userData;
};

export default useFetchRecipientUser;
