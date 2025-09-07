import 'package:flutter/material.dart';
import 'package:reunix/models/savedjobs_model.dart';
import 'package:reunix/widgets/savedjobs_card.dart';
class SavedJobs extends StatelessWidget {
   SavedJobs({super.key});
  final List<SavedJobModel> savedJobs = [
    SavedJobModel(
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Full-time",
      savedTime: "1 day ago",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: savedJobs.length,
        itemBuilder: (context,idx){
          return SavedJobCard(job: savedJobs[idx], onApply: (){});
        });
  }
}
