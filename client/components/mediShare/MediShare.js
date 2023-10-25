import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const MediShareScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('Most Recent'); // default sort order
  const [selectedSort, setSelectedSort] = useState('Most Recent');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:4000/api/v1/post');
      if (response.data && response.data.medicinePost) {
        setPosts(response.data.medicinePost);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Myposts')}>
          <Text style={styles.myPostsText}>My posts</Text>
        </TouchableOpacity>
        
        <Picker
          selectedValue={selectedSort}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedSort(itemValue);
            // Here you can trigger the API call again with the new sort order or sort the data locally
          }}>
          <Picker.Item label="Most Recent" value="Most Recent" />
          <Picker.Item label="Oldest First" value="Oldest First" />
          {/* Add more sort options if required */}
        </Picker>

      </View>

      <ScrollView style={styles.feed}>
        {posts.map(post => (
          <Post key={post._id} data={post} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const Post = ({ data, navigation }) => {
  return (
    <View style={styles.post}>
      <Text style={styles.postTitle}>{data.title}</Text>
      <Text style={styles.postDescription}>{data.details}</Text>
      <Image source={{uri: data.pres_image}} style={styles.prescriptionImage} />
      <Text style={styles.postDetails}>
        {data.createdDate} {data.createdTime} - {data.user.firstName} {data.user.lastName}
      </Text>
      <Button title="Respond" onPress={() => navigation.navigate('ResponseScreen', { postId: data._id })} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#4a90e2', // Change this to your desired color
    borderRadius: 10, // This gives it a rounded shape
    // borderWidth: 2,  // Adding border 
    // borderColor: '#007AFF'  // Border color
  },
  myPostsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:19,
  },
  pickerStyle: {
    width: 170,
    height: 10,
    borderColor: '#e0e0e0',
    backgroundColor:'lightgray',
    borderRadius: 10,
  },
  feed: {
    marginTop: 16,
  },
  post: {
    padding: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postDescription: {
    marginTop: 8,
  },
  prescriptionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 12,
  },
  postDetails: {
    marginTop: 12,
    color: 'grey',
  },
});





export default MediShareScreen;

