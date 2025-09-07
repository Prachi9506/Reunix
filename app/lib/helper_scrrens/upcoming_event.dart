import 'package:flutter/material.dart';
import 'package:reunix/widgets/upcomin_event_card.dart';

import '../models/upcoming_events_model.dart';
class UpcomingEvent extends StatelessWidget {
   UpcomingEvent({super.key});
   List<UpcomingEventsModel> dummyEvents = [
     UpcomingEventsModel(
       category: "Bootcamp",
       categoryColor: Colors.blue,
       title: "React Workshop: Basic React Patterns",
       description:
       "Learn from scratch React patterns and best practices from industry experts.",
       date: "September 15, 2025",
       time: "5:00 PM onwards",
       location: "E-Block, Room 101",
       participants: "74/100 participants",
       organizer: "CPByte Team",
       onRegister: () {
         debugPrint("Registered for React Workshop");
       },
     ),
     UpcomingEventsModel(
       category: "Career Talk & Placement Guidance",
       categoryColor: Colors.purple,
       title: "Placement Guidance: Breaking into FAANG",
       description: "Tips and strategies for landing jobs at top tech companies.",
       date: "October 2, 2025",
       time: "5:00 PM - 7:30 PM",
       location: "CRPC Hall, 1st Floor",
       participants: "182/500 participants",
       organizer: "CRPC Team",
       onRegister: () {
         debugPrint("Registered for Placement Guidance");
       },
     ),
     UpcomingEventsModel(
       category: "Hackathon",
       categoryColor: Colors.lightBlue,
       title: "SIH 25: Departmental Level Hackathon",
       description:
       "A gateway to the most prestigious National level hackathon of India.",
       date: "September 10, 2025",
       time: "All Day",
       location: "E-Block, CS Department",
       participants: "240/300 participants",
       organizer: "CS Department",
       onRegister: () {
         debugPrint("Registered for Hackathon");
       },
     ),
   ];


   @override
  final TextEditingController serachController = TextEditingController();
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).unfocus(),
      child: Column(
          children: [
      Padding(padding: EdgeInsets.all(10),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(20),
        ),
        margin: EdgeInsets.only(left:5,right: 5,top:5),
        child: TextField(
          cursorColor: Colors.blueAccent,
          controller: serachController,
          style: const TextStyle(color: Colors.white),

          decoration: InputDecoration(
              border: InputBorder.none,
              prefixIcon: Icon(Icons.search),
              labelText: 'Search by name,skill or company',
              labelStyle: const TextStyle(color: Colors.blueAccent),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(15),
                borderSide: BorderSide(color: Colors.black26),

              ),
              focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.blueAccent,width: 2),
                  borderRadius: BorderRadius.circular(15)
              )
          ),
        ),
      ),

    ),
     Expanded(
       child: ListView.builder(
       itemCount: dummyEvents.length,
           itemBuilder:(context,idx){
             return UpcominEventCard(upmodel: dummyEvents[idx]);
           } ),
     )
    ],
    ));
  }

}
