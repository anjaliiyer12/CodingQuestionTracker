import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import screen1 from '../screen1';
import screen2 from '../screen2';

const screens = {
    screen1:{
        screen: screen1,
        navigationOptions: {
            headerShown: false,
          }
    },
    screen2:{
        screen:screen2,
        navigationOptions: {
            header: null,
          }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);