import 'package:flutter/material.dart';
import 'package:reunix/models/browse_model.dart';

class JobCard extends StatelessWidget {
  final JobModel job;

  const JobCard({Key? key, required this.job}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(

      margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      shape: RoundedRectangleBorder(
        side: BorderSide(
          color: Colors.black,
          width: 2,
        ),
          borderRadius: BorderRadius.circular(12)),
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Top Row: Logo + Title + Company
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Image.asset(job.logoAsset, height: 40, width: 40), // <-- Local asset
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(job.jobTitle,
                          style: const TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold)),
                      Text(job.companyName,
                          style: TextStyle(color: Colors.grey[700])),
                    ],
                  ),
                ),
                Icon(Icons.bookmark_border),
                SizedBox(width: 8),
                Icon(Icons.open_in_new),
              ],
            ),
             SizedBox(height: 8),

            // Location, Experience, Salary, Applicants
            Wrap(
              spacing: 12,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.location_on, size: 16, color: Colors.grey),
                    SizedBox(width: 4),
                    Text(job.location),
                  ],
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.work_outline, size: 16, color: Colors.grey),
                    SizedBox(width: 4),
                    Text(job.experience),
                  ],
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.attach_money, size: 16, color: Colors.grey),
                    SizedBox(width: 4),
                    Text(job.salary),
                  ],
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.people, size: 16, color: Colors.grey),
                    SizedBox(width: 4),
                    Text("${job.applicants} applicants"),
                  ],
                ),
              ],
            ),

             SizedBox(height: 8),

            // Description
            Text(
              job.description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: Colors.grey[700]),
            ),
            const SizedBox(height: 8),

            // Skills Chips
            Wrap(
              spacing: 8,
              children: job.skills
                  .map((skill) => Chip(
                label: Text(skill),
                backgroundColor: Colors.blue.shade50,
              ))
                  .toList(),
            ),
            const SizedBox(height: 8),

            // Footer
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text("Posted by ${job.postedBy} • ${job.postedTime}",
                    style: TextStyle(color: Colors.grey[600], fontSize: 12)),
                ElevatedButton(
                  onPressed: () {},
                  child: const Text("Apply Now"),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}