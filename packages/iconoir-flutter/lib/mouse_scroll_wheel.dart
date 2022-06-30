import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MouseScrollWheel extends StatelessWidget {
  const MouseScrollWheel({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MouseScrollWheel.svg');
}
