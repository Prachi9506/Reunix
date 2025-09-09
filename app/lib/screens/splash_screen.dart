import 'package:flutter/material.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF1E3C72), Color(0xFF2A5298)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    // Image.asset(
                    //   "assets/logos/app_logo.png", // your app logo
                    //   height: 40,
                    //   width: 40,
                    // ),
                    Icon(Icons.school_outlined,color: Color(0xFF00C8E0),size: 100,),
                     SizedBox(width: 10),
                     Text(
                      "ReUnix",
                      style: TextStyle(
                        fontSize: 60,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 30),

                Text(
                  "Connect. Mentor.\nGrow.",
                  style: TextStyle(
                    fontSize: 36,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                 SizedBox(height: 12),
                 Text(
                  "Learn skills that matter. Build projects. Get certified.",
                  style: TextStyle(color: Colors.white70, fontSize: 16),
                ),
                 SizedBox(height: 30),

                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children:  [
                    StatBox(value: "10000+", label: "Alumni"),
                    StatBox(value: "25000+", label: "Students"),
                    StatBox(value: "500+", label: "Sessions"),
                    StatBox(value: "95+", label: "Placement"),
                  ],
                ),
                 SizedBox(height: 30),
                Row(
                  children: [
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.white,
                        foregroundColor: Colors.blue[800],
                        padding:  EdgeInsets.symmetric(
                            horizontal: 24, vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      onPressed: () {
                        // Navigate to registration
                        Navigator.pushNamed(context, '/register');
                      },
                      child:  Text("Get Started →"),
                    ),
                     SizedBox(width: 16),
                    OutlinedButton(
                      style: OutlinedButton.styleFrom(
                        side:  BorderSide(color: Colors.white, width: 1.5),
                        foregroundColor: Colors.white,
                        padding: EdgeInsets.symmetric(
                            horizontal: 24, vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      onPressed: () {
                        // Navigate to login
                        Navigator.pushNamed(context, '/login');
                      },
                      child:  Text("Sign In"),
                    ),
                  ],
                ),
               SizedBox(height: 20),

                Expanded(
                  child: Center(
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            blurRadius: 12,
                            offset:  Offset(0, 6),
                          ),
                        ],
                      ),
                      padding:  EdgeInsets.all(16),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(20),
                        child: Image.asset(
                          "assets/logos/mainimg.png", // your illustration
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class StatBox extends StatelessWidget {
  final String value;
  final String label;
  const StatBox({super.key, required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          value,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          label,
          style:  TextStyle(
            color: Colors.white70,
            fontSize: 14,
          ),
        ),
      ],
    );
  }
}
