import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MouseButtonLeft extends StatelessWidget {
  const MouseButtonLeft({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MouseButtonLeft.svg');
}
