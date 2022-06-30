import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BatteryCharging extends StatelessWidget {
  const BatteryCharging({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BatteryCharging.svg');
}
