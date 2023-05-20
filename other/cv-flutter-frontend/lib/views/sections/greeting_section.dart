import 'package:flutter/material.dart';

class GreetingSection extends StatelessWidget {
  final String firstName;
  final String lastName;
  final String job;

  const GreetingSection({
    Key? key,
    required this.firstName,
    required this.lastName,
    required this.job,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text(
          firstName,
          style: const TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.w300,
            letterSpacing: 2,
            color: Colors.white,
          ),
        ),
        Text(
          lastName,
          textAlign: TextAlign.start,
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            letterSpacing: 1,
            color: Colors.white,
          ),
        ),
        const Divider(
          color: Colors.white,
        ),
        Text(
          job,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            letterSpacing: 1,
            color: Colors.amberAccent,
          ),
        ),
      ],
    );
  }
}
