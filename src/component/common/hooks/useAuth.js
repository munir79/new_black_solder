// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userInfo = localStorage.getItem("userData");
      if (userInfo) {
        setUser(JSON.parse(userInfo));
      }
    } catch (error) {
      localStorage.removeItem("userData");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, setUser, loading };
};
