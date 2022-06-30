import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Egg extends StatelessWidget {
  const Egg({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Egg.svg');
}
