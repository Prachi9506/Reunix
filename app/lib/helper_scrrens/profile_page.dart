import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        backgroundColor: Colors.blueAccent,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // 🔹 User Info Header
          Row(
            children: [
              const CircleAvatar(
                radius: 35,
                backgroundImage: AssetImage("assets/logos/profi.jpg"),
              ),
              const SizedBox(width: 16),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text(
                    "Admin User",
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    "Logged in as Admin",
                    style: TextStyle(color: Colors.grey, fontSize: 14),
                  ),
                ],
              )
            ],
          ),

          const SizedBox(height: 20),
          const Divider(),

          // 🔹 Menu Options
          ListTile(
            leading: const Icon(Icons.person_outline),
            title: const Text("Personal Info"),
            trailing: const Icon(Icons.arrow_forward_ios, size: 16),
            onTap: () {
              Navigator.pushNamed(context, '/personal');
            },
          ),
          ListTile(
            leading: const Icon(Icons.emoji_events_outlined),
            title: const Text("Achievements"),
            trailing: const Icon(Icons.arrow_forward_ios, size: 16),
            onTap: () {
              // TODO: Navigate to Achievements screen
            },
          ),
          ListTile(
            leading: const Icon(Icons.logout),
            title: const Text("Logout"),
            onTap: () {
              // TODO: Logout logic
              Navigator.popUntil(context,(route) => route.isFirst); // back to dashboard
            },
          ),
        ],
      ),
    );
  }
}

