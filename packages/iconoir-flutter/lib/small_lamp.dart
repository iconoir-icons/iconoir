import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SmallLamp extends StatelessWidget {
  const SmallLamp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SmallLamp.svg');
}
