import 'package:flutter/material.dart';


class ApplicationModel {
  final String title;
  final String company;
  final String appliedDate;
  final String currentStage;
  final String status; // e.g. "Under Review", "Shortlisted"

  ApplicationModel({
    required this.title,
    required this.company,
    required this.appliedDate,
    required this.currentStage,
    required this.status,
  });
}
