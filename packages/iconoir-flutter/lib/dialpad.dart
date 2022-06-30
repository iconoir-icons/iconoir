import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Dialpad extends StatelessWidget {
  const Dialpad({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Dialpad.svg');
}
