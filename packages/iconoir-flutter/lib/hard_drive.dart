import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HardDrive extends StatelessWidget {
  const HardDrive({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/HardDrive.svg');
}
