import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LightBulbOn extends StatelessWidget {
  const LightBulbOn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LightBulbOn.svg');
}
