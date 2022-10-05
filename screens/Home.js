import { Text, Image, StyleSheet, View, backgroundColor } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'
import MinhasVacinas from './MinhasVacinas'
import ProximasVacinas from './ProximasVacinas'
import Button from '../components/Button'
const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} >
            <Drawer.Screen style={styles.title} name="Minhas Vacinas" component={MinhasVacinas}
                options={{ headerStyle: { backgroundColor: '#C1E7E3' }, title: "Minhas Vacinas", drawerIcon: () => (<Image style={[styles.iconInj]} source={require('../imagens/injeção.png')} />) }}
            />
            <Drawer.Screen name="Próximas Vacinas" component={ProximasVacinas}
                options={{ drawerIcon: () => (<Image style={[styles.iconCalen]} source={require('../imagens/calen.png')} />) }}
            />
            
        </Drawer.Navigator>


    )
}
const styles = StyleSheet.create({
    iconInj: {
        width: 30,
        height: 30,
    },
    iconCalen: {
        width: 30,
        height: 30,
    },
    title: {
        color: '#419ED7'
    }

})
export default Home