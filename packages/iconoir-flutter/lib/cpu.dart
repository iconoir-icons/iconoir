import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cpu extends StatelessWidget {
  const Cpu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cpu.svg');
}
