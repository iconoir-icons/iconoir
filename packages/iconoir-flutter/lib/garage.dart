import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Garage extends StatelessWidget {
  const Garage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Garage.svg');
}
