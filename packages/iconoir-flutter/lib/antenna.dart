import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Antenna extends StatelessWidget {
  const Antenna({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Antenna.svg');
}
