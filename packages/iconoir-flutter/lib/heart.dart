import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Heart extends StatelessWidget {
  const Heart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Heart.svg');
}
