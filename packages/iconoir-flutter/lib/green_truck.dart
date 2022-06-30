import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GreenTruck extends StatelessWidget {
  const GreenTruck({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GreenTruck.svg');
}
