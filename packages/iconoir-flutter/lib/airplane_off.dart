import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AirplaneOff extends StatelessWidget {
  const AirplaneOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AirplaneOff.svg');
}
