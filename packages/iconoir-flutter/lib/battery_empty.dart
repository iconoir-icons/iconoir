import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BatteryEmpty extends StatelessWidget {
  const BatteryEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BatteryEmpty.svg');
}
