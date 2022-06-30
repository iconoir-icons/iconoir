import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BusOutline extends StatelessWidget {
  const BusOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BusOutline.svg');
}
