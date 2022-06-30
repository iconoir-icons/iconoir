import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gym extends StatelessWidget {
  const Gym({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Gym.svg');
}
