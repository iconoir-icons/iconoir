import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChatBubbleQuestion extends StatelessWidget {
  const ChatBubbleQuestion({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ChatBubbleQuestion.svg');
}
