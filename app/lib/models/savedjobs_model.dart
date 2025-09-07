class SavedJobModel {
  final String title;
  final String company;
  final String location;
  final String type; // e.g. Full-time, Part-time
  final String savedTime; // e.g. "1 day ago"

  SavedJobModel({
    required this.title,
    required this.company,
    required this.location,
    required this.type,
    required this.savedTime,
  });
}
