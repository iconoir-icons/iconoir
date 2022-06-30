import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ColorPicker extends StatelessWidget {
  const ColorPicker({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ColorPicker.svg');
}
