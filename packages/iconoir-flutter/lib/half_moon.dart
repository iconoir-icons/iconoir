import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HalfMoon extends StatelessWidget {
  const HalfMoon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/HalfMoon.svg');
}
