import React from 'react'

import { Dimensions, ImageBackground, Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity, Keyboard } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';

import { login } from '../actions/submisions';
import { insertFormFields } from '../actions/formfields';

import { DrawerScreenProps } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props extends DrawerScreenProps<any, any> { };


export const LoginScreen = ({ navigation }: Props) => {

    const insets = useSafeAreaInsets();
    const formInit = {
        name: '',
        surname: '',
        age: ''
    }

    const dispatch = useDispatch();
    const { name, surname, age, form, setFormValue , onChange } = useForm(formInit)

    const onLogin = () => {
        console.log(form)
        Keyboard.dismiss()
        dispatch(login(form))
        dispatch(insertFormFields(form))
        navigation.navigate('SubmissionScreen')
        setFormValue(formInit)
    }


    return (
        // Cabecera
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', marginTop: insets.top }}>
            <ImageBackground
                source={require('../../assets/newyork.jpg')}
                style={{ height: Dimensions.get('window').height / 2.5 }}
            />

            {/* FORMULARIO */}
            <View style={styles.loginContainer}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", textAlign: 'center' }}>LOGIN</Text>

                    {/* CAMPOS FORMULARIO */}
                    <View style={{ marginTop: 25, margin: 0 }}>
                        <Text style={{ color: "rgba(0,0,0,0.8)" }}>Name:</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="user" color="black" size={24} style={{ marginTop: 10, marginRight: 15 }} />
                            <TextInput
                                style={[
                                    styles.inputField
                                ]}
                                placeholder="Your first name"
                                placeholderTextColor="rgba(0,0,0,0.8)"
                                selectionColor='white'

                                onChangeText={(value) => onChange(value, 'name')}
                                value={name}

                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                        <Text style={{ color: "rgba(0,0,0,0.8)", marginTop: 15 }}>Surname:</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign name="team" color="black" size={24} style={{ marginTop: 10, marginRight: 15 }} />
                            <TextInput
                                style={
                                    styles.inputField}
                                placeholder="Your last name"
                                placeholderTextColor="rgba(0,0,0,0.8)"
                                selectionColor='white'

                                onChangeText={(value) => onChange(value, 'surname')}
                                value={surname}

                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                        <Text style={{ color: "rgba(0,0,0,0.8)", marginTop: 15 }}>Age:</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign name="antdesign" color="black" size={24} style={{ marginTop: 10, marginRight: 15 }} />
                            <TextInput
                                style={
                                    styles.inputField
                                }
                                placeholder="Your age"
                                placeholderTextColor="rgba(0,0,0,0.8)"
                                keyboardType="numeric"
                                selectionColor='white'



                                onChangeText={(value) => (isNaN(parseInt(value)) ? onChange('0', 'age') : onChange(parseInt(value), 'age'))}
                                value={age.toString()}

                                autoCapitalize="none"
                                autoCorrect={false}
                                maxLength={2}
                            />
                        </View>

                        {/* Login Button */}
                        <View style={styles.loginButtonContainer}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.button}
                                onPress={onLogin}
                            >
                                <LinearGradient colors={['#1f1f1f', '#707070', '#b5b5b5']} style={styles.linearGradientStyle}>
                                    <Text style={styles.buttonText}>Enviar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1.5,
        backgroundColor: 'white',
        bottom: 50,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30

    },
    inputField: {
        width: '80%',
        color: 'black',
        fontSize: 18,
        borderBottomColor: '#c8c8c8',
        borderBottomWidth: 2,
        paddingBottom: 3,
    },
    loginButtonContainer: {
        marginTop: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradientStyle: {
        height: 50,
        width: '100%',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: 'white'
    }
})