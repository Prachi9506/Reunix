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
    MentorShip(
      name: "Naitik Gupta",
      role: "Software Developer @ Google",
      cmp_logo: "assets/logos/google.png",
      nextsession: "Saturday, 6 PM",
      onVideoCall: () => debugPrint("Video Call with Naitik"),
      onVoiceCall: () => debugPrint("Voice Call with Naitik"),
      onMessage: () => debugPrint("Message Naitik"),
    ),

    MentorShip(
      name: "Payal Goswami",
      role: "Data Scientist @ Amazon",
      cmp_logo: "assets/logos/amazon.png",
      nextsession: "Monday, 8 PM",
      onVideoCall: () => debugPrint("Video Call with Payal"),
      onVoiceCall: () => debugPrint("Voice Call with Payal"),
      onMessage: () => debugPrint("Message Payal"),
    ),

    MentorShip(
      name: "Prakhar Srivastav",
      role: "Frontend Engineer @ Meta",
      cmp_logo: "assets/logos/meta.png",
      nextsession: "Wednesday, 5 PM",
      onVideoCall: () => debugPrint("Video Call with Prakhar"),
      onVoiceCall: () => debugPrint("Voice Call with Prakhar"),
      onMessage: () => debugPrint("Message Prakhar"),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount:dummyMentors.length,
        itemBuilder:(context,idx){
          return MentorshipCard(mentorship: dummyMentors[idx]);
    } );
  }
}
