import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tunnel extends StatelessWidget {
  const Tunnel({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Tunnel.svg');
}
