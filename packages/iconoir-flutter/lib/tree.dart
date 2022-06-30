import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tree extends StatelessWidget {
  const Tree({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Tree.svg');
}
