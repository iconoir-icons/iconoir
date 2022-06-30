import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BubbleStar extends StatelessWidget {
  const BubbleStar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BubbleStar.svg');
}
