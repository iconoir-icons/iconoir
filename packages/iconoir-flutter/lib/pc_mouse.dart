import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PcMouse extends StatelessWidget {
  const PcMouse({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PcMouse.svg');
}
