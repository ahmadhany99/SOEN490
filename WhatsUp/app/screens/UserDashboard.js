import React from "react";
import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Links from "../components/Links";
import Screen from "../components/Screen";
import ScreenSubtitle from "../components/ScreenSubtitle";
import ScreenTitle from "../components/ScreenTitle";
import Search from "../components/Search";
import SmallButton from "../components/SmallButton";
import NavButton from "../components/NavButton";
import Event from "../components/Event";
import FilterButton from "../components/FilterButton";
import School from "../assets/Icons/stringio.png";// Temporary Placeholder
import { Ionicons } from '@expo/vector-icons';

function UserDashboard() {
  var date = new Date();
  const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  var today = "Today's " + (months[date.getMonth()]) + " " + date.getDate();
  var user = "TEMP";
  var welcome = "Welcome, " + user + "!";

  const events = [
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
    {
      image: {School},
      title: 'Orientation Week',
      organizer: 'Concordia University',
      date: 'May 21, 2022',
    },
  ];


  return (
    <Screen style={{padding: 20, backgroundColor: '#F5F5F5'}}>
      <View style={{left: '1.5%', marginTop: '5%', height: '101%'}}>
      <View style={{flexDirection: 'row'}}>
        <SmallButton image = 'pin' title="Location, QC" onPress={() => console.log("Location")} size={'8%'}/>
        <View style={{position: 'absolute', right: '4%'}}>
            <SmallButton image = 'notifications' title="" onPress={() => console.log("Notification")} size={4}/>
        </View>
      </View>

      <Text style={styles.date}>{today}</Text>

      <Text style={styles.title}>{welcome}</Text>

      <View style={{flexDirection: 'row'}} >
        <Search placeholder="Search for..." />
        <FilterButton image='ios-options' onPress={() => console.log("Filters")}/>
      </View>

      <Text style={styles.text}>Popular Events</Text>

      <View style={{height: '63%', width:'101%'}}>
        <ScrollView>
            {events.map((n) => {
                return (
                <Event image={School} title={n.title} organizer={n.organizer} date={n.date} onPress={() => console.log("Event")}/>
                );
            })}
        </ScrollView>
      </View>
      </View>


      <View style={styles.container}>
        <NavButton image='ios-home' onPress={() => console.log("Home")} position='8%'/>
        <NavButton image='ios-barcode-outline' onPress={() => console.log("Ticket")} position='23%'/>
        <NavButton image='ios-bookmark-outline' onPress={() => console.log("Bookmark")} position='38%'/>
        <NavButton image='md-person' onPress={() => console.log("Profile")} position='53%'/>
      </View>
    </Screen>
  );
}


const styles = StyleSheet.create({
    organizer: {
        alignItems: 'flex-start',
        width: '50%'
    },
    organizertwo: {
        alignItems: 'flex-start',
        width: '30%'
    },
    title:{
       color: '#100101',
       fontSize: 20,
       fontWeight: 'bold',
    },
    date:{
       color: '#969696',
       marginTop: '6%',
       fontSize: 12,
    },
    text: {
        color: '#100101',
        marginTop: '6%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        position: 'absolute',
        bottom: '-1.4%',
        backgroundColor: '#FFFFFF',
        borderColor: '#969696',
        paddingVertical: 7,
        paddingHorizontal: 12,
        width: '113%',
        height: '9%',
        marginVertical: '1.4%',
        borderStyle: 'solid',
        borderWidth: .25,
        shadowColor: 'black',
        flexDirection: 'row',
    }
});

export default UserDashboard;