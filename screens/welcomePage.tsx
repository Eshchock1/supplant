import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions, Image, Modal, Alert} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import {Line} from 'react-native-svg';
import {LineChart, Path} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as Progress from 'react-native-progress';
import { Tooltip} from 'react-native-elements';

export default class WelcomePage extends Component {

    


     

      renderChart() {
        const chart = [
          1.1,
          3,
          1.5,
          2.3,
          3.2,
          7,
          8.2,
          1.2,
          2,
          1.2,
          8,
          3.8,
          5.8,
          3.9,
          5.1,
          0.1,
          6,
        ];
        return (
          <LineChart
            yMin={0}
            yMax={10}
            data={chart}
            style={{flex: 2}}
            curve={shape.curveMonotoneX}
            svg={{
              stroke: 'white',
              strokeWidth: 1.75,
            }}
            contentInset={{left: 10, right: 10}}>
            <Line
              key="x-axis"
              x1="0%"
              x2="100%"
              y1="100%"
              y2="100%"
              stroke={'white'}
              strokeDasharray={[2, 10]}
              strokeWidth={5}
            />
            <Line
              key="y-axis"
              x1="0%"
              x2="0%"
              y1="15%"
              y2="100%"
              stroke={'white'}
              strokeDasharray={[2, 10]}
              strokeWidth={5}
            />
          </LineChart>
        );
      }
    







      
render(){
  return (
      <View style={styles.container}>
      <View style={{flex:1, position:'absolute', top:0, bottom:0, left:0, right:0,}}>
      <View style={{flex:0.3, padding:30, backgroundColor:"#4ba023"}}></View>
      <View style={{flex:0.7, backgroundColor:'#FDFDFD'}}></View>
      </View>
      <View style={{flex:1, marginTop:20, position:'absolute', top:0, bottom:0, left:0, right:0,}}>
      <Text style={styles.logo}>supplant</Text>
      <View style={{marginHorizontal:30, flex:0.5, borderRadius:15, marginTop:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      
      <View style={{flex:0.35, flexDirection:'row',}}>
      <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
      <Image 
        style={{width:40, height:80,}}
        source={require('../assets/cactus.png')}
      />
      </View>
      <View style={{flex:0.8, paddingLeft:10, paddingTop:5, justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{color:'#494949', fontSize:27, fontWeight:'bold'}}>Cactus </Text>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{paddingVertical:3, paddingHorizontal:5, borderRadius:30, backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:15,}}>10</Text></TouchableHighlight></Tooltip>
      </View>
      <Text style={{color:'#494949', fontSize:13,}}> Scan 5 more items to reach aloe</Text>
      <Progress.Bar style={{marginTop:10}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={10} progress={0.6} width={200} />
      </View>
      </View>
      <View style={{flex:0.65,}}>

      <View style={{flex:1, marginHorizontal:15, marginBottom:15, backgroundColor:"#4ba023", borderRadius:15,}}>
      <View style={{flex:0.25, flexDirection:'row',}}>
        <View style={{flex:0.5, alignItems:'flex-start'}}><Text style={{color:'white', fontSize:30, fontWeight:'bold', paddingTop:10, paddingLeft:10}}>1.5 <Text style={{fontSize:15}}>kg/day</Text></Text></View>
        <View style={{flex:0.5, alignItems:'flex-end'}}><Text style={{color:'white', fontSize:30, fontWeight:'bold', paddingTop:10, paddingRight:10}}>100 <Text style={{fontSize:15}}>kg</Text></Text></View>
      </View>
      <View style={{flex:0.75}}>
        <View style={{flexDirection:'row', flex:0.9}}>
          <View style={{flex:0.1,}}>
          <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-end'}}><Text style={{color:'white', fontSize:15, paddingRight:5, paddingTop:15,}}>10</Text></View>
          <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}><Text style={{color:'white', fontSize:15, paddingRight:5}}>0</Text></View>
          </View>
          <View style={{flex:0.9}}>
          <View style={{flex:1, paddingRight:10,}}>{this.renderChart()}</View>
          </View>
        </View>
        <View style={{flex:0.2, flexDirection:'row',}}>
          <View style={{flex:0.1}}></View>
          <View style={{flex:0.9, flexDirection:'row'}}>
          <View style={{flex:0.5, alignItems:'flex-start'}}><Text style={{color:'white', fontSize:15, paddingLeft:5,}}>Mon</Text></View>
          <View style={{flex:0.5, alignItems:'flex-end'}}><Text style={{color:'white', fontSize:15, paddingRight:15,}}>Fri</Text></View>
          </View>
          </View>
      </View>
      </View>
      </View>
      </View>   
      <View>
      <Text style={{color:'#494949', fontSize:13, marginTop:17,marginHorizontal:30}}>Previously Scanned Items</Text>
      </View>
      <View style={{flex:0.4, width:"100%"}}>
        <ScrollView style={{padding:10,marginTop:15, paddingTop:0, paddingBottom:100,}}>
      


      <View style={{flexDirection:'row', marginHorizontal:20, height:120, borderRadius:15, marginBottom:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:0.25, justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{width:50, height:100,}}
        source={require('../assets/image.png')}/>
      </View>
      <View style={{flex:0.75,}}>
      <Text style={{color:'white', zIndex:20, position:'absolute', marginTop:10, marginLeft:10, fontSize:20, fontWeight:'bold'}}>8</Text>
      <Progress.Bar style={{marginTop:10, zIndex:10, borderRadius:20,}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={30} progress={0.8} width={200} />
      <TouchableOpacity onPress={()=> Alert.alert("Ingredients:", "Cheese, Lettuce, Tomato, Bun, Cheddar, Bread, Beef")}><Text style={{color:'#494949', paddingTop:6, fontSize:20, fontWeight:'bold'}}>View Ingredients</Text></TouchableOpacity>
      <Text style={{color:'#494949', fontSize:13,}}>1 hour ago</Text>
      <Image 
        style={{position:'absolute', width:40, height:40, bottom:10, right:10,}}
        source={require('../assets/lea.jpg')}/>
      </View>
      </View>



      <View style={{flexDirection:'row', marginHorizontal:20, height:120, borderRadius:15, marginBottom:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:0.25, justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{width:50, height:100,}}
        source={require('../assets/image2.png')}/>
      </View>
      <View style={{flex:0.75,}}>
      <Text style={{color:'white', zIndex:20, position:'absolute', marginTop:10, marginLeft:10, fontSize:20, fontWeight:'bold'}}>5</Text>
      <Progress.Bar style={{marginTop:10, zIndex:10, borderRadius:20,}} color={'#DAA520'} unfilledColor={'#D3D3D3'} borderWidth={0} height={30} progress={0.5} width={200} />
      <TouchableOpacity onPress={()=> Alert.alert("Ingredients:", "Cheese, Lettuce, Tomato, Bun, Cheddar, Bread, Beef")}><Text style={{color:'#494949', paddingTop:6, fontSize:20, fontWeight:'bold'}}>View Ingredients</Text></TouchableOpacity>
      <Text style={{color:'#494949', fontSize:13,}}>3 hours ago</Text>
      {/* <Image 
        style={{position:'absolute', width:40, height:40, bottom:10, right:10,}}
        source={require('../assets/lea.jpg')}/> */}
      </View>
      </View>



      <View style={{flexDirection:'row', marginHorizontal:20, height:120, borderRadius:15, marginBottom:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:0.25, justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{width:50, height:100,}}
        source={require('../assets/image.png')}/>
      </View>
      <View style={{flex:0.75,}}>
      <Text style={{color:'white', zIndex:20, position:'absolute', marginTop:10, marginLeft:10, fontSize:20, fontWeight:'bold'}}>9</Text>
      <Progress.Bar style={{marginTop:10, zIndex:10, borderRadius:20,}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={30} progress={0.9} width={200} />
      <TouchableOpacity onPress={()=> Alert.alert("Ingredients:", "Cheese, Lettuce, Tomato, Bun, Cheddar, Bread, Beef")}><Text style={{color:'#494949', paddingTop:6, fontSize:20, fontWeight:'bold'}}>View Ingredients</Text></TouchableOpacity>
      <Text style={{color:'#494949', fontSize:13,}}>8 hours ago</Text>
      <Image 
        style={{position:'absolute', width:40, height:40, bottom:10, right:10,}}
        source={require('../assets/lea.jpg')}/>
      </View>
      </View>



      <View style={{flexDirection:'row', marginHorizontal:20, height:120, borderRadius:15, marginBottom:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:0.25, justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{width:50, height:100,}}
        source={require('../assets/image2.png')}/>
      </View>
      <View style={{flex:0.75,}}>
      <Text style={{color:'white', zIndex:20, position:'absolute', marginTop:10, marginLeft:10, fontSize:20, fontWeight:'bold'}}>2</Text>
      <Progress.Bar style={{marginTop:10, zIndex:10, borderRadius:20,}} color={'#de563e'} unfilledColor={'#D3D3D3'} borderWidth={0} height={30} progress={0.2} width={200} />
      <TouchableOpacity onPress={()=> Alert.alert("Ingredients:", "Cheese, Lettuce, Tomato, Bun, Cheddar, Bread, Beef")}><Text style={{color:'#494949', paddingTop:6, fontSize:20, fontWeight:'bold'}}>View Ingredients</Text></TouchableOpacity>
      <Text style={{color:'#494949', fontSize:13,}}>2 days ago</Text>
      {/* <Image 
        style={{position:'absolute', width:40, height:40, bottom:10, right:10,}}
        source={require('../assets/lea.jpg')}/> */}
      </View>
      </View>


        
        
        
      <View style={{height:50,}}></View>
      </ScrollView>
      </View> 
      </View>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal:30,
    // paddingVertical:40,
  },
  name:{
    color:'#4ba023',
    fontSize:28,
    paddingVertical:10, 
  },
  logo: {
    color: "white",
    marginHorizontal:30,
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
    // fontFamily:"roboto",
  },
  title:{
    color:'#494949',
    fontSize:38,
    fontWeight:'bold',
    paddingTop:20,
  },
});
