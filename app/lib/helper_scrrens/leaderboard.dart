import 'package:flutter/material.dart';
import 'package:reunix/models/leaderboard_model.dart';
import 'package:reunix/widgets/learderboard_card.dart';
 class Leaderboard extends StatelessWidget {
    Leaderboard({super.key});
   List<LeaderboardEntry> dummyLeaderboard = [
     LeaderboardEntry(rank: 1, name: "Prachi Sharma", role: "Top Mentor", points: 2450),
     LeaderboardEntry(rank: 2, name: "Payal Goswami", role: "Community Leader", points: 2180),
     LeaderboardEntry(rank: 3, name: "Piyush Goel", role: "Knowledge Sharer", points: 1950),
   ];
 
   @override
   Widget build(BuildContext context) {
     return ListView.builder(
         itemCount: dummyLeaderboard.length,

         itemBuilder: (context,idx){
           return LeaderboardCard(entry: dummyLeaderboard[idx]);
         });
   }
 }
 