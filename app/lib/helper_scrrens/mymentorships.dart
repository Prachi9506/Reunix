import 'package:flutter/material.dart';
import 'package:reunix/models/mentorship.dart';
import 'package:reunix/widgets/mentorship_card.dart';
class Mymentorships extends StatelessWidget {
   Mymentorships({super.key});
  List<MentorShip> dummyMentors = [
    MentorShip(
      name: "Shivank Tyagi",
      role: "Software Engineer @ Google",
      cmp_logo: "assets/logos/google.png",
      nextsession: "Tomorrow, 6 PM",
      onVideoCall: () => debugPrint("Video Call with Shivank"),
      onVoiceCall: () => debugPrint("Voice Call with Shivank"),
      onMessage: () => debugPrint("Message Shivank"),
    ),
    MentorShip(
      name: "Prachi Sharma",
      role: "Senior Software Engineer @ Amazon",
      cmp_logo: "assets/logos/amazon.png",
      nextsession: "Monday, 8 PM",
      onVideoCall: () => debugPrint("Video Call with Prachi"),
      onVoiceCall: () => debugPrint("Voice Call with Prachi"),
      onMessage: () => debugPrint("Message Prachi"),
    ),
    MentorShip(
      name: "Rohit Verma",
      role: "Full Stack Developer @ Microsoft",
      cmp_logo: "assets/logos/microsoft.png",
      nextsession: "Friday, 7 PM",
      onVideoCall: () => debugPrint("Video Call with Rohit"),
      onVoiceCall: () => debugPrint("Voice Call with Rohit"),
      onMessage: () => debugPrint("Message Rohit"),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(
          itemCount:dummyMentors.length,
          itemBuilder:(context,idx){
            return MentorshipCard(mentorship: dummyMentors[idx]);
      } ),
    );
  }
}
