import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Soil extends StatelessWidget {
  const Soil({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Soil.svg');
}
