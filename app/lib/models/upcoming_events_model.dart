import 'package:flutter/material.dart';
 class UpcomingEventsModel{
   final String category;
   final Color categoryColor;
   final String title;
   final String description;
   final String date;
   final String time;
   final String location;
   final String participants;
   final String organizer;
   final VoidCallback onRegister;

   UpcomingEventsModel({
     required this.category,
     required this.categoryColor,
     required this.title,
     required this.description,
     required this.date,
     required this.time,
     required this.location,
     required this.participants,
     required this.organizer,
     required this.onRegister,
   });
 }