import React, { Component } from 'react';
//import react in our code.
import {Alert, StyleSheet, View, Button, TextInput } from 'react-native';
//import all the components we are going to use.
 
export default class FirstPage extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
   header : null
  };

  onSubmit() {

    const { username, password } = this.state;
    
    if(username == '' || password == '')
    {
        Alert.alert('Something Went Wrong...!');    
    }
    else if(username != 'Awais' && password !='12345')
    {
        Alert.alert('Please Enter Valid Information...!'); 
           
    }
    else
       {
       this.props.navigation.navigate('SecondPage', {  
            userName: this.state.username,  
        
        })  ;
        // navigate('SecondPage', {
     //     JSON_ListView_Clicked_Item: this.state.username,
  }
  
  this.setState({username: '', password:'' })
  
}
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        {/*Input to get the value from the user*/}
        <TextInput
          onChangeText={username => this.setState({ username })}
          placeholder={'Enter Username'}
          value={this.state.username}
         // onSubmitEditing = { (e)=> { this.update(e); } }
          style={styles.input}
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          placeholder={'Enter Password'}
          secureTextEntry={true}
          value={this.state.password}
         // onSubmitEditing = { (e)=> { this.update(e); } }
          style={styles.input}
        />
        {/*Button to go to the next activity*/}
        <Button
          title="Submmit"
          onPress={this.onSubmit.bind(this)}
          //Button Title
        //   onPress={() =>
        //     navigate('SecondPage', {
        //       JSON_ListView_Clicked_Item: this.state.username,
        //     })
        //   }
        //   //On click of the button we will send
          //the data as a Json from here to the Second Screen using navigation prop
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle:'solid',
    fontSize:15,
    borderRadius: 25,
    textAlign: 'center'
    },
});