import React from "react";
import { View, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const unit = (Dimensions.get("window").width + Dimensions.get("window").height) / 1080;

interface ScannedItem {
	id: number;
	rating: number;
	image: any;
	ingredients: string[];
}
const ScannedListItem = ({ id, rating, image, ingredients }: ScannedItem) => {
	return (
		<View
			key={id.toString()}
			style={{
				flexDirection: "row",
				marginHorizontal: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
				height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 120),
				borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 15),
				marginBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
				backgroundColor: "white",
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 5,
			}}>
			<View style={{ flex: 0.25, justifyContent: "center", alignItems: "center" }}>
				<Image
					style={{
						borderRadius: 10 * unit,
						width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 50),
						height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 100),
					}}
					source={image}
				/>
			</View>
			<View style={{ flex: 0.75, paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20) }}>
				<Text
					style={{
						color: "white",
						zIndex: 20,
						position: "absolute",
						marginTop: 30 * unit,
						marginLeft: 10 * unit,
						fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
						fontWeight: "bold",
					}}>
					{rating}
				</Text>

				{rating >= 7 && (
					<Progress.Bar
						style={{
							marginTop: 10 * unit,
							zIndex: 10,
							borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
						}}
						color={"#4ba023"}
						unfilledColor={"#D3D3D3"}
						borderWidth={0}
						height={30 * unit}
						progress={rating / 10}
						width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 200)}
					/>
				)}
				{rating <= 3 && (
					<Progress.Bar
						style={{
							marginTop: 10 * unit,
							zIndex: 10,
							borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
						}}
						color={"#de563e"}
						unfilledColor={"#D3D3D3"}
						borderWidth={0}
						height={30 * unit}
						progress={rating / 10}
						width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 200)}
					/>
				)}
				{rating > 3 && rating < 7 && (
					<Progress.Bar
						style={{
							marginTop: 10 * unit,
							zIndex: 10,
							borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
						}}
						color={"#DAA520"}
						unfilledColor={"#D3D3D3"}
						borderWidth={0}
						height={30 * unit}
						progress={rating / 10}
						width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 200)}
					/>
				)}

				<TouchableOpacity>
					<Text
						style={{
							color: "#494949",
							paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 6),
							fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
							fontWeight: "bold",
						}}>
						View Ingredients
					</Text>
				</TouchableOpacity>
				{rating > 6 ? (
					<Image
						style={{
							position: "absolute",
							width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 40),
							height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 40),
							bottom: 10 * unit,
							right: 10 * unit,
						}}
						source={require("../assets/lea.jpg")}
					/>
				) : null}
			</View>
		</View>
	);
};

export default ScannedListItem;
