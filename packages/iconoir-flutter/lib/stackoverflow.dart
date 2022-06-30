import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Stackoverflow extends StatelessWidget {
  const Stackoverflow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Stackoverflow.svg');
}
