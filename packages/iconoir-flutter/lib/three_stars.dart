import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ThreeStars extends StatelessWidget {
  const ThreeStars({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ThreeStars.svg');
}
