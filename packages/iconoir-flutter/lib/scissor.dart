import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Scissor extends StatelessWidget {
  const Scissor({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Scissor.svg');
}
