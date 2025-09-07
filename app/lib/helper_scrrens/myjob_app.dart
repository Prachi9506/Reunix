import 'package:flutter/material.dart';
import 'package:reunix/models/application_model.dart';
import 'package:reunix/widgets/application_card.dart';
class MyjobApp extends StatelessWidget {
   MyjobApp({super.key});
  final List<ApplicationModel> applications = [
    ApplicationModel(
      title: "Software Engineer",
      company: "Google",
      appliedDate: "December 20, 2024",
      currentStage: "Technical Interview",
      status: "Under Review",
    ),
    ApplicationModel(
      title: "Frontend Developer",
      company: "Microsoft",
      appliedDate: "December 15, 2024",
      currentStage: "HR Round",
      status: "Shortlisted",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: applications.length,
        itemBuilder:(context,idx){
          return ApplicationCard(application: applications[idx]);
        } );
  }
}
