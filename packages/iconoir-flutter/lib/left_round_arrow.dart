import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LeftRoundArrow extends StatelessWidget {
  const LeftRoundArrow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LeftRoundArrow.svg');
}
