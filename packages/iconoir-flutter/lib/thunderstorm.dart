import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Thunderstorm extends StatelessWidget {
  const Thunderstorm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Thunderstorm.svg');
}
