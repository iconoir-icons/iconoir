import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TwoPointsCircle extends StatelessWidget {
  const TwoPointsCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TwoPointsCircle.svg');
}
