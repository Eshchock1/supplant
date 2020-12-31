import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CameraNavProp } from "../../navigators/cameraStack";

import { AntDesign } from "@expo/vector-icons";

import { types, actions } from "../../store";
import { connect } from "react-redux";

interface OwnProps {
	navigation: CameraNavProp<"ImageConfirmation">;
}

interface StateProps {
	image: string | null;
}
type Props = OwnProps & StateProps;

const LoadingPage = ({ navigation, image }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.9}
				style={{
					shadowColor: "#000",
					shadowOffset: {
						width: 2,
						height: 5,
					},
					shadowOpacity: 0.5,
					shadowRadius: 7,

					elevation: 5,
					width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 300),
					height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 400),
					borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 10),
				}}>
				<Image
					source={{
						uri: image!,
					}}
					style={{
						width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 300),
						height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 400),
						borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 10),
					}}
				/>
			</TouchableOpacity>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 200),
					paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 40),
				}}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<AntDesign name='close' size={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 60)} color='#494949' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.push("LoadingImage")}>
					<AntDesign name='check' size={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 60)} color='#494949' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		color: "#3b3b3b",
		fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 35),
		paddingBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 40),
		textAlign: "center",
	},
});

const mapStateToProps = (state: types.RootState) => ({
	image: state.camera.image,
});

export default connect(mapStateToProps)(LoadingPage);
