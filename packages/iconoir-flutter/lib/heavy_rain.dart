import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HeavyRain extends StatelessWidget {
  const HeavyRain({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/HeavyRain.svg');
}
