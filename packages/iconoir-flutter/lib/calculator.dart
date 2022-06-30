import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Calculator extends StatelessWidget {
  const Calculator({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Calculator.svg');
}
