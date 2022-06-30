import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NavArrowUp extends StatelessWidget {
  const NavArrowUp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NavArrowUp.svg');
}
