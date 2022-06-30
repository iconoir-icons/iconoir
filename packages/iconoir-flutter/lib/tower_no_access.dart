import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TowerNoAccess extends StatelessWidget {
  const TowerNoAccess({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TowerNoAccess.svg');
}
