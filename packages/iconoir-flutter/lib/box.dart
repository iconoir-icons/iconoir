import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Box extends StatelessWidget {
  const Box({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Box.svg');
}
