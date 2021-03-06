import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";

import { Camera } from "expo-camera";

import { AntDesign } from "@expo/vector-icons";
import { CameraNavProp } from "../../navigators/cameraStack";
import { types, actions } from "../../store";
import { connect } from "react-redux";

const { SetImageAction } = actions.camera;

interface CameraProps {
  navigation: CameraNavProp<'Camera'>;
}

interface DispatchProps {
  SetImageAction: (image: string | null) => any;
}
interface StateProps {}

type Props = CameraProps & StateProps & DispatchProps;

const CameraPage = ({ navigation, SetImageAction }: Props) => {
  const [hasPermission, setHasPermission] = useState(false);
  let [camera, setCamera] = useState<Camera | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    //getting camera permissions
    (async () => {
      let { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height:
            (Dimensions.get("window").height -
              (Dimensions.get("window").width * 4) / 3) /
            3,
          backgroundColor: "#0a0a0a",
        }}></View>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "transparent",
          }}></View>
      </Camera>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto",
          marginBottom: 0,
          backgroundColor: "#0a0a0a",
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text
            style={{
              fontSize:
                (Dimensions.get("window").width +
                  Dimensions.get("window").height) /
                (Dimensions.get("window").width +
                  Dimensions.get("window").height) /
                (1080 / 50),
              color: "white",
            }}>
            <AntDesign
              name='reload1'
              size={
                (Dimensions.get("window").width +
                  Dimensions.get("window").height) /
                (1080 / 40)
              }
              color='white'
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.01,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "10%",
            borderRadius:
              (Dimensions.get("window").width +
                Dimensions.get("window").height) /
              (1080 / 700),
            borderColor: "#e0e0e0",
            borderWidth:
              (Dimensions.get("window").width +
                Dimensions.get("window").height) /
              (1080 / 6),
          }}
          onPress={async () => {
            if (camera) {
              console.log("pressed");
              let photo =
                "data:image/jpeg;base64," +
                (
                  await camera.takePictureAsync({
                    skipProcessing: true,
                    base64: true,
                  })
                ).base64;
              SetImageAction(photo);
              navigation.push("ImageConfirmation");
            } else {
              console.log("NO CAMERA");
            }
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.jumpTo("Home")}>
          <Text
            style={{
              fontSize:
                (Dimensions.get("window").width +
                  Dimensions.get("window").height) /
                50,
              color: "white",
            }}>
            <AntDesign
              name='back'
              size={
                (Dimensions.get("window").width +
                  Dimensions.get("window").height) /
                (1080 / 40)
              }
              color='white'
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: types.RootState) => ({
  camera: state.camera.image,
  user: state.user.user,
});

export default connect(mapStateToProps, { SetImageAction })(CameraPage);
