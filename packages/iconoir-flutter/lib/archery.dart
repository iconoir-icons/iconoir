import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Archery extends StatelessWidget {
  const Archery({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Archery.svg');
}
