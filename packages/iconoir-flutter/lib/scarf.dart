import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Scarf extends StatelessWidget {
  const Scarf({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Scarf.svg');
}
