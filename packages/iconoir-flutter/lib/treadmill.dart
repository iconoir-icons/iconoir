import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Treadmill extends StatelessWidget {
  const Treadmill({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Treadmill.svg');
}
