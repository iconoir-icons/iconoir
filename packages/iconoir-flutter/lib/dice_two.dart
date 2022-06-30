import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DiceTwo extends StatelessWidget {
  const DiceTwo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DiceTwo.svg');
}
