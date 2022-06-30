import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CrackedEgg extends StatelessWidget {
  const CrackedEgg({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CrackedEgg.svg');
}
