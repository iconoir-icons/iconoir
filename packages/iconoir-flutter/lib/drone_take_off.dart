import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DroneTakeOff extends StatelessWidget {
  const DroneTakeOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DroneTakeOff.svg');
}
