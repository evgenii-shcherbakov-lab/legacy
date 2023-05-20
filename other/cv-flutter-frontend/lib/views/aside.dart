import 'package:cv/views/sections/contacts_section.dart';
import 'package:cv/views/sections/greeting_section.dart';
import 'package:flutter/material.dart';

class Aside extends StatelessWidget {
  Aside({Key? key}) : super(key: key);

  final String _firstName = 'Evgenii'.toUpperCase();
  final String _lastName = 'Shcherbakov'.toUpperCase();
  final String _job = 'Fullstack developer'.toUpperCase();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      color: Colors.grey[200],
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.max,
            children: <Widget>[
              Container(
                height: 300,
                width: 300,
                padding: const EdgeInsets.all(10),
                color: Colors.indigoAccent,
                alignment: Alignment.topLeft,
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    GreetingSection(firstName: _firstName, lastName: _lastName, job: _job),
                    ContactsSection(),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
