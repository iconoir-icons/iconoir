import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DiceOne extends StatelessWidget {
  const DiceOne({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DiceOne.svg');
}
