import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Shuffle extends StatelessWidget {
  const Shuffle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Shuffle.svg');
}
