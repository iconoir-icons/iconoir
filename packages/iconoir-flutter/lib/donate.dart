import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Donate extends StatelessWidget {
  const Donate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Donate.svg');
}
