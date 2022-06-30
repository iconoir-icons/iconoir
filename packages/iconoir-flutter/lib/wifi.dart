import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Wifi extends StatelessWidget {
  const Wifi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Wifi.svg');
}
