import 'package:flutter/material.dart';
import 'package:reunix/helper_scrrens/findmentor.dart';
import 'package:reunix/helper_scrrens/mymentorships.dart';
class MentorScreen extends StatefulWidget {
  const MentorScreen({super.key});

  @override
  State<MentorScreen> createState() => _MentorScreenState();
}

class _MentorScreenState extends State<MentorScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
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
        // title: Text("Mentor"),
        toolbarHeight: 0,
        bottom: TabBar(
          controller: _tabController,
            tabs: [
               Tab(text: "Find Mentors",),
              Tab(text: "My Mentorships",),
            ]),
      ),
      body: TabBarView(
        controller: _tabController,
          children: [
             Findmentor(),
            Mymentorships(),
          ]),
    );
  }
}
