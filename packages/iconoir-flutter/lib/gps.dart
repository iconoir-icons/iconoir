import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gps extends StatelessWidget {
  const Gps({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Gps.svg');
}
