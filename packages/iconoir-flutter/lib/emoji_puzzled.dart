import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EmojiPuzzled extends StatelessWidget {
  const EmojiPuzzled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EmojiPuzzled.svg');
}
