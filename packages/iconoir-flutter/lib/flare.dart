import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flare extends StatelessWidget {
  const Flare({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Flare.svg');
}
