import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NavArrowDown extends StatelessWidget {
  const NavArrowDown({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NavArrowDown.svg');
}
