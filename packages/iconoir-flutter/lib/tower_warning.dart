import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TowerWarning extends StatelessWidget {
  const TowerWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TowerWarning.svg');
}
