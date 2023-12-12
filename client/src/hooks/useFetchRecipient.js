import { useState, useCallback, useEffect } from "react";
import { baseUrl, getRequest } from "../utils/services";

const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members?.find((id) => {
    return id !== user?._id;
  });

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return setError(error);
      }

      setRecipientUser(response);
    };
    getUser();
  }, [recipientId]);

  // const fetchUser = useCallback(async () => {
  //   try {
  //     console.log("userData");
  //     const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
  //     if (response) {
  //       setRecipientUser(response);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   }
  // }, [recipientId]);

  // useEffect(() => {
  //   console.log("first");
  //   fetchUser();
  // }, [fetchUser]);
  return { recipientUser };
};

export default useFetchRecipientUser;
