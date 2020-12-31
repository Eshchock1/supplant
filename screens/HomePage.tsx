import React, { useState, useEffect, Component, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, RefreshControl } from "react-native";
import firebase from "../firebase";

import Header from "../components/Header";
import ScannedListItem from "../components/ScannedListItem";
import {} from "@react-navigation/material-top-tabs";
import { connect, MapStateToProps } from "react-redux";

import { types, actions } from "../store";
import { ImageScan } from "../types/imageScan";

const { GetMoreScans, RefreshScans } = actions.scans;
interface StateProps {
	scans: ImageScan[];
	isGettingScans: boolean;
}

interface DispatchProps {
	GetMoreScans: (start?: boolean) => any;
	RefreshScans : () => any;
}

type Props = StateProps & DispatchProps;

const HomePage = ({ isGettingScans, scans, GetMoreScans, RefreshScans }: Props) => {
	const [headerOpen, setHeaderOpen] = useState<boolean>(true);
	const handleScroll = (scroll: number) => (scroll > 50 ? setHeaderOpen(false) : null);
	useEffect(() => {
		GetMoreScans(true);
	}, []);
	return (
		<View style={styles.container}>
			<Header open={headerOpen} setState={setHeaderOpen} userImage={firebase.auth().currentUser?.photoURL} xp={20}></Header>
			<Text style={styles.listTitleText}>Your Items</Text>
			<ScrollView
				refreshControl={<RefreshControl refreshing={isGettingScans} onRefresh={RefreshScans} />}
				onScroll={(event) => handleScroll(event.nativeEvent.contentOffset.y)}
				style={styles.itemList}>
				{scans.map((item) => (
					<ScannedListItem key={item.id} image={{ uri: item.imageURL }} id={item.id!} rating={7} ingredients={[]}></ScannedListItem>
				))}
			</ScrollView>
		</View>
	);
};

const mapStateToProps = (state: types.RootState) => ({
	...state.scans,
});
export default connect(mapStateToProps, { GetMoreScans, RefreshScans })(HomePage);

const unit = (Dimensions.get("window").width + Dimensions.get("window").height) / 1080;

const scannedItems = [
	{ id: 0, image: require("../assets/pie.jpeg"), rating: 7, ingredients: ["blueberry", "bread"] },
	{ id: 1, image: require("../assets/pizza.jpg"), rating: 5, ingredients: ["bread", "cheese", "tomatoes"] },
	{ id: 2, image: require("../assets/salad.jpg"), rating: 9, ingredients: ["lettuce", "tomatoes", "cucumber"] },
	{ id: 3, image: require("../assets/burger.jpg"), rating: 2, ingredients: ["cheese", "beef", "tomato", "onion", "lettuce"] },
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	itemList: {
		flex: 1,
		padding: 10 * unit,
		marginTop: 15,
		paddingTop: 0,
	},
	listTitleText: {
		color: "#393939",
		fontSize: 13,
		fontWeight: "bold",
		marginTop: 17,
		marginHorizontal: unit * 30,
		flex: 0,
	},
});
