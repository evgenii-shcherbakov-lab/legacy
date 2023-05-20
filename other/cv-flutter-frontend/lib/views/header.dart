import 'package:flutter/material.dart';

class Header extends StatelessWidget {
  final String title;
  final Color? textColor;
  final Color? dividerColor;

  const Header({Key? key, required this.title, this.textColor, this.dividerColor})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.centerLeft,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              color: textColor,
              fontWeight: FontWeight.w600,
              fontSize: 20,
            ),
          ),
          Divider(
            color: dividerColor,
          )
        ],
      ),
    );
  }
}
