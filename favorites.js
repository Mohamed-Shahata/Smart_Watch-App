import * as React from 'react'
import { Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Favorites extends React.Component {

    constructor(props) {
        super()
        this.state = {
            use_index: 0,
            total: 0,
            favorites_arr: [],
        }
    }

    componentDidMount() {
        let favorites_arr = this.props.navigation.getParam('favorites_arr')

        this.setState({
            favorites_arr,
        })
    }


    delete_item(index) {
        var new_arr = this.state.favorites_arr

        new_arr.splice(index, 1)

        this.setState({ favorites_arr: new_arr })

    }

    render() {
        return (
            <>
                <StatusBar barStyle='dark-content' backgroundColor={"#d8f1c7"} />

                <View style={{ flex: 1, backgroundColor: "#d8f1c7" }}>

                    <View
                        style=
                        {{
                            height: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold', color: '#000', }}>
                            Favorites
                        </Text>

                    </View>

                    <ScrollView >

                        {this.state.favorites_arr.map((item, index) => {

                            return (
                                <View
                                    key={index}
                                    style={{
                                        backgroundColor: "#fff",
                                        width: '90%',
                                        height: 120,
                                        marginTop: "5%",
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: 10,
                                        alignSelf: 'center',

                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,

                                        elevation: 4,
                                    }}>

                                    <Image
                                        source={item.image}
                                        style={{ height: 100, width: 100, borderRadius: 5 }}
                                    />

                                    <View
                                        style=
                                        {{
                                            marginLeft: '5%',
                                            marginTop: '2%',
                                            height: '100%',
                                        }}>
                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: "#000" }}>{item.name} </Text>
                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: "#000" }}>${item.price}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            position: 'absolute',
                                            right: 15,
                                            top: 10,
                                        }}
                                        onPress={() => {
                                            this.delete_item(index)
                                        }}
                                    >
                                        <AntDesign
                                            name='delete'
                                            size={18}
                                            color={"#f00"}
                                        />
                                    </TouchableOpacity>

                                </View>
                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity
                        style=
                        {{
                            width: '85%',
                            height: 50,
                            backgroundColor: '#45b401',
                            alignSelf: 'center',
                            marginBottom: '10%',
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("Cart")
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Add all to my cart</Text>
                    </TouchableOpacity>

                </View>


                <View
                    style={{
                        width: '100%',
                        height: 60,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        paddingHorizontal: 20,
                    }}>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                            this.setState({ total: 0 })
                        }}
                    >
                        <MaterialCommunityIcons name='home' size={30} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Cart")
                        }}
                        style=
                        {{
                            backgroundColor: '#45b401',
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: -40,
                            marginHorizontal: 20
                        }}
                    >
                        <MaterialCommunityIcons name='shopping-outline' size={25} color={'#fff'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Favorites")
                            this.setState({ total: 0 })
                        }}
                    >
                        <AntDesign name='heart' size={25} color={'#45b401'} />
                    </TouchableOpacity>

                </View>

            </>
        )
    }
}