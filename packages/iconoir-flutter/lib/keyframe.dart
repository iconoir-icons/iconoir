import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Keyframe extends StatelessWidget {
  const Keyframe({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Keyframe.svg');
}
