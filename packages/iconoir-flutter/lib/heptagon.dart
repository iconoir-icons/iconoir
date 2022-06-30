import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Heptagon extends StatelessWidget {
  const Heptagon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Heptagon.svg');
}
