import { createStackNavigator, createAppContainer } from 'react-navigation';
import AllDecks from './components/AllDecks'
import CardDetail from './components/CardDetail'



const AppNavigator = createStackNavigator({
  Home: {
    screen: AllDecks
  },
  Detail: {
  	screen: CardDetail
  }
});

//export default createAppContainer(AppNavigator);