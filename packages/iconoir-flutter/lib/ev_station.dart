import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EvStation extends StatelessWidget {
  const EvStation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EvStation.svg');
}
