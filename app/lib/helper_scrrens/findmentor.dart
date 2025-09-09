import 'package:flutter/material.dart';
import '../models/mentor_model.dart';
import '../widgets/mentor_card.dart';
class Findmentor extends StatelessWidget {
   Findmentor({super.key});
  final List<Mentor> mentors = [
    Mentor(
      name: "Shivank Tyagi",
      role: "Software Engineer",
      company: "Google",
      description:
      "Dedicated to mentoring aspiring developers in coding, problem-solving, and career growth. Experienced in building scalable applications and guiding students through Data Structures, Algorithms, and backend development.",
      skills: ["C++", "Data Structures & Algorithms", "FastAPI", "Firebase", "System Design"],
      rating: 4.8,
      sessions: 60,
      experience: 5,
    ),
    Mentor(
      name: "Naitik Gupta",
      role: "Software Developer",
      company: "Microsoft",
      description:
      "Enjoys guiding beginners in coding interviews and problem solving. Focused on backend development and cloud solutions.",
      skills: ["C++", "Java", "Azure"],
      rating: 4.7,
      sessions: 30,
      experience: 5,
    ),

    Mentor(
      name: "Payal Goswami",
      role: "Data Scientist",
      company: "Google",
      description:
      "Loves mentoring students in data science and AI. Experienced in building ML pipelines and data-driven applications.",
      skills: ["Python", "TensorFlow", "Data Analysis"],
      rating: 4.8,
      sessions: 38,
      experience: 6,
    ),

    Mentor(
      name: "Prakhar Srivastav",
      role: "Frontend Engineer",
      company: "Meta",
      description:
      "Dedicated to helping students master frontend technologies. Expert in creating scalable and accessible web applications.",
      skills: ["JavaScript", "React", "UI/UX"],
      rating: 4.6,
      sessions: 25,
      experience: 4,
    ),

    Mentor(
      name: "Prachi Sharma",
      role: "Senior Software Engineer",
      company: "Amazon",
      description:
      "Passionate about helping students transition into tech careers. Specialized in full-stack development and system architecture.",
      skills: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessions: 45,
      experience: 8,
    ),
    Mentor(
      name: "Prachi Sharma",
      role: "Senior Software Engineer",
      company: "Amazon",
      description:
      "Passionate about helping students transition into tech careers. Specialized in full-stack development and system architecture.",
      skills: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessions: 45,
      experience: 8,
    ),
    Mentor(
      name: "Piyush Goel",
      role: "Product Manager",
      company: "Microsoft",
      description:
      "Former engineer now helping students understand the product strategy and management.",
      skills: ["Product Strategy"],
      rating: 4.8,
      sessions: 32,
      experience: 6,
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
              itemCount: mentors.length,
                itemBuilder: (context,idx){
                return MentorCard(mentor: mentors[idx]);
                }
            ),
          )
        ],

      ),
    );
  }
}
