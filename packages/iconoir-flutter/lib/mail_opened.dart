import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MailOpened extends StatelessWidget {
  const MailOpened({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MailOpened.svg');
}
