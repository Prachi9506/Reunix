import 'package:flutter/material.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<Register> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController confirmPasswordController = TextEditingController();

  bool _isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        color: Colors.blueAccent,
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              children: [
                 Icon(Icons.person_add_alt_1, size: 100, color: Color(0xFF00C8E0)),
                 SizedBox(height: 20),
                const Text(
                  "Create Account",
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 40),
                _buildTextField(emailController, "Email", Icons.email),
                const SizedBox(height: 15),
                _buildTextField(passwordController, "Password", Icons.lock, isPassword: true),
                const SizedBox(height: 15),
                _buildTextField(confirmPasswordController, "Confirm Password", Icons.lock_outline, isPassword: true),
                const SizedBox(height: 30),
                _buildButton(
                  "Register",
                      () async {
                    final email = emailController.text.trim();
                    final password = passwordController.text.trim();
                    final confirmPassword = confirmPasswordController.text.trim();

                    if (email.isEmpty || password.isEmpty || confirmPassword.isEmpty) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text("Please fill all the fields")),
                      );
                      return;
                    }

                    if (password != confirmPassword) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text("Passwords do not match")),
                      );
                      return;
                    }

                    // setState(() => _isLoading = true);

                    // try {
                      // TODO: call your AuthProvider.register(email, password) here
                      // await Provider.of<AuthProvider>(context, listen: false).register(email, password);

                    //   if (mounted) {
                    //     Navigator.pushReplacementNamed(context, '/mainnavigation');
                    //   }
                    // } catch (e) {
                    //   ScaffoldMessenger.of(context).showSnackBar(
                    //     SnackBar(content: Text("Registration Failed: $e")),
                    //   );
                    // } finally {
                    //   if (mounted) setState(() => _isLoading = false);
                    // }
                    Navigator.pushReplacementNamed(context, '/mainnavigation');
                  },
                ),
                SizedBox(height: 15),
                GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, '/login');
                  },
                  child: const Text(
                    "Already have an account? Login",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(TextEditingController controller, String label, IconData icon,
      {bool isPassword = false}) {
    return Padding(
      padding:  EdgeInsets.symmetric(horizontal: 30),
      child: TextField(
        controller: controller,
        obscureText: isPassword,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
          prefixIcon: Icon(icon, color: Colors.white),
          labelText: label,
          labelStyle:  TextStyle(color: Colors.white70),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
            borderSide:  BorderSide(color: Colors.white),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
            borderSide:  BorderSide(color: Colors.white, width: 2),
          ),
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
          ? SizedBox(
        width: 20,
        height: 20,
        child: CircularProgressIndicator(
          strokeWidth: 2,
          valueColor: AlwaysStoppedAnimation<Color>(Colors.black),
        ),
      )
          : Text(text, style: const TextStyle(fontSize: 18)),
    );
  }
}
