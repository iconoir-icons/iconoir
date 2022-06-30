import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LightBulbOff extends StatelessWidget {
  const LightBulbOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LightBulbOff.svg');
}
