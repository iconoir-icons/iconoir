import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flower extends StatelessWidget {
  const Flower({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Flower.svg');
}
