import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TimerOff extends StatelessWidget {
  const TimerOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TimerOff.svg');
}
