// models/post.dart
class Post {
  final String author;
  final String role;
  final String timeAgo;
  final String type; // Blog / Video / Article
  final String title;
  final String content;
  final List<String> tags;
  final int likes;
  final int comments;
  final int shares;

  Post({
    required this.author,
    required this.role,
    required this.timeAgo,
    required this.type,
    required this.title,
    required this.content,
    required this.tags,
    required this.likes,
    required this.comments,
    required this.shares,
  });
}
