import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Circle extends StatelessWidget {
  const Circle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Circle.svg');
}
