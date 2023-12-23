import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = JSON.parse(sessionStorage.getItem("authUser"));
    console.log("authUser ", authUser);
    if (authUser?.email) {
      setUser(authUser);
    }
  }, []);

  return { user, setUser };
}
