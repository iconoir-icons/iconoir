import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChatBubbleEmpty extends StatelessWidget {
  const ChatBubbleEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ChatBubbleEmpty.svg');
}
