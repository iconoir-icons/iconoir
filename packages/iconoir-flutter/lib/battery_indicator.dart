import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BatteryIndicator extends StatelessWidget {
  const BatteryIndicator({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BatteryIndicator.svg');
}
