import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Keyframes extends StatelessWidget {
  const Keyframes({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Keyframes.svg');
}
