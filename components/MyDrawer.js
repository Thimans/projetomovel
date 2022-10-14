import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";

const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.contDrawer}>

            <DrawerItemList {...props} style={styles.container} />
            <DrawerItem label="Sair" onPress={() => { props.navigation.pop() }} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 24,
    },
    contDrawer: {
        backgroundColor: '#C1E7E3'
    }

})

export default MyDrawer