import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Lock extends StatelessWidget {
  const Lock({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Lock.svg');
}
