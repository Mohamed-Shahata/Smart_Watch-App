import * as React from 'react';
import { Text, View, Image, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
    constructor(props) {
        super()
        this.state = {
            person_name: '',
            person_name2: '',
            person_password: '',
            person_mail: '',
            error_name: '',
            error_name2: '',
            error_password: '',
            error_mail: '',
            securePassword: true,
        }
    }




    isValidEmail(value) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }


    data_fun() {
        let new_name = this.state.person_name
        let new_name2 = this.state.person_name2
        let new_password = this.state.person_password
        let new_mail = this.state.person_mail

        if (new_name.length == 0) {
            this.setState({ error_name: 'please enter first name' })
        }
        else if (new_name2.length == 0) {
            this.setState({ error_name2: 'please enter last name' })
        }
        else if (new_mail.length == 0) {
            this.setState({ error_mail: 'please enter your mail' })
        }
        else if (this.isValidEmail(new_mail) == false) {
            this.setState({ error_mail: 'please enter valid mail' })
        }
        else if (new_password.length == 0) {
            this.setState({ error_password: 'please enter your password' })
        }
        else if (new_password.length < 8) {
            this.setState({ error_password: 'password must be 8 letters' })
        }

        else {
            this.props.navigation.navigate("Home")
            this.setState({
                person_name: '',
                person_password: '',
                person_mail: ''
            })
        }


    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={"#0eff00"} />

                <View style={{ backgroundColor: "white", flex: 1 }}>

                    <ScrollView>

                        <Image
                            source={require('./img/1.png')}
                            style=
                            {{
                                width: '100%',
                                height: 100
                            }}
                        />

                        <Text
                            style=
                            {{
                                color: '#000',
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginTop: 40,
                                marginLeft: 20,
                            }}
                        >
                            SIGNUP
                        </Text>

                        <View
                            style=
                            {{
                                borderColor: 'gray',
                                marginTop: "5%",
                                marginHorizontal: '5%',
                            }}>

                            <View style={{ paddingHorizontal: 15, marginTop: '8%' }}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome name='user' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            width: "85%",
                                            marginLeft: 10,
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='First name'
                                        placeholderTextColor={"gray"}
                                        value={this.state.person_name}
                                        onChangeText={(value) => {
                                            this.setState({ person_name: value, error_name: '' })
                                        }}
                                    />
                                </View>

                                <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_name}</Text>
                            </View>

                            <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome name='user' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            width: "85%",
                                            marginLeft: 10,
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='Last name'
                                        placeholderTextColor={"gray"}
                                        value={this.state.person_name2}
                                        onChangeText={(value) => {
                                            this.setState({ person_name2: value, error_name2: '' })
                                        }}
                                    />
                                </View>

                                <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_name2}</Text>
                            </View>

                            <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Ionicons name='mail' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            marginLeft: 10,
                                            width: '85%',
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='E_mail address'
                                        placeholderTextColor={'gray'}
                                        keyboardType="email-address"
                                        autoCapitalize='none'
                                        value={this.state.person_mail}
                                        onChangeText={(value) => {
                                            this.setState({ person_mail: value, error_mail: '' })
                                        }}
                                    />
                                </View>

                                <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_mail}</Text>
                            </View>

                            <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon name='lock' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            width: "85%",
                                            marginLeft: 10,
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='Password'
                                        placeholderTextColor={'gray'}
                                        secureTextEntry={this.state.securePassword}
                                        value={this.state.person_password}
                                        onChangeText={(value) => {
                                            this.setState({ person_password: value, error_password: '' })
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 20, bottom: 18 }}
                                        onPress={() => {
                                            if (this.state.securePassword == true) {
                                                this.setState({ securePassword: false })
                                            }
                                            else {
                                                this.setState({ securePassword: true })
                                            }
                                        }}
                                    >
                                        <Icon
                                            name={this.state.securePassword ? 'eye-slash' : 'eye'}
                                            size={15}
                                            color={'#45b401'}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_password}</Text>
                            </View>

                            <TouchableOpacity
                                style=
                                {{
                                    backgroundColor: "#0eff00",
                                    height: 50,
                                    width: "60%",
                                    alignSelf: 'center',
                                    borderRadius: 20,
                                    marginTop: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '8%'
                                }}

                                onPress={() => {
                                    this.data_fun()
                                }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>Sign up</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>

                            <Text style={{ color: 'gray', fontSize: 17 }}>
                                Have an account?
                            </Text>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("Login")
                                }}
                            >
                                <Text style={{ color: '#45b401', fontSize: 17 }} > Login</Text>
                            </TouchableOpacity>

                        </View>

                        <Image
                            source={require('./img/2.png')}
                            style=
                            {{
                                width: '100%',
                                height: 100,
                                marginTop: 20
                            }}
                        />


                    </ScrollView>

                </View>
            </>
        )
    }
}