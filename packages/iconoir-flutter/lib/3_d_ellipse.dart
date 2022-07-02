import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg3DEllipse extends StatelessWidget {
  const Svg3DEllipse({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/3DEllipse.svg');
}
