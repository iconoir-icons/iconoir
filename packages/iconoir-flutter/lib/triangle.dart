import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Triangle extends StatelessWidget {
  const Triangle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Triangle.svg');
}
