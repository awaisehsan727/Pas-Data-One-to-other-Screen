// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Button } from 'react-native';
//import all the components we are going to use.
 
export default class SecondPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;  
    const user_name = navigation.getParam('userName', 'NO-User');
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <Text>
          You are on SecondPage and the value passed from the first screen is
        </Text>
        {/*Using the navigation prop we can get the value passed from the first Screen*/}
        <Text style={styles.TextStyle}>
        {JSON.stringify(user_name)}
        </Text>
        <Text style={{ marginTop: 16 }}>With Check</Text>
        {/*If you want to check the value is passed or not, 
         you can use conditional operator.*/}
        <Text style={styles.TextStyle}>{JSON.stringify(user_name)}
          {/* {this.props.navigation.state.params.JSON_ListView_Clicked_Item
            ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
            : 'No Value Passed'} */}
        </Text>
                <Button
          title="Go Next"
          Button Title
          onPress={() =>
            navigate('third', {
            })
          }
    
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});