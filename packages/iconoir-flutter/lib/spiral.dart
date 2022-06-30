import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Spiral extends StatelessWidget {
  const Spiral({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Spiral.svg');
}
