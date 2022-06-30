import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hexagon extends StatelessWidget {
  const Hexagon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Hexagon.svg');
}
