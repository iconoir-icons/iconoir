import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg3DThreePtsBox extends StatelessWidget {
  const Svg3DThreePtsBox({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/3DThreePtsBox.svg');
}
