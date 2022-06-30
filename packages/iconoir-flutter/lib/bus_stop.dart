import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BusStop extends StatelessWidget {
  const BusStop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BusStop.svg');
}
