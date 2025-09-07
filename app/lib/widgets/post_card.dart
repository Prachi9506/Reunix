// widgets/post_card.dart
import 'package:flutter/material.dart';
import '../models/community_post_model.dart';

class PostCard extends StatelessWidget {
  final Post post;
  const PostCard({super.key, required this.post});

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
            // Header
            Row(
              children: [
                const CircleAvatar(child: Icon(Icons.person)),
                const SizedBox(width: 8),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(post.author, style: const TextStyle(fontWeight: FontWeight.bold)),
                    Text("${post.role} • ${post.timeAgo}", style: const TextStyle(color: Colors.grey)),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 8),

            // Type
            Row(
              children: [
                const Icon(Icons.article, size: 16, color: Colors.blue),
                const SizedBox(width: 4),
                Text(post.type, style: const TextStyle(color: Colors.blue)),
              ],
            ),
            const SizedBox(height: 6),

            // Title
            Text(post.title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 4),

            // Content preview
            Text(post.content, maxLines: 2, overflow: TextOverflow.ellipsis),

            const SizedBox(height: 6),

            // Tags
            Wrap(
              spacing: 6,
              children: post.tags.map((t) => Chip(label: Text(t))).toList(),
            ),

            const Divider(),

            // Stats
            Row(
              children: [
                Icon(Icons.favorite_border, size: 18, color: Colors.grey[700]),
                const SizedBox(width: 4),
                Text("${post.likes}"),
                const SizedBox(width: 16),
                Icon(Icons.comment, size: 18, color: Colors.grey[700]),
                const SizedBox(width: 4),
                Text("${post.comments}"),
                const SizedBox(width: 16),
                Icon(Icons.share, size: 18, color: Colors.grey[700]),
                const SizedBox(width: 4),
                Text("${post.shares}"),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
