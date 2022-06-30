import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Selection extends StatelessWidget {
  const Selection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Selection.svg');
}
