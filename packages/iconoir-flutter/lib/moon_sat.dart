import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MoonSat extends StatelessWidget {
  const MoonSat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MoonSat.svg');
}
