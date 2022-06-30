import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tower extends StatelessWidget {
  const Tower({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Tower.svg');
}
