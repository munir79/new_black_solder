import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return user;
}
