import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BowlingBall extends StatelessWidget {
  const BowlingBall({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BowlingBall.svg');
}
