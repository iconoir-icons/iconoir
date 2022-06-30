import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChatBubbleError extends StatelessWidget {
  const ChatBubbleError({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ChatBubbleError.svg');
}
