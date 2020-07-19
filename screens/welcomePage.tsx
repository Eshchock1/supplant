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
  
    state= {
      xp:10,
      chart:[ 5, 3, 1.5, 2.3, 3.2, 5, 2],
      total: 105.2,
      scannedItems:[
        {id:0,image:require('../assets/pie.jpeg'), rating:7, ingredients:['blueberry', 'bread']},
        {id:1,image:require('../assets/pizza.jpg'), rating:5, ingredients:['bread', 'cheese', 'tomatoes']},
        {id:2,image:require('../assets/salad.jpg'), rating:9, ingredients:['lettuce', 'tomatoes', 'cucumber']},
        {id:3,image:require('../assets/burger.jpg'), rating:2, ingredients:['cheese', 'beef', 'tomato', 'onion', 'lettuce']},
      ],
      days:[0,0], // I calc this
      maxVal:10, // I calc this
      avg:10,
    }

    componentDidMount(){
      this.setState({maxVal:Math.round(this.state.chart.sort()[this.state.chart.length -1] + 2)})
      this.setState({avg: Math.round(this.state.chart.reduce((a, b) => a + b, 0)/7 * 10)/10})
      let today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var dd2 = String(today.getDate()-7).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      this.setState({days:[mm + '/' + dd2, mm + '/' + dd]})

    }


      renderChart() {
        return (
          <LineChart
            yMin={0}
            yMax={this.state.maxVal}
            data={this.state.chart}
            style={{flex: 2}}
            curve={shape.curveMonotoneX}
            svg={{
              stroke: 'white',
              strokeWidth: 2,
            }}
            contentInset={{left: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), right: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}}>
            <Line
              key="x-axis"
              x1="0%"
              x2="100%"
              y1="100%"
              y2="100%"
              stroke={'white'}
              strokeDasharray={[5, 10]}
              strokeWidth={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5)}
            />
            <Line
              key="y-axis"
              x1="0%"
              x2="0%"
              y1="15%"
              y2="100%"
              stroke={'white'}
              strokeDasharray={[5, 10]}
              strokeWidth={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5)}
            />
          </LineChart>
        );
      }
    
      
render(){
  return (
      <View style={styles.container}>
      <View style={{flex:1, position:'absolute', top:0, bottom:0, left:0, right:0,}}>
      <View style={{flex:0.3, padding:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:"#4ba023"}}></View>
      <View style={{flex:0.7, backgroundColor:'#FDFDFD'}}></View>
      </View>
      <View style={{flex:1, marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), position:'absolute', top:0, bottom:0, left:0, right:0,}}>
      <Text style={styles.logo}>supplant</Text>
      <View style={{marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), flex:0.5, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      

      
      {this.state.xp < 25 && 
      <View style={{flex:0.35, flexDirection:'row',}}>
      <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
      <Image 
        style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/80),}}
        source={require('../assets/cactus.png')}
      />
      </View>
      <View style={{flex:0.8, paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/27), fontWeight:'bold'}}>Cactus </Text>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/16),}}>{this.state.xp}</Text></TouchableHighlight></Tooltip>
      </View>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/13),}}> Scan {25 - this.state.xp} more items for aloe vera</Text>
      <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)} progress={this.state.xp / 25} width={(Dimensions.get("window").width)*0.55} />
      </View>
      </View>}

      {this.state.xp >= 25 && this.state.xp < 75 &&
      <View style={{flex:0.35, flexDirection:'row',}}>
      <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
      <Image 
        style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/80),}}
        source={require('../assets/aloe.png')}
      />
      </View>
      <View style={{flex:0.8, paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/27), fontWeight:'bold'}}>Aloe Vera </Text>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/16),}}>{this.state.xp}</Text></TouchableHighlight></Tooltip>
      </View>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/13),}}> Scan {75 - this.state.xp} more items for seaweed</Text>
      <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)} progress={this.state.xp / 75} width={(Dimensions.get("window").width)*0.55} />
      </View>
      </View>}

      {this.state.xp >= 75 && 
      <View style={{flex:0.35, flexDirection:'row',}}>
      <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
      <Image 
        style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/80),}}
        source={require('../assets/seaweed.png')}
      />
      </View>
      <View style={{flex:0.8, paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/27), fontWeight:'bold'}}>Seaweed </Text>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/16),}}>{this.state.xp}</Text></TouchableHighlight></Tooltip>
      </View>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/13),}}> Scan {175 - this.state.xp} more items for master</Text>
      <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)} progress={this.state.xp / 175} width={(Dimensions.get("window").width)*0.55} />
      </View>
      </View>}
      
      
      



      <View style={{flex:0.65,}}>
      <View style={{flex:1, marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), backgroundColor:"#4ba023", borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>
      <View style={{flex:0.25, flexDirection:'row',}}>
        <View style={{flex:0.5, alignItems:'flex-start'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), fontWeight:'bold', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}}>{this.state.avg} <Text style={{fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>kg/day</Text></Text></View>
        <View style={{flex:0.5, alignItems:'flex-end'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), fontWeight:'bold', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), paddingRight:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}}>{this.state.total} <Text style={{fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>kg</Text></Text></View>
      </View>
      <View style={{flex:0.75}}>
        <View style={{flexDirection:'row', flex:0.9}}>
          <View style={{flex:0.1,}}>
          <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-end'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingRight:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>{this.state.maxVal}</Text></View>
          <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingRight:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5)}}>0</Text></View>
          </View>
          <View style={{flex:0.9,}}>
          <View style={{flex:1, paddingRight:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),}}>{this.renderChart()}</View>
          </View>
        </View>
        <View style={{flex:0.2, flexDirection:'row',}}>
          <View style={{flex:0.1}}></View>
          <View style={{flex:0.9, flexDirection:'row'}}>
          <View style={{flex:0.5, alignItems:'flex-start'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5),}}>{this.state.days[0]}</Text></View>
          <View style={{flex:0.5, alignItems:'flex-end'}}><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingRight:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>{this.state.days[1]}</Text></View>
          </View>
          </View>
      </View>
      </View>
      </View>
      </View>   
      <View>
      <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/13), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/17),marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)}}>Previously Scanned Items</Text>
      </View>
      <View style={{flex:0.4, width:"100%"}}>
        <ScrollView style={{padding:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingTop:0, paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/100),}}>
      


        {this.state.scannedItems.map((item) => 
          <View key={item.id.toString()} style={{flexDirection:'row', marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/120), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:0.25, justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/50), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/100),}}
        source={item.image}/>
      </View>
      <View style={{flex:0.75, paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),}}>
      <Text style={{color:'white', zIndex:20, position:'absolute', marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), marginLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), fontWeight:'bold'}}>{item.rating}</Text>
      
      {item.rating >= 7 &&
            <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), zIndex:10, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={item.rating/10} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/200)} />
          }
      {item.rating <= 3 &&
            <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), zIndex:10, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),}} color={'#de563e'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={item.rating/10} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/200)} />
          }
{item.rating > 3 && item.rating < 7 &&
            <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), zIndex:10, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),}} color={'#DAA520'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={item.rating/10} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/200)} />
          }

      
      
      <TouchableOpacity onPress={()=> Alert.alert("Ingredients:", item.ingredients.toString())}><Text style={{color:'#494949', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/6), fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), fontWeight:'bold'}}>View Ingredients</Text></TouchableOpacity>      
      {
        item.rating > 6? <Image 
        style={{position:'absolute', width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), bottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), right:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),}}
        source={require('../assets/lea.jpg')}/>:null
      }      
      </View>
      </View>          
          )}

        
        
        
      <View style={{height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),}}></View>
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
  },
  logo: {
    color: "white",
    marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
  },
});
