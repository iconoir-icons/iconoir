import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DiceThree extends StatelessWidget {
  const DiceThree({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DiceThree.svg');
}
