import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PiggyBank extends StatelessWidget {
  const PiggyBank({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PiggyBank.svg');
}
