import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const CreateAccountScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Get Started</Text>
                <Text style={styles.subtitle}>Enter your Email Address and choose a strong Password.</Text>
                <TextInput placeholder="Email Address" style={styles.inputField} />
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputField} />
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AccountDetails')}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    backButton: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentContainer: {
        marginTop: 80,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 30
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16
    },
    nextButton: {
        backgroundColor: '#4A49D9',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        marginHorizontal: 30,
        marginBottom: 30
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CreateAccountScreen;
