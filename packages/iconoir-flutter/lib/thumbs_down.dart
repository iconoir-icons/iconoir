import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ThumbsDown extends StatelessWidget {
  const ThumbsDown({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ThumbsDown.svg');
}
