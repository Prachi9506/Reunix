import 'package:flutter/material.dart';
import 'package:reunix/models/myevent_model.dart';
import 'package:reunix/widgets/myevent_card.dart';

class MyEvent extends StatelessWidget {
  MyEvent({super.key});
  List<MyeventModel> pastEvents = [
    MyeventModel(
      title: "Mock Interview Session",
      date: "December 25, 2024",
      time: "3:00 PM",
      feedback: "Great session! Improved my confidence significantly.",
      attended: true,
    ),
    MyeventModel(
      title: "Python Fundamentals Workshop",
      date: "December 20, 2024",
      time: "2:00 PM",
      feedback: "Excellent introduction to Python programming.",
      attended: true,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: pastEvents.length,
        itemBuilder: (context,idx){
         return PastEventCard(event: pastEvents[idx]);
        });
  }
}
