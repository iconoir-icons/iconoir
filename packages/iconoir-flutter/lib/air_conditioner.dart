import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AirConditioner extends StatelessWidget {
  const AirConditioner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AirConditioner.svg');
}
