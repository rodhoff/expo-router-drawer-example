import { Drawer } from "expo-router/drawer"
import { Text, View } from "react-native";
export default function Page() {
    return (
        <View>
            <Drawer.Screen options={{ title:"Home"}} />
            <Text>Home Page</Text>
        </View>
    );
}