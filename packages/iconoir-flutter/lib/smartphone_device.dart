import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SmartphoneDevice extends StatelessWidget {
  const SmartphoneDevice({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SmartphoneDevice.svg');
}
