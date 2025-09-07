class JobModel {
  final String companyName;
  final String jobTitle;
  final String location;
  final String experience;
  final String salary;
  final int applicants;
  final String description;
  final List<String> skills;
  final String postedBy;
  final String postedTime;
  final String logoAsset; // <-- Local asset path

  JobModel({
    required this.companyName,
    required this.jobTitle,
    required this.location,
    required this.experience,
    required this.salary,
    required this.applicants,
    required this.description,
    required this.skills,
    required this.postedBy,
    required this.postedTime,
    required this.logoAsset,
  });
}
