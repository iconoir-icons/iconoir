import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RotateCameraLeft extends StatelessWidget {
  const RotateCameraLeft({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RotateCameraLeft.svg');
}
