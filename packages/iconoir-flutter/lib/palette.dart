import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Palette extends StatelessWidget {
  const Palette({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Palette.svg');
}
