import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SoccerBall extends StatelessWidget {
  const SoccerBall({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SoccerBall.svg');
}
