import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AirplaneHelix extends StatelessWidget {
  const AirplaneHelix({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AirplaneHelix.svg');
}
