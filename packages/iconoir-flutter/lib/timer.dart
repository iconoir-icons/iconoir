import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Timer extends StatelessWidget {
  const Timer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Timer.svg');
}
