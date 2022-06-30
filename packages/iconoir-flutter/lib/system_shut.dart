import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SystemShut extends StatelessWidget {
  const SystemShut({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SystemShut.svg');
}
