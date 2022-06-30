import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pacman extends StatelessWidget {
  const Pacman({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Pacman.svg');
}
