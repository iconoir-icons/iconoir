import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Computer extends StatelessWidget {
  const Computer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Computer.svg');
}
