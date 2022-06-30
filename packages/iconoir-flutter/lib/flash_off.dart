import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FlashOff extends StatelessWidget {
  const FlashOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FlashOff.svg');
}
