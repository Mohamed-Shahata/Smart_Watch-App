import * as React from 'react';
import { Text, View, Image, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends React.Component {
    constructor(props) {
        super()
        this.state = {
            person_mail: '',
            error_mail: '',
            person_password: '',
            error_password: '',
            securePassword: true,
        }
    }

    isValidEmail(value) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }

    data_fun() {
        let new_mail = this.state.person_mail
        let new_password = this.state.person_password

        if (new_mail.length == 0) {
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
            this.setState({ person_mail: '', person_password: '' })
        }


    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={"#0eff00"} />


                <View style={{ backgroundColor: "#fff", flex: 1 }}>

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
                                marginTop: 50,
                                marginLeft: 20,
                            }}
                        >
                            LOGIN
                        </Text>


                        <View
                            style=
                            {{
                                borderColor: 'gray',
                                marginTop: "10%",
                                marginHorizontal: '5%',
                            }}>

                            <View style={{ alignItems: 'center', marginTop: "15%" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <Ionicons name='mail' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />

                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            width: "75%",
                                            marginLeft: 10,
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='Enter your mail'
                                        placeholderTextColor={"gray"}
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

                            <View style={{ marginTop: 15, alignItems: 'center' }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon name='lock' size={25} color={'#45b401'} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style=
                                        {{
                                            borderRadius: 10,
                                            width: "75%",
                                            marginLeft: 10,
                                            color: '#000',
                                            paddingLeft: 10,
                                            borderBottomWidth: 1
                                        }}
                                        placeholder='Enter your password'
                                        placeholderTextColor={"gray"}
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
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                activeOpacity={.7}
                                onPress={() => {
                                    this.data_fun()
                                }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>Login</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', marginTop: "10%", alignSelf: 'center', marginBottom: "15%" }}>
                                <Text
                                    style=
                                    {{
                                        color: '#AEB1B3',
                                        marginRight: 5
                                    }}>
                                    Don't have an account?
                                </Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("SignUp")
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', color: '#45b401' }}> Sign up</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Image
                            source={require('./img/2.png')}
                            style=
                            {{
                                width: '100%',
                                height: 100,
                                marginTop: 56
                            }}
                        />

                    </ScrollView>

                </View>

            </>
        )
    }
}