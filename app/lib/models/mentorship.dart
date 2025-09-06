import 'package:flutter/material.dart';
class MentorShip{
  final String name;
  final String role;
  final String cmp_logo;
  final String nextsession;
  final VoidCallback onVideoCall;
  final VoidCallback onVoiceCall;
  final VoidCallback onMessage;
  MentorShip({
    required this.name,
    required this.role,
    required this.cmp_logo,
    required this.nextsession,
    required this.onVideoCall,
    required this.onVoiceCall,
    required this.onMessage,
});
}