import 'package:flutter/material.dart';
import 'package:reunix/helper_scrrens/browse_job.dart';
import 'package:reunix/helper_scrrens/myjob_app.dart';
import 'package:reunix/helper_scrrens/saved_jobs.dart';
class JobsScreen extends StatefulWidget {
  const JobsScreen({super.key});

  @override
  State<JobsScreen> createState() => _JobsScreenState();
}

class _JobsScreenState extends State<JobsScreen> with SingleTickerProviderStateMixin{
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
              Tab(text: "Browse Jobs"),

              Tab(text: "My Applications"),
              Tab(text: "Saved Jobs"),
            ]),

      ),
      body: TabBarView(
          controller: _tabController,
          children:[
            BrowseJob(),
            MyjobApp(),
            SavedJobs(),
          ]),
    );
  }
}
