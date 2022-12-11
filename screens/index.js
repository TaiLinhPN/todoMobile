import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import DeletedScreen from './DeletedScreen';

import HomeScreem from './HomeScreem';

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => alert('Todo App is an note application :v')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () =>{
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="ToDo App" component={HomeScreem} />
      <Drawer.Screen name="Deleted" component={DeletedScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;