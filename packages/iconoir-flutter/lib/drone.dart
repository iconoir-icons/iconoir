import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Drone extends StatelessWidget {
  const Drone({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Drone.svg');
}
