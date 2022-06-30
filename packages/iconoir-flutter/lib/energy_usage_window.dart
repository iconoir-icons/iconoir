import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EnergyUsageWindow extends StatelessWidget {
  const EnergyUsageWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EnergyUsageWindow.svg');
}
