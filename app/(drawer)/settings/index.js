import { Text, View } from "react-native";
import { Drawer } from "expo-router/drawer";

export default function SettingsPage() {
    return (
        <View>
            <Drawer.Screen options={{ title:"Settings"}} />
            <Text>Settings Page</Text>
        </View>
    );
}