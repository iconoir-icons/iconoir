import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShieldCross extends StatelessWidget {
  const ShieldCross({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ShieldCross.svg');
}
