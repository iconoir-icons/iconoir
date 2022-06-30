import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Axes extends StatelessWidget {
  const Axes({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Axes.svg');
}
