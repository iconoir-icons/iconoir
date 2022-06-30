import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Chocolate extends StatelessWidget {
  const Chocolate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Chocolate.svg');
}
