import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image,TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image style={styles.image} source={require('../../assets/images/amaka_clinic_logo.png')} />
        <Text style={styles.heading}><Text style={{ color: '#FF7F3E' }}>PATIENT CLINICAL RECORD</Text></Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.textInput} placeholder='Clinic Date'/>
          <TextInput style={styles.textInput} placeholder='Nature of Ailment'/>
          <TextInput style={styles.textInput} placeholder='Medicine Prescribed'/>
          <TextInput style={styles.textInput} placeholder='Procedure Undertaken'/>
          <TextInput style={styles.textInput} placeholder='Date of Next Appointment'/>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>

          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1c400',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 16,
    paddingTop: 15, // Adjusted paddingTop
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#b6a600',
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 13,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    borderRadius: 15,
  },

  submitButton: {
    backgroundColor: '#FF7F3E',
    borderRadius: 10, // Make the button rounded
    width: 150, // Increased width to make it more like a standard button
    height: 50, // Decreased height to make it more like a standard button
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 12, // Adjust font size as needed
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 220,
    marginVertical: 20,
  },
});
