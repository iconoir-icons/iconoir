import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Leaf extends StatelessWidget {
  const Leaf({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Leaf.svg');
}
