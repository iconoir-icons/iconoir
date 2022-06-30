import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoBattery extends StatelessWidget {
  const NoBattery({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoBattery.svg');
}
