import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Codepen extends StatelessWidget {
  const Codepen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Codepen.svg');
}
