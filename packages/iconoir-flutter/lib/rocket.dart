import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rocket extends StatelessWidget {
  const Rocket({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Rocket.svg');
}
