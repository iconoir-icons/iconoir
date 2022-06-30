import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DashFlag extends StatelessWidget {
  const DashFlag({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DashFlag.svg');
}
