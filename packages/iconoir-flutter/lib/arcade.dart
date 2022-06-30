import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Arcade extends StatelessWidget {
  const Arcade({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Arcade.svg');
}
