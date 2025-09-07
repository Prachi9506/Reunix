import 'package:flutter/material.dart';
import 'package:reunix/models/browse_model.dart';
import 'package:reunix/widgets/browse_job_card.dart';
class BrowseJob extends StatelessWidget {
   BrowseJob({super.key});

  List<JobModel> jobs = [
    JobModel(
      companyName: "Microsoft",
      jobTitle: "Frontend Developer",
      location: "Bangalore, India",
      experience: "2-4 years",
      salary: "₹50-54 LPA",
      applicants: 23,
      description: "We are looking for a skilled Frontend Developer to join our dynamic team...",
      skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      postedBy: "Prachi Sharma",
      postedTime: "2 days ago",
      logoAsset: "assets/logos/microsoft.png",
    ),
    JobModel(
      companyName: "Amazon",
      jobTitle: "Data Scientist Intern",
      location: "Mumbai, India",
      experience: "0-1 years",
      salary: "₹25,000/month",
      applicants: 67,
      description: "Join our data science team to work on cutting-edge ML projects...",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      postedBy: "Ravi Kumar",
      postedTime: "3 days ago",
      logoAsset: "assets/logos/amazon.png",
    ),
    JobModel(
      companyName: "Google",
      jobTitle: "Software Engineer",
      location: "Hyderabad, India",
      experience: "1-3 years",
      salary: "₹45-50 LPA",
      applicants: 41,
      description: "Work on scalable systems and contribute to core Google products...",
      skills: ["C++", "Java", "System Design", "Algorithms"],
      postedBy: "Ananya Verma",
      postedTime: "1 week ago",
      logoAsset: "assets/logos/google.png",
    ),
    JobModel(
      companyName: "Meta",
      jobTitle: "Backend Engineer",
      location: "Remote, India",
      experience: "3-5 years",
      salary: "₹60-65 LPA",
      applicants: 12,
      description: "We are building high-performance backend systems for global products...",
      skills: ["Node.js", "GraphQL", "Databases", "Microservices"],
      postedBy: "Sahil Mehta",
      postedTime: "5 days ago",
      logoAsset: "assets/logos/meta.png",
    ),
    JobModel(
      companyName: "Netflix",
      jobTitle: "UI/UX Designer",
      location: "Delhi, India",
      experience: "2-3 years",
      salary: "₹40-45 LPA",
      applicants: 30,
      description: "Design engaging and user-friendly interfaces for our streaming platform...",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      postedBy: "Nisha Gupta",
      postedTime: "6 days ago",
      logoAsset: "assets/logos/netflix.jpg",
    ),
  ];
   final TextEditingController serachController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).unfocus(),
      child: Column(
          children: [
      Padding(padding: EdgeInsets.all(10),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(20),
        ),
        margin: EdgeInsets.only(left:5,right: 5,top:5),
        child: TextField(
          cursorColor: Colors.blueAccent,
          controller: serachController,
          style: const TextStyle(color: Colors.white),

          decoration: InputDecoration(
              border: InputBorder.none,
              prefixIcon: Icon(Icons.search),
              labelText: 'Search by name,skill or company',
              labelStyle: const TextStyle(color: Colors.blueAccent),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(15),
                borderSide: BorderSide(color: Colors.black26),

              ),
              focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.blueAccent,width: 2),
                  borderRadius: BorderRadius.circular(15)
              )
          ),
        ),
      ),
    ),
    Expanded(
      child: ListView.builder(
          itemCount: jobs.length,
          itemBuilder: (context,idx){
            return JobCard(job: jobs[idx]);
          }),
    ),
  ]),
    );

  }
}
