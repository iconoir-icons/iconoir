import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Building extends StatelessWidget {
  const Building({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Building.svg');
}
