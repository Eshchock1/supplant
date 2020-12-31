import React, { useEffect, useRef } from "react";

import {
	StyleSheet,
	Text,
	View,
	Keyboard,
	ScrollView,
	Dimensions,
	Image,
	Modal,
	Alert,
	Animated,
	RefreshControl,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import * as Progress from "react-native-progress";
import { Feather } from "@expo/vector-icons";

const unit = (Dimensions.get("window").width + Dimensions.get("window").height) / 1080;

const Header = ({ open, xp, setState, userImage }: { open: boolean; xp: number; setState: (state: boolean) => any; userImage?: string | null }) => {
	const animationProgress = useRef(new Animated.Value(1)).current;
	const OpenHeader = () =>
		Animated.spring(animationProgress, {
			toValue: 1,
			useNativeDriver: false,
		}).start();
	const CloseHeader = () =>
		Animated.spring(animationProgress, {
			toValue: 0,
			useNativeDriver: false,
		}).start();

	useEffect(() => (open ? OpenHeader() : CloseHeader()), [open]);

	const HeaderHeight = animationProgress.interpolate({
		inputRange: [0, 1],
		outputRange: ['0%', '100%'],
		extrapolate: "clamp",
	});
	const headerMargin = animationProgress.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 10],
		extrapolate: "clamp",
	});
	const arrowScale = animationProgress.interpolate({
		inputRange: [0, 1],
		outputRange: [-1, 1],
		extrapolate: "clamp",
	});

	return (
		<View
			style={{
				paddingHorizontal: 30 * unit,
				paddingVertical: 15,
				backgroundColor: "#5fc16a",
			}}>
			<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 25 }}>
				<Text style={styles.logo}>supplant</Text>

				<Animated.View
					style={{
						transform: [{ scaleY: arrowScale }],
					}}>
					<Feather name='chevrons-up' onPress={() => setState(!open)} size={24} color='white' />
				</Animated.View>

				<TouchableHighlight
					style={{
						width: 40,
						height: 40,
						borderRadius: 40,
						backgroundColor: "white",
						overflow: "hidden",
					}}>
					<Image style={{ flex: 1 }} source={userImage ? { uri: userImage } : require("../assets/cactus.png")} />
				</TouchableHighlight>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}></View>

			<Animated.View
				style={{
					borderRadius: 15,
					marginTop: headerMargin,
					backgroundColor: "white",
					maxHeight: HeaderHeight,
					overflow: "hidden",
				}}>
				<View style={{ flexDirection: "row", padding: 10 }}>
					<View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
						<Image style={{ width: 40, height: 80 }} source={require("../assets/cactus.png")} />
					</View>
					<View
						style={{
							flex: 0.8,
							paddingLeft: 10 * unit,
							justifyContent: "center",
						}}>
						<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 5 }}>
							<Text
								style={{
									color: "#494949",
									fontSize: 27 * unit,
									fontWeight: "bold",
									alignContent: "center",
								}}>
								Cactus
							</Text>
							{/* Circle Number / Level */}
							<TouchableHighlight
								style={{
									width: 35 * unit,
									height: 35 * unit,
									paddingVertical: 3 * unit,
									paddingHorizontal: 5 * unit,
									borderRadius: 30 * unit,
									backgroundColor: "#5fc16a",
									justifyContent: "center",
									alignSelf: "flex-end",
								}}>
								<Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 * unit }}>{xp}</Text>
							</TouchableHighlight>
						</View>
						<Text style={{ color: "#494949", fontSize: 13 * unit }}> {25 - xp} more to unlock Aloe Verra</Text>
						<Progress.Bar
							style={{ marginTop: 10 * unit }}
							color={"#5fc16a"}
							unfilledColor={"#D3D3D3"}
							borderWidth={0}
							height={10 * unit}
							progress={xp / 25}
							width={Dimensions.get("window").width * 0.55}
						/>
					</View>
				</View>
			</Animated.View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	logo: {
		color: "white",
		fontSize: 36,
		fontWeight: "bold",
	},
});
