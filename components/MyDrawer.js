import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";

const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.contDrawer}>
            <Text style={styles.menu}>BEM-VINDO</Text>
            <View style={styles.viewLinha} />
            <DrawerItemList {...props} style={styles.container} />
            <Image style={[styles.iconInj]} source={require('../imagens/sair.png')} />
            <DrawerItem label="Sair" labelStyle={{ textAlign: 'center', flexDirection: 'row', bottom: 10, right: 40 }} onPress={() => { props.navigation.pop() }} />

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
    },
    iconInj: {
        width: 30,
        height: 30,
        flexDirection: 'row',
        left: 20,
        top: 35
    },
    menu: {
        color: '#419ED7',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Averia Libre'
    },
    viewLinha: {
        borderWidth: 1,
        width:300,
        top: 5,
        borderColor: '#419ED7',
        marginBottom:15

    }

})

export default MyDrawer