import 'package:flutter/material.dart';
import 'package:reunix/helper_scrrens/communityfeed.dart';
import 'package:reunix/helper_scrrens/leaderboard.dart';
import 'package:reunix/helper_scrrens/successtories.dart';
class CommunityScreen extends StatefulWidget {
  const CommunityScreen({super.key});

  @override
  State<CommunityScreen> createState() => _CommunityScreenState();

}

class _CommunityScreenState extends State<CommunityScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  @override
  void initState() {
    // TODO: implement initState
    _tabController = TabController(length: 3, vsync: this);
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
    return  Scaffold(
      appBar: AppBar(
        toolbarHeight: 0,
        bottom: TabBar(
            labelColor: Colors.blueAccent,
            unselectedLabelColor: Colors.grey,
            indicatorColor: Colors.blueAccent,
            indicatorWeight: 3,
            controller: _tabController,
            tabs: [
              Tab(text: "Community Feed"),
              Tab(text: "Success Stories"),
              Tab(text: "Leaderboard"),
            ]),

      ),
      body: TabBarView(
          controller: _tabController,
          children:[
            Communityfeed(),
            Successtories(),
            Leaderboard(),
          ]),
    );
  }
}
