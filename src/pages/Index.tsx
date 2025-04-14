
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

// The main application is now the Dashboard page, so redirect to it
const Index = () => {
  useEffect(() => {
    document.title = "NutriQuest AI Hub";
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;
