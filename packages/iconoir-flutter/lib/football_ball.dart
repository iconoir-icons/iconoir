import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FootballBall extends StatelessWidget {
  const FootballBall({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FootballBall.svg');
}
