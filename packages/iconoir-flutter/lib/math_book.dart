import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MathBook extends StatelessWidget {
  const MathBook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MathBook.svg');
}
