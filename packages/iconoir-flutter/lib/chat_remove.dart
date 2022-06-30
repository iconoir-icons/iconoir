import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChatRemove extends StatelessWidget {
  const ChatRemove({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ChatRemove.svg');
}
