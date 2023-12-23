import { useEffect } from "react";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  // runs once on component/page load
  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/login");
    }
  }, []);
};