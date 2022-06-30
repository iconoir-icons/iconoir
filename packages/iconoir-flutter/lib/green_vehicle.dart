import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GreenVehicle extends StatelessWidget {
  const GreenVehicle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GreenVehicle.svg');
}
