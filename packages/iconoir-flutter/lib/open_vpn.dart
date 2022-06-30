import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OpenVpn extends StatelessWidget {
  const OpenVpn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/OpenVpn.svg');
}
