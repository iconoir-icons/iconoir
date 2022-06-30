import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Octagon extends StatelessWidget {
  const Octagon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Octagon.svg');
}
