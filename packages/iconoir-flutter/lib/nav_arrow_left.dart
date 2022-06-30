import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NavArrowLeft extends StatelessWidget {
  const NavArrowLeft({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NavArrowLeft.svg');
}
