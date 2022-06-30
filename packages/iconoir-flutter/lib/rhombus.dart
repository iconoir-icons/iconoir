import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rhombus extends StatelessWidget {
  const Rhombus({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Rhombus.svg');
}
