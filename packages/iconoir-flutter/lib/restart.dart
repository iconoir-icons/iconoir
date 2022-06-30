import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Restart extends StatelessWidget {
  const Restart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Restart.svg');
}
