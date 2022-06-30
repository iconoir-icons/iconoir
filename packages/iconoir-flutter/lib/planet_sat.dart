import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlanetSat extends StatelessWidget {
  const PlanetSat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PlanetSat.svg');
}
