import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Usb extends StatelessWidget {
  const Usb({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Usb.svg');
}
