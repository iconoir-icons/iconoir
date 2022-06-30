import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Airplane extends StatelessWidget {
  const Airplane({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Airplane.svg');
}
