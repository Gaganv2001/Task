import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data from the API using Fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data and update the state
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        List of Users:
      </Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.id}. ${item.name} (${item.email})`}</Text>
        )}
      />
    </View>
  );
};

export default UsingFetch;
