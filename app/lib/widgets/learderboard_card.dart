// widgets/leaderboard_card.dart
import 'package:flutter/material.dart';
import '../models/leaderboard_model.dart';

class LeaderboardCard extends StatelessWidget {
  final LeaderboardEntry entry;
  const LeaderboardCard({super.key, required this.entry});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: CircleAvatar(
        child: Text("${entry.rank}"),
      ),
      title: Text(entry.name, style: const TextStyle(fontWeight: FontWeight.bold)),
      subtitle: Text(entry.role),
      trailing: Text("${entry.points}", style: const TextStyle(color: Colors.blue, fontWeight: FontWeight.bold)),
    );
  }
}
