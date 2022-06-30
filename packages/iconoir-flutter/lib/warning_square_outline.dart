import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WarningSquareOutline extends StatelessWidget {
  const WarningSquareOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/WarningSquareOutline.svg');
}
