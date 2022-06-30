import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Truck extends StatelessWidget {
  const Truck({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Truck.svg');
}
