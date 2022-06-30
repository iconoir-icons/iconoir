import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Mic extends StatelessWidget {
  const Mic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Mic.svg');
}
