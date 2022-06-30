import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cylinder extends StatelessWidget {
  const Cylinder({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cylinder.svg');
}
