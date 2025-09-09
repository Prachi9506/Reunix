import 'package:flutter/material.dart';
import 'package:reunix/helper_scrrens/personal_info.dart';
import 'package:reunix/helper_scrrens/profile_page.dart';
import 'package:reunix/screens/Mainnavigation_scrren.dart';
import 'package:reunix/screens/dashboard_screen.dart';
import 'package:reunix/screens/login_screen.dart';
import 'package:reunix/screens/register.dart';
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
        '/profile':(_) => ProfilePage(),
        '/personal':(_) => PersonalInfoPage(),
        '/home': (_) => AdminDashboard(),
        '/login':(_) => LoginScreen(),
        '/mainnavigation':(_) => MainnavigationScrren(),
        '/register':(_) => Register(),
      },
    );
  }
}
