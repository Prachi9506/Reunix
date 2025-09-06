import 'package:flutter/material.dart';
import '../models/mentor_model.dart';

class MentorCard extends StatelessWidget {
  final Mentor mentor;

   MentorCard({required this.mentor});

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: const BorderSide(color: Colors.grey),
      ),
      margin: const EdgeInsets.only(bottom: 16,left: 10,right: 10),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Name & role
            Text(
              mentor.name,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            Text("${mentor.role} at ${mentor.company}"),
            const SizedBox(height: 8),

            // Description
            Text(
              mentor.description,
              style: const TextStyle(color: Colors.black87),
            ),
            const SizedBox(height: 12),

            // Skills
            Wrap(
              spacing: 8,
              children: mentor.skills
                  .map((skill) => Chip(
                label: Text(skill),
                backgroundColor: Colors.blue.shade50,
              ))
                  .toList(),
            ),
            const SizedBox(height: 12),

            // Rating, sessions, exp
            Row(
              children: [
                const Icon(Icons.star, color: Colors.amber, size: 18),
                Text("${mentor.rating}"),
                const SizedBox(width: 12),
                Text("${mentor.sessions} sessions"),
                const SizedBox(width: 12),
                Text("${mentor.experience} yrs exp"),
              ],
            ),
            const SizedBox(height: 12),

            // Buttons
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.black87,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    child: const Text("Request Mentorship"),
                  ),
                ),
                const SizedBox(width: 12),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.message_outlined),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
