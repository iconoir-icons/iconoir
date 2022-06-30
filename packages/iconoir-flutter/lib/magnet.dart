import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Magnet extends StatelessWidget {
  const Magnet({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Magnet.svg');
}
