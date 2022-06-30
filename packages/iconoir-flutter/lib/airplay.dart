import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Airplay extends StatelessWidget {
  const Airplay({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Airplay.svg');
}
