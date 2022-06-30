import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cell2X2 extends StatelessWidget {
  const Cell2X2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cell2X2.svg');
}
