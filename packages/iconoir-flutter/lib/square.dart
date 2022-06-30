import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Square extends StatelessWidget {
  const Square({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Square.svg');
}
