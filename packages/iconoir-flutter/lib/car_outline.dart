import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CarOutline extends StatelessWidget {
  const CarOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CarOutline.svg');
}
