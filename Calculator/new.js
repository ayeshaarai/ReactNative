import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const ListScreen = () => {
	const friends = [
			{name : 'jawairia'},
			{name : 'shaista'},
			{name : 'Ayesha'}
		];
	return(
		<FlatList 
			data = {friends}
			renderItem = {({item}) => {
				return <Text>{item.name}</Text>
			}}
		/>
	);
};


export default ListScreen;

