import 'package:flutter/material.dart';
import 'package:reunix/models/upcoming_events_model.dart';

class UpcominEventCard extends StatelessWidget {
  final UpcomingEventsModel upmodel;
  UpcominEventCard({required this.upmodel});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.only(left: 10,right: 10,bottom: 15),
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: BorderSide(
          color: Colors.black,
          width: 1,
        )
      ),

      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Category Tag
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: upmodel.categoryColor.withOpacity(0.2),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                upmodel.category,
                style: TextStyle(
                  color: upmodel.categoryColor,
                  fontWeight: FontWeight.bold,
                  fontSize: 12,
                ),
              ),
            ),
            const SizedBox(height: 10),

            // Title
            Text(
              upmodel.title,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),

            // Description
            Text(
              upmodel.description,
              style: TextStyle(color: Colors.grey[700]),
            ),
            const SizedBox(height: 12),

            // Event Details
            Row(
              children: [
                const Icon(Icons.calendar_today, size: 16),
                const SizedBox(width: 6),
                Text(upmodel.date),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              children: [
                const Icon(Icons.access_time, size: 16),
                const SizedBox(width: 6),
                Text(upmodel.time),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              children: [
                const Icon(Icons.location_on, size: 16),
                const SizedBox(width: 6),
                Text(upmodel.location),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              children: [
                const Icon(Icons.people, size: 16),
                const SizedBox(width: 6),
                Text(upmodel.participants),
              ],
            ),
            const SizedBox(height: 12),

            // Organizer + Button
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flexible(
                  child: Text(
                    "by ${upmodel.organizer}",
                    style: TextStyle(color: Colors.grey[600]),
                    overflow: TextOverflow.ellipsis, // prevents overflow
                  ),
                ),
                ElevatedButton(
                  onPressed: upmodel.onRegister,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blueGrey[800],
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: const Text("Register"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

