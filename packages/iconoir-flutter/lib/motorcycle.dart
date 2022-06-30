import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Motorcycle extends StatelessWidget {
  const Motorcycle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Motorcycle.svg');
}
