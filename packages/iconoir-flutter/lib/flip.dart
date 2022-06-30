import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flip extends StatelessWidget {
  const Flip({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Flip.svg');
}
