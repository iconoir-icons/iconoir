import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BatteryFull extends StatelessWidget {
  const BatteryFull({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BatteryFull.svg');
}
