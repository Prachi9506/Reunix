import 'package:flutter/material.dart';
class Mentor {
  final String name;
  final String role;
  final String company;
  final String description;
  final List<String> skills;
  final double rating;
  final int sessions;
  final int experience;

  Mentor({
    required this.name,
    required this.role,
    required this.company,
    required this.description,
    required this.skills,
    required this.rating,
    required this.sessions,
    required this.experience,
  });
}
