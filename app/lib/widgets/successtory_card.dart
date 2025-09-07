// widgets/success_story_card.dart
import 'package:flutter/material.dart';
import '../models/successstory_model.dart';

class SuccessStoryCard extends StatelessWidget {
  final SuccessStory story;
  const SuccessStoryCard({super.key, required this.story});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(10),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const CircleAvatar(child: Icon(Icons.person)),
                const SizedBox(width: 8),
                Text(story.title, style: const TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
            const SizedBox(height: 6),
            Text("by ${story.author}", style: const TextStyle(color: Colors.grey)),
            const SizedBox(height: 8),
            Text(story.description, style: const TextStyle(fontStyle: FontStyle.italic)),
            const SizedBox(height: 8),
            Text("Mentored by: ${story.mentor}", style: const TextStyle(color: Colors.blue)),
          ],
        ),
      ),
    );
  }
}
