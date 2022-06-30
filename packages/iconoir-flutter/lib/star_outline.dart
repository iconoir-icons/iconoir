import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StarOutline extends StatelessWidget {
  const StarOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/StarOutline.svg');
}
