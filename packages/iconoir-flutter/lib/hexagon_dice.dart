import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HexagonDice extends StatelessWidget {
  const HexagonDice({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/HexagonDice.svg');
}
