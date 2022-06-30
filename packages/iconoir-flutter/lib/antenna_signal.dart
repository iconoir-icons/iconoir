import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AntennaSignal extends StatelessWidget {
  const AntennaSignal({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AntennaSignal.svg');
}
