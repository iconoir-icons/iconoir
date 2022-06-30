import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LightBulb extends StatelessWidget {
  const LightBulb({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LightBulb.svg');
}
