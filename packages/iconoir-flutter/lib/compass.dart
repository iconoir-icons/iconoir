import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Compass extends StatelessWidget {
  const Compass({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Compass.svg');
}
