import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Todos from '../screens/Todos';
import TodoDetail from '../screens/TodoDetail';
import TodoCreate from '../screens/TodoCreate';
import Users from '../screens/Users';
import UsersCreate from '../screens/UsersCreate';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Todos: {
    screen: Todos,
    navigationOptions: {
      title: 'List'
    }
  },
  TodoDetail: {
    screen: TodoDetail,
    navigationOptions: {
      title: 'Detail'
    }
  },
  TodoCreate: {
    screen: TodoCreate,
    navigationOptions: {
      title: 'Create'
    }
  },
  Users: {
    screen: Users,
    navigationOptions: {
      title: 'Users'
    }
  },
  UsersCreate: {
    screen: UsersCreate,
    navigationOptions: {
      title: 'Create User'
    }
  },
})

export default RootNavigator;
