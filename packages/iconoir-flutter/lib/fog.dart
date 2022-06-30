import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Fog extends StatelessWidget {
  const Fog({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Fog.svg');
}
