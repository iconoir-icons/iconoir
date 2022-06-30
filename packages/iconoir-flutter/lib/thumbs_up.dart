import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ThumbsUp extends StatelessWidget {
  const ThumbsUp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ThumbsUp.svg');
}
