import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pokeball extends StatelessWidget {
  const Pokeball({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Pokeball.svg');
}
