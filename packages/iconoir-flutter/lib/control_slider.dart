import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ControlSlider extends StatelessWidget {
  const ControlSlider({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ControlSlider.svg');
}
