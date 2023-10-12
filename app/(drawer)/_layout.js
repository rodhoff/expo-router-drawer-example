import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Layout() {
  return (
    <Drawer screenOptions={{  headerShow:false }}>
      
      <Drawer.Screen name="home" options={{
        drawerLabel: "Home",
        title: "Home",
      }}></Drawer.Screen>

      <Drawer.Screen name="settings" options={{
        drawerLabel: "Settings",
        title: "Settings",
      }}></Drawer.Screen>


    </Drawer>
  );
}