import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MessageText extends StatelessWidget {
  const MessageText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MessageText.svg');
}
