import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GasTank extends StatelessWidget {
  const GasTank({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GasTank.svg');
}
