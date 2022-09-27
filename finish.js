import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

export default class Finish extends React.Component {
    constructor(props) {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
                <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>

                    <Text
                        style=
                        {{
                            fontSize: 40,
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            color: '#000',
                            marginTop: '15%'
                        }}
                    >
                        Success !
                    </Text>


                    <Image
                        source={require('./img/finish.png')}
                        style={{ height: '45%', width: '90%', borderRadius: 10 }}
                    />



                    <Text
                        style=
                        {{
                            color: '#000',
                            fontSize: 18,
                            marginTop: '10%'
                        }}
                    >
                        Your order will be delivered soon
                    </Text>

                    <Text
                        style=
                        {{
                            color: '#000',
                            fontSize: 18,
                        }}
                    >
                        Thank you for choosing our app
                    </Text>

                    <TouchableOpacity
                        style=
                        {{
                            width: '85%',
                            height: '7%',
                            backgroundColor: '#45b401',
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '30%'
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Back to shopping</Text>
                    </TouchableOpacity>

                </View>
            </>
        )
    }
}
