import { Slot, router } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useContext } from "react";

const NavigationWrapper = ({ children }) => {
  const { userId, userToken } = useContext(AuthContext);

  //useEffect
  // connecté ? oui => router.navigate("/pageA")
  // non ? => router.navigate("/connect")
  useEffect(() => {
    if (userId && userToken) {
      router.navigate("/pageA");
    } else {
      router.navigate("/connect");
    }
  }, [userId, userToken]);

  return children;
};

export default RootLayout = () => {
  return (
    <AuthProvider>
      <NavigationWrapper>
        <Slot />
      </NavigationWrapper>
    </AuthProvider>
  );
};
