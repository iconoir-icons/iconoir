import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gamepad extends StatelessWidget {
  const Gamepad({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Gamepad.svg');
}
