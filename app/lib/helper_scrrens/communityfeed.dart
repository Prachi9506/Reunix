import 'package:flutter/material.dart';
import 'package:reunix/models/community_post_model.dart';
import 'package:reunix/widgets/post_card.dart';

class Communityfeed extends StatelessWidget {
 Communityfeed({super.key});
  List<Post> dummyPosts = [
    Post(
      author: "Prachi Sharma",
      role: "Senior Software Engineer at Google",
      timeAgo: "2 hours ago",
      type: "Blog",
      title: "My Journey from College to Google: Lessons Learned",
      content: "When I graduated 5 years ago, I never imagined I would be working at Google...",
      tags: ["Career", "Google", "Software Engineering"],
      likes: 45,
      comments: 12,
      shares: 8,
    ),
    Post(
      author: "Payal Goswami",
      role: "Product Manager at Microsoft",
      timeAgo: "1 day ago",
      type: "Video",
      title: "How I Prepared for PM Interviews",
      content: "Sharing my strategies for cracking Microsoft PM interview...",
      tags: ["PM", "Microsoft", "Interviews"],
      likes: 60,
      comments: 18,
      shares: 12,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
         label: Text('Create Post'),
          icon: Icon(Icons.add),
          onPressed: (){}),
      body: ListView.builder(
          itemCount: dummyPosts.length,
          itemBuilder:(context,idx){
            return PostCard(post: dummyPosts[idx]);
          }),
    );
  }
}

