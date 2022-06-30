import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ThreePointsCircle extends StatelessWidget {
  const ThreePointsCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ThreePointsCircle.svg');
}
