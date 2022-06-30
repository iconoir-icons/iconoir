import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MinusSquare extends StatelessWidget {
  const MinusSquare({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MinusSquare.svg');
}
