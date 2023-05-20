import 'package:cv/views/header.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactsSection extends StatelessWidget {
  const ContactsSection({Key? key}) : super(key: key);

  Future<void> onTap(String url) async {
    Uri parsedUri = Uri.parse(url);

    if (await canLaunchUrl(parsedUri)) {
      await launchUrl(parsedUri);
    } else {
      throw 'Could not launch $url';
    }
  }

  Widget _item(IconData iconData, String text, String link, String? semanticLabel) {
    return Container(
      padding: const EdgeInsets.only(top: 5),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: const EdgeInsets.only(right: 10),
            child: Icon(
              iconData,
              color: Colors.white,
              size: 20,
              semanticLabel: semanticLabel,
            ),
          ),
          GestureDetector(
            child: Text(
              text,
              style: const TextStyle(
                color: Colors.white70,
                fontWeight: FontWeight.w600,
                fontSize: 16,
              ),
            ),
            onTap: () async => onTap(link),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(top: 20),
      child: Column(
        children: <Widget>[
          const Header(title: 'Contacts', textColor: Colors.white, dividerColor: Colors.white),
          _item(Icons.mail, 'iipekolict@gmail.com', 'mailto:iipekolict@gmail.com', null),
          _item(Icons.code, 'https://github.com/IIPEKOLICT', 'https://github.com/IIPEKOLICT', null),
          _item(Icons.telegram, '@iipekolict', 'https://tg.com/IIPEKOLICT', null),
        ],
      ),
    );
  }
}
