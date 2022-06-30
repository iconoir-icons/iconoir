import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Erase extends StatelessWidget {
  const Erase({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Erase.svg');
}
