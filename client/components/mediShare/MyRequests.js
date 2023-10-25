import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

function MyRequests({ navigation }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://10.0.2.2:4000/api/v1/request/user/652f9ee3e87193496c16e698');
        setRequests(response.data.medicineRequests);
      } catch (error) {
        console.error("Error fetching the requests:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Requests</Text>
        <Button title="+ New Request" onPress={() => navigation.navigate('CreateRequest')} />
      </View>

      <FlatList
        data={requests}
        renderItem={({ item }) => (
          <View style={styles.requestCard}>
            <Image source={{ uri: item.pres_image }} style={styles.presImage} />
            <View style={{ flex: 1 }}>
              <Text>{item.createdDate}</Text>
              <Text>{item.createdTime}</Text>
              <Text style={styles.medicineName}>{item.medicineName}</Text>
              <Text>{item.requestStatus}</Text>
              <Button title="View Info" onPress={() => navigation.navigate('Myposts')} />
            </View>
          </View>
        )}
        keyExtractor={item => item._id}
      />

      {/* Add the footer navigation here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  },
  medicineName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  presImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10
  }
});

export default MyRequests;




// import React from 'react'
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native'

// export default function MyRequests({navigation}) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Requests</Text>

//       <TouchableOpacity style={styles.newRequestButton} onPress={() => navigation.navigate('CreateRequest')}>
//         <Text style={styles.newRequestButtonText}>+ New Request</Text>
//       </TouchableOpacity>

//       <ScrollView style={styles.requestsList}>
//         <RequestItem
//           name="Acetaminophen"
//           date="22/09/2023 8.30 PM"
//           status="Active"
//           timeLeft="00:35:23"
//         />
//         <RequestItem
//           name="Dengvaxia"
//           date="26/05/2023 3.30 PM"
//           status="Expired"
//           timeLeft="00:00:00"
//         />
//         <RequestItem
//           name="Amoxicillin"
//           date="03/05/2023 3.30 PM"
//           status="Expired"
//           timeLeft="00:00:00"
//         />
//       </ScrollView>
//     </View>
//   )
// }

// function RequestItem({ name, date, status, timeLeft }) {
//   return (
//     <View style={styles.requestItem}>
//       <Text style={styles.medicineName}>{name}</Text>
//       <Text style={styles.date}>{date}</Text>
//       <Text style={styles.status}>{status}</Text>
//       <Text style={styles.timeLeft}>Request Expires in : {timeLeft}</Text>
//       <TouchableOpacity style={styles.viewInfoButton}>
//         <Text style={styles.viewInfoButtonText}>View Info</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   newRequestButton: {
//     backgroundColor: '#0066FF',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   newRequestButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   requestsList: {
//     flex: 1,
//   },
//   requestItem: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   medicineName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   date: {
//     marginBottom: 10,
//   },
//   status: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   timeLeft: {
//     marginBottom: 10,
//   },
//   viewInfoButton: {
//     backgroundColor: '#e0e0e0',
//     padding: 5,
//     borderRadius: 5,
//     alignSelf: 'flex-start',
//   },
//   viewInfoButtonText: {
//     fontSize: 14,
//   },
// })
