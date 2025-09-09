import 'package:flutter/material.dart';

class PersonalInfoPage extends StatelessWidget {
  const PersonalInfoPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      appBar: AppBar(
        title: const Text("Personal Info"),
        backgroundColor: Colors.blueAccent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 🔹 Profile Header
            Container(
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Colors.blue, Colors.purple],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(12),
              ),
              padding: const EdgeInsets.all(16),
              child: Row(
                children: [
                  const CircleAvatar(
                    radius: 40,
                    backgroundImage: AssetImage("assets/logos/profi.jpg"),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text("Admin User",
                            style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Colors.white)),
                        Text("Admin",
                            style: TextStyle(
                                fontSize: 14,
                                color: Colors.white70,
                                fontWeight: FontWeight.w500)),
                      ],
                    ),
                  ),
                  ElevatedButton.icon(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: Colors.blue,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8)),
                    ),
                    icon: const Icon(Icons.edit, size: 16),
                    label: const Text("Edit Profile"),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),

            // 🔹 Basic Info & Academic Info (responsive)
            LayoutBuilder(
              builder: (context, constraints) {
                final isWide = constraints.maxWidth >= 600; // tweak breakpoint
                if (isWide) {
                  // side-by-side on wide screens
                  return Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: _buildInfoCard(
                          "Basic Information",
                          [
                            _infoRow(Icons.person, "Admin User"),
                            _infoRow(Icons.email, "shivankty114@gmail.com"),
                            _infoRow(Icons.school, "Class of 2025"),
                            _infoRow(Icons.computer, "Computer Science"),
                            const Text("Computer Science Student",
                                style: TextStyle(color: Colors.black87)),
                          ],
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: _buildInfoCard(
                          "Academic Information",
                          [
                            const Text("Graduation Year: 2025"),
                            const SizedBox(height: 8),
                            const Text("Branch: Computer Science"),
                            const SizedBox(height: 8),
                            const Text("Role: Admin"),
                          ],
                        ),
                      ),
                    ],
                  );
                } else {
                  // stacked vertically on narrow screens
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      _buildInfoCard(
                        "Basic Information",
                        [
                          _infoRow(Icons.person, "Admin User"),
                          _infoRow(Icons.email, "shivankty114@gmail.com"),
                          _infoRow(Icons.school, "Class of 2025"),
                          _infoRow(Icons.computer, "Computer Science"),
                          const Text("Computer Science Student",
                              style: TextStyle(color: Colors.black87)),
                        ],
                      ),
                      const SizedBox(height: 16),
                      _buildInfoCard(
                        "Academic Information",
                        [
                          const Text("Graduation Year: 2025"),
                          const SizedBox(height: 8),
                          const Text("Branch: Computer Science"),
                          const SizedBox(height: 8),
                          const Text("Role: Admin"),
                        ],
                      ),
                    ],
                  );
                }
              },
            ),

            const SizedBox(height: 20),

            // 🔹 Skills & Expertise
            _buildInfoCard(
              "Skills & Expertise",
              [
                Wrap(
                  spacing: 8,
                  children: [
                    _chip("React"),
                    _chip("Node.js"),
                    _chip("Python"),
                    _chip("MongoDB"),
                  ],
                )
              ],
            ),
            const SizedBox(height: 20),

            // 🔹 Social Links
            _buildInfoCard(
              "Social Links",
              [
                Row(
                  children: const [
                    Icon(Icons.link, color: Colors.blue),
                    SizedBox(width: 8),
                    Text("LinkedIn Profile",
                        style: TextStyle(color: Colors.blue)),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: const [
                    Icon(Icons.code, color: Colors.black),
                    SizedBox(width: 8),
                    Text("GitHub Profile"),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 20),

            // 🔹 Achievements & Impact
            Row(
              children: [
                Expanded(
                  child: _buildInfoCard(
                    "Achievements",
                    [
                      _highlightCard("🏅 Mentor of the Month"),
                      const SizedBox(height: 8),
                      _highlightCard("⭐ Top Contributor"),
                    ],
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildInfoCard(
                    "Your Impact",
                    [
                      const Text("Mentorship Sessions: 3"),
                      const Text("Events Hosted: 1"),
                      const Text("Community Points: 1250"),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  // 🔹 Helper Widgets
  static Widget _buildInfoCard(String title, List<Widget> children) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title,
                style:
                const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            ...children,
          ],
        ),
      ),
    );
  }

  static Widget _infoRow(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        children: [
          Icon(icon, color: Colors.grey[700], size: 20),
          const SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
  }

  static Widget _chip(String label) {
    return Chip(
      label: Text(label),
      backgroundColor: Colors.blue[50],
      labelStyle: const TextStyle(color: Colors.blue),
    );
  }

  static Widget _highlightCard(String text) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.yellow[100],
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(text,
          style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 14)),
    );
  }
}
