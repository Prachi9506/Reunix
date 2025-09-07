import 'package:flutter/material.dart';
import 'package:reunix/screens/dashboard_screen.dart';
import 'package:reunix/screens/jobs_screen.dart';
import 'package:reunix/screens/events_screen.dart';
import 'package:reunix/screens/community_screen.dart';
import 'package:reunix/screens/mentor_screen.dart';

class MainnavigationScrren extends StatefulWidget {
  const MainnavigationScrren({super.key});

  @override
  State<MainnavigationScrren> createState() => _MainnavigationScrrenState();
}

class _MainnavigationScrrenState extends State<MainnavigationScrren> {
  int idx = 0;
  final List<Widget> _screens = [
    HomeScreen(),
    MentorScreen(),
    EventsScreen(),
    JobsScreen(),
    CommunityScreen(),
  ];
  final List<String> _title = [
    'Dashboard',
    'Mentorship',
    'Events',
    'Jobs',
    'Community'
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[idx],
      // appBar: AppBar(
      //     // actions: [Icon(Icons.groups, size: 100, color: Colors.white),],
      //   // backgroundColor: Colors.blueAccent,
      //   //  leading: Icon(Icons.school, size: 50, color: Colors.white),
      //    // title: Text(_title[idx],style: TextStyle(color: Colors.white54,fontWeight: FontWeight.bold),),
      // ),
      bottomNavigationBar: BottomNavigationBar(
          currentIndex: idx,
          selectedItemColor: Colors.blueAccent,
          unselectedItemColor: Colors.grey,
          onTap: (index){
            setState(() {
              idx = index;
            });
          },

          items: [
            BottomNavigationBarItem(icon: Icon(Icons.dashboard),
              label: 'Dashboard',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.people),
              label: 'Mentorship',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.event),
              label: 'Events',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.work),
              label: 'Jobs',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.messenger),
              label: 'Community',
            ),

          ]),
    );
  }
}
