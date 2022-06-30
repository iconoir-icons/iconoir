import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Eject extends StatelessWidget {
  const Eject({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Eject.svg');
}
