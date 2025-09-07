import 'package:flutter/material.dart';
import '../models/savedjobs_model.dart';

class SavedJobCard extends StatelessWidget {
  final SavedJobModel job;
  final VoidCallback onApply;

  const SavedJobCard({super.key, required this.job, required this.onApply});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Row(
          children: [
            // Left Info
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(job.title,
                      style:
                      const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  Text(job.company,
                      style: const TextStyle(color: Colors.grey)),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.location_on, size: 14, color: Colors.grey),
                      const SizedBox(width: 4),
                      Text(job.location),
                      const SizedBox(width: 12),
                      Text(job.type),
                      const SizedBox(width: 12),
                      Text("Saved: ${job.savedTime}",
                          style: const TextStyle(color: Colors.grey)),
                    ],
                  ),
                ],
              ),
            ),
            // Apply Button
            ElevatedButton(
              onPressed: onApply,
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                backgroundColor: Colors.blueGrey[800],
              ),
              child: const Text("Apply"),
            )
          ],
        ),
      ),
    );
  }
}
