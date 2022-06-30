import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RightRoundArrow extends StatelessWidget {
  const RightRoundArrow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RightRoundArrow.svg');
}
