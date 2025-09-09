import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
// import 'package:flashcard_app/provider/auth_provider.dart';
class LoginScreen extends StatefulWidget {

  LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController emailController = TextEditingController();

  final TextEditingController passwordController = TextEditingController();

  bool _isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        color:  Colors.blueAccent,
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              children: [
                const Icon(Icons.school_outlined, size: 100, color: Color(0xFF00C8E0),),
                const SizedBox(height: 20),
                const Text("Welcome Back",
                    style: TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.bold,
                        color: Colors.white)),
                const SizedBox(height: 40),
                _buildTextField(emailController, "Email", Icons.email),
                const SizedBox(height: 15),
                _buildTextField(passwordController, "Password", Icons.lock,
                    isPassword: true),
                const SizedBox(height: 30),
                _buildButton(
                  // _isLoading ? "Signining..." :
                  "Sign In",
                  // _isLoading
                  //     ? null // disables button
     () async {
                    final email = emailController.text.trim();
                    final password = passwordController.text.trim();

                    if (email.isEmpty || password.isEmpty) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text(
                            "Please fill all the fields")),
                      );
                      return;
                    }

                    // setState(() => _isLoading = true);

                      // final auth = Provider.of<AuthProvider>(
                      //     context, listen: false);
                      // try {
                      //   await auth.login(email, password);
                      //   if (mounted) {
                      //     Navigator.pushReplacementNamed(context, '/home');
                      //   }
                      // } catch (e) {
                      //   ScaffoldMessenger.of(context).showSnackBar(
                      //     SnackBar(content: Text("Login Failed: $e")),
                      //   );
                      // } finally {
                      //   if (mounted) setState(() => _isLoading = false);
                      // }
                  Navigator.pushNamed(context, '/mainnavigation');
                  },
                ),
                const SizedBox(height: 15),
                GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, '/register');
                  },
                  child: const Text(
                    "Don't have an account? Register",
                    style: TextStyle(color: Colors.white),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(TextEditingController controller, String label,
      IconData icon,
      {bool isPassword = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: TextField(
        controller: controller,
        obscureText: isPassword,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
          prefixIcon: Icon(icon, color: Colors.white),
          labelText: label,
          labelStyle: const TextStyle(color: Colors.white70),
          enabledBorder:
          OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: Colors.white)),
          focusedBorder:
          OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: Colors.white, width: 2)),
        ),
      ),
    );
  }

  Widget _buildButton(String text, VoidCallback? onPressed) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 15),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
      onPressed: onPressed,
      child: _isLoading
          ?  SizedBox(
        width: 20,
        height: 20,
        child: CircularProgressIndicator(
          strokeWidth: 2,
          valueColor: AlwaysStoppedAnimation<Color>(Colors.black),
        ),
      )
          : Text(text, style:  TextStyle(fontSize: 18)),
    );
  }
}

