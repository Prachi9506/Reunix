import 'package:flutter/material.dart';
import 'dart:async';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(Duration(seconds: 10), () {
      Navigator.pushReplacementNamed(context, '/login');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueAccent,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // App Icon
            //Icon(Icons.school),
            Icon(Icons.groups, size: 100, color: Colors.white),
            SizedBox(height: 20),

            // App Name
            Text(
              "Reunix",
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),

            SizedBox(height: 10),

            // Tagline
            Text(
              "Connect. Mentor. Grow.",
              style: TextStyle(
                fontSize: 16,
                color: Colors.white70,
              ),
            ),

          ],
        ),
      ),
    );
  }
}
