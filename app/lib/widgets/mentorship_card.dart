import 'package:flutter/material.dart';
import 'package:reunix/models/mentorship.dart';

class MentorshipCard extends StatelessWidget {
  final MentorShip mentorship;
  const MentorshipCard({super.key, required this.mentorship});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Company Logo
            ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: Image.asset(
                mentorship.cmp_logo,
                width: 40,
                height: 40,
                fit: BoxFit.contain,
              ),
            ),
            const SizedBox(width: 12),

            // ✅ Expanded Text Column
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    mentorship.name,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                  Text(
                    mentorship.role,
                    style: const TextStyle(color: Colors.grey),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    "Next: ${mentorship.nextsession}",
                    style: const TextStyle(color: Colors.blue),
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),

            // ✅ Fixed-size Buttons Row
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                _actionButton(Icons.videocam, mentorship.onVideoCall),
                const SizedBox(width: 6),
                _actionButton(Icons.phone, mentorship.onVoiceCall),
                const SizedBox(width: 6),
                _actionButton(Icons.chat, mentorship.onMessage),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _actionButton(IconData icon, VoidCallback onPressed) {
    return InkWell(
      onTap: onPressed,
      borderRadius: BorderRadius.circular(12),
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.blueGrey[800],
          borderRadius: BorderRadius.circular(12),
        ),
        child: Icon(icon, color: Colors.white, size: 20),
      ),
    );
  }
}
