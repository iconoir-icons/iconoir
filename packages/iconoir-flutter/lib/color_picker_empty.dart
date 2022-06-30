import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ColorPickerEmpty extends StatelessWidget {
  const ColorPickerEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ColorPickerEmpty.svg');
}
