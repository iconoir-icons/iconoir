import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PineTree extends StatelessWidget {
  const PineTree({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PineTree.svg');
}
