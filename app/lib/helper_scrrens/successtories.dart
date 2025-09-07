import 'package:flutter/material.dart';
import 'package:reunix/models/successstory_model.dart';
import 'package:reunix/widgets/successtory_card.dart';
class Successtories extends StatelessWidget {
   Successtories({super.key});
  List<SuccessStory> dummyStories = [
    SuccessStory(
      title: "Landed SDE role at Amazon",
      author: "Prachi Sharma",
      description: "With guidance from alumni mentors, I improved my coding skills and aced the technical interviews.",
      mentor: "John Smith",
    ),
    SuccessStory(
      title: "Started successful startup",
      author: "Rahul Patel",
      description: "Alumni network helped me find co-founders and initial funding for my EdTech startup.",
      mentor: "Maria Garcia",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: dummyStories.length,
        itemBuilder:(context,idx){
          return SuccessStoryCard(story: dummyStories[idx]);
        });
  }
}
