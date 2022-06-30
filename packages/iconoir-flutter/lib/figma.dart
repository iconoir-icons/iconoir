import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Figma extends StatelessWidget {
  const Figma({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Figma.svg');
}
