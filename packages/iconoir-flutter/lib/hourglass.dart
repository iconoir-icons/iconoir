import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hourglass extends StatelessWidget {
  const Hourglass({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Hourglass.svg');
}
