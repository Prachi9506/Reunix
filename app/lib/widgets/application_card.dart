import 'package:flutter/material.dart';
import '../models/application_model.dart';

class ApplicationCard extends StatelessWidget {
  final ApplicationModel application;

  const ApplicationCard({super.key, required this.application});

  @override
  Widget build(BuildContext context) {
    Color statusColor = application.status == "Under Review"
        ? Colors.yellow.shade100
        : Colors.green.shade100;

    Color textColor = application.status == "Under Review"
        ? Colors.orange
        : Colors.green;

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
                  Text(application.title,
                      style:
                      const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  Text(application.company,
                      style: const TextStyle(color: Colors.grey)),
                  const SizedBox(height: 8),
                  Wrap(
                    crossAxisAlignment: WrapCrossAlignment.center,
                      children: [
                        const Icon(Icons.calendar_today, size: 14, color: Colors.grey),
                        const SizedBox(width: 4),
                        Text("Applied: ${application.appliedDate}",
                            style: const TextStyle(fontSize: 12)),
                        const SizedBox(width: 12),
                        Text("Current Stage: ${application.currentStage}",
                            style: const TextStyle(fontSize: 12)),
                      ],
                    ),
                ],
              ),
            ),
            // Status Badge
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color: statusColor,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                application.status,
                style: TextStyle(color: textColor, fontWeight: FontWeight.bold),
              ),
            )
          ],
        ),
      ),
    );
  }
}
