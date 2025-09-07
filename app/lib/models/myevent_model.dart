import 'package:flutter/material.dart';
class MyeventModel {
  final String title;
  final String date;
  final String time;
  final String feedback; // optional feedback/notes
  final bool attended;

  MyeventModel({
    required this.title,
    required this.date,
    required this.time,
    required this.feedback,
    this.attended = false,
  });
}
