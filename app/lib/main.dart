import 'package:flutter/material.dart';
import 'package:reunix/screens/home_screen.dart';
import 'package:reunix/screens/login_screen.dart';
import 'package:reunix/screens/splash_screen.dart';


void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SplashScreen(),
      routes: {
        '/home': (_) => HomeScreen(),
        '/login':(_) => LoginScreen(),
      },
    );
  }
}
