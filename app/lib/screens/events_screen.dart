import 'package:flutter/material.dart';
import 'package:reunix/helper_scrrens/my_event.dart';
import 'package:reunix/helper_scrrens/upcoming_event.dart';
class EventsScreen extends StatefulWidget {
   EventsScreen({super.key});





  @override
  State<EventsScreen> createState() => _EventsScreenState();
}

class _EventsScreenState extends State<EventsScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  @override
  void initState() {
    // TODO: implement initState
    _tabController = TabController(length: 2, vsync: this);
    super.initState();

  }
  @override
  void dispose() {
    // TODO: implement dispose
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 0,
        bottom: TabBar(
            labelColor: Colors.blueAccent,
            unselectedLabelColor: Colors.grey,
            indicatorColor: Colors.blueAccent,
            indicatorWeight: 3,
            controller: _tabController,
            tabs: [
              Tab(text: "Upcoming Events"),
              Tab(text: "My Events"),

            ]),

      ),
      body: TabBarView(
        controller: _tabController,
          children:[
         UpcomingEvent(),
            MyEvent(),
      ]),
    );
  }
}
