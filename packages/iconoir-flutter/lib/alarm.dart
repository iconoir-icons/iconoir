import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Alarm extends StatelessWidget {
  const Alarm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Alarm.svg');
}
